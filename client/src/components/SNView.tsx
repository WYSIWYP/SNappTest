import React, {useEffect, useState, useRef} from 'react';
import {range} from '../util/Util';
// import {Note} from '@tonejs/midi/dist/Note';
import MusicXML from 'musicxml-interfaces';
import {parse} from '../parser/MusicXML'
import {basicNote, Score, Tie, TimeSignature, KeySignature} from '../parser/Types'
import {colorPreferenceStyles, usePreferencesState, spacingPreferenceOption, scalePreferenceOption} from '../contexts/Preferences';
import {useDialogState} from '../contexts/Dialog';
import * as Dialog from '../util/Dialog';
import {navigate} from '@reach/router';

type Props = {
    xml: MusicXML.ScoreTimewise,
    forcedWidth?: number,
};

enum Accidental {
    Flat = -1,
    Natural = 0,
    Sharp = 1
}

const SNView: React.FC<Props> = ({xml, forcedWidth}) => {
    console.log(xml)
    const ref = useRef(null! as HTMLDivElement);
    let [width, setWidth] = useState<number | undefined>(undefined);
    let [score, setScore] = useState<Score | undefined>(undefined);
    let [preferences,] = usePreferencesState();

    let [dialogState, setDialogState] = useDialogState();

    let showError = (error: string) => {
        setDialogState(Dialog.showMessage('An Error Occurred', error, 'Close', () => {
            navigate('/');
            setImmediate(() => setDialogState(Dialog.close()));
        }));
    }
    let showErrorRef = useRef(showError);

    console.log('Score:', score);
    useEffect(() => {
        if (forcedWidth === undefined) {
            let width: number = undefined!;
            let callback = () => {
                let newWidth = ref.current!.getBoundingClientRect().width;
                if (width !== newWidth) {
                    width = newWidth;
                    setWidth(newWidth);
                }
            };
            window.addEventListener("resize", callback);
            // let interval = setInterval(callback, 20);
            callback();
            return () => {
                window.removeEventListener("resize", callback);
                // clearInterval(interval);
            }
        } else {
            setWidth(forcedWidth);
        }
    }, [setWidth, forcedWidth]);

    useEffect(() => {
        // parse only when page loads or xml changes
        try {
            setScore(parse(xml));
        } catch (e) {
            showErrorRef.current('An issue was encountered while processing this file.');
        }
    }, [xml]);

    if (score === undefined || width === undefined) { //skip first render when width is unknown or parsing is incomplete
        return <div ref={ref}></div>;
    }

    try {
        let devMode = false;

        // fetch preference values
        let {
            noteDurationColor,
            noteSymbolColor,
            staffScale,
            horizontalSpacing,
            verticalSpacing,
            noteScale,
            naturalNoteShape,
            sharpNoteShape,
            flatNoteShape,
            measuresPerRow,
            accidentalType
        } = preferences;

        // Map preference strings to numeric values 
        let noteScaleMap: Record<scalePreferenceOption, number> = {
            small: 15,
            medium: 20,
            large: 25
        }
        let staffScaleMap: Record<scalePreferenceOption, number> = {
            small: 18,
            medium: 25,
            large: 32
        };
        let verticalSpacingMap: Record<spacingPreferenceOption, number> = {
            narrow: 10,
            moderate: 30,
            wide: 50
        };
        let horizontalSpacingMap: Record<spacingPreferenceOption, number> = {
            narrow: 20,
            moderate: 40,
            wide: 60
        };

        //general spacing
        let noteSymbolSize = noteScaleMap[noteScale]; //width/height of note symbols
        let strokeWidth = 2;
        let tickSize = 7;

        //vertical spacing
        let verticalPadding = 30; //top/bottom padding
        let rowPadding = verticalSpacingMap[verticalSpacing]; //space between rows
        let measureLabelSpace = 15; //space for measure labels

        // spacing between two clefs (aka grand staff distance)
        let dynamicsSpace = 20;
        let lyricsSpace = 20;
        let staffPadding = 5; 
        let staffDistance = dynamicsSpace + lyricsSpace + 2 * staffPadding; 

        // annotation space for each clef
        let fingeringSpace = 20;
        let articulationSpace = 20;
        let articulationPadding = 5;
        let annotationSpace = fingeringSpace + articulationSpace + 2 * articulationPadding;

        //horizontal spacing
        let horizontalPadding = horizontalSpacingMap[horizontalSpacing]; //left/right padding
        let staffLabelSpace = staffScaleMap[staffScale]; //space for staff labels
        let octaveLabelSpace = measureLabelSpace; //space for octave labels
        // let tieExtensionSpace = measureLabelSpace;

        // composite horizontal spacing
        let scoreWidth = width - 2 * horizontalPadding - staffLabelSpace - octaveLabelSpace; // width of just the WYSIWYP score
        let beatWidth = scoreWidth / score.tracks[0].timeSignatures[0].beats / measuresPerRow;

        // get key signature
        let keyFifths = score.tracks[0].keySignatures[0].fifths;

        // let octaveGroups = [1, 1, 0, 0, 0, 1, 1]; //octaveGroups (C D E / F G A B)
        // let staffLabels = ['𝒯','𝐵'];
        let octaveLines = [
            {color: 'red', number: true}, undefined, undefined, /* C, D, E */
            {color: 'blue'}, undefined, undefined, undefined, /* F, G, A, B */
        ];
        let accidentalMap = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0].map(x => x === 1); // C, C#, D, D#, E, ...
        let noteMap = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6];

        let getNoteAccidental = (note: number): Accidental => {
            return accidentalMap[note % 12] ? (keyFifths >= 0 ? Accidental.Sharp : Accidental.Flat) : Accidental.Natural;
        };

        // We map C0 (midi note 12) to line 0.
        let getNoteLine = (note: number) => {
            let line = Math.floor(note / 12 - 1) * 7 + noteMap[note % 12];

            // if note is flat, we need to bring it a line higher.
            if (accidentalType === 'auto' && getNoteAccidental(note) < 0) line++;
            else if (accidentalType === 'flat' && getNoteAccidental(note) !== 0) line++; // user overrided the accidental setting

            return line;
        };

        //find the title and author
        let title = '';
        try {
            title = xml.movementTitle;
            title = xml.work.workTitle;
        } catch(e){}

        let author = '';
        try {
            let credits = xml.credits.filter(x=>x.creditWords !== undefined && x.creditWords.length > 0).map(x=>x.creditWords);
            credits.forEach(credit=>{credit.forEach(words=>{
                if(Math.abs(words.words.length-20)<Math.abs(author.length-20)){
                    author = words.words;
                }
            })})
        } catch(e){}


        //calculate lowest and highest note
        let minNote = 128, maxNote = -1;
        score.tracks.forEach(track => track.measures.forEach(measure =>
            measure.forEach(note => {
                minNote = Math.min(minNote, note.midi);
                maxNote = Math.max(maxNote, note.midi);
            })
        ));

        //if there was an issue, abort
        if (minNote >= 128 || minNote < 0 || maxNote >= 128 || maxNote < 0) {
            console.log(minNote, maxNote);
            throw new Error('An issue was detected while analyzing this work\'s note range');
        }

        //calculate the height of each row (based upon low/high notes and oct groups)
        let minLine = getNoteLine(minNote);
        let maxLine = getNoteLine(maxNote);

        // find the closest colored line for minNote and minLine
        while (minLine % 7 !== 0 && minLine % 7 !== 3) minLine--;
        while (maxLine % 7 !== 0 && maxLine % 7 !== 3) maxLine++;

        // widen staff range if it is too small
        if (Math.abs(maxLine - minLine) <= 1) {
            maxLine += (maxLine % 7 === 0) ? 3 : 4;
            minLine -= (minLine % 7 === 0) ? 4 : 3;
        }

        let rowHeight = (maxLine - minLine) * noteSymbolSize / 2; //not including measure labels

        //calculate the number of beats per measure
        let beatsPerMeasure = score.tracks[0].timeSignatures[0].beats;
        let measureWidth = beatWidth * beatsPerMeasure;

        //calculate tne number of measures per row
        let availableMeasureSpace = width - horizontalPadding * 2 - staffLabelSpace - octaveLabelSpace;
        // let measuresPerRow = Math.floor(availableMeasureSpace / measureWidth);
        // if (measuresPerRow <= 0) {
        //     throw new Error('Could not place a measure in the allowed space');
        // }
        horizontalPadding += (availableMeasureSpace - measuresPerRow * measureWidth) / 2; //update horizontal padding to center rows

        //calculate the number of rows
        //let ticksPerMeasure = midi.header.ppq*beatsPerMeasure; //needs to take into account size of a beat
        // let beatsPerRow = beatsPerMeasure * measuresPerRow;
        let measureNumber = score.tracks.reduce((accum, track) => Math.max(accum, track.measures.length), 0);
        if (measureNumber <= 0) {
            throw new Error('Failed to identify number of measures');
        }
        let rowNumber = Math.ceil(measureNumber / measuresPerRow);

        //calculate required height (vert padding + row height + row padding)
        // let height = verticalPadding * 2 + rowNumber * (rowHeight + measureLabelSpace) + (rowNumber - 1) * rowPadding;

        let getCurrentSignatures = (measureNumber: number): {currentTime: TimeSignature, currentKey: KeySignature} => {
            let timeSignatures = [...score!.tracks[0].timeSignatures].reverse(); // we reverse the array because we want to find the latest key signature.
            let keySignatures = [...score!.tracks[0].keySignatures].reverse();

            let currentTime = timeSignatures.find(timeSignature => timeSignature.measure <= measureNumber);
            let currentKey = keySignatures.find(keySignature => keySignature.measure <= measureNumber);

            // sometimes, signatures are defined on the second measure. Below lines handle such cases.
            if (!currentTime) currentTime = score!.tracks[0].timeSignatures[0]; 
            if (!currentKey) currentKey = score!.tracks[0].keySignatures[0];
            return {currentTime, currentKey};
        }

        let measure = (x: number, y: number, measureNumber: number) => {
            // TODO: handle pick up measures
            // Get time signature of current measure
            let {currentTime, currentKey} = getCurrentSignatures(measureNumber);
            beatWidth = scoreWidth / currentTime.beats / measuresPerRow;
            beatsPerMeasure = currentTime.beats;
            keyFifths = currentKey!.fifths;

            // Draw measure
            let key = 0;
            let measureSVG: JSX.Element[] = [];
            measureSVG.push(<rect key={key++} x={measureWidth - strokeWidth / 2} y={measureLabelSpace - strokeWidth / 2} width={strokeWidth} height={rowHeight + strokeWidth} fill="#000000" />);
            for (let j = minLine; j <= maxLine; j++) {
                let octaveLine = octaveLines[j % 7];
                if (octaveLine !== undefined) {
                    let lineY = measureLabelSpace + rowHeight - (j - minLine) * noteSymbolSize / 2;
                    measureSVG.push(<rect key={key++} x={strokeWidth / 2} y={lineY - strokeWidth / 2} width={measureWidth - strokeWidth} height={strokeWidth} fill={octaveLine.color} />);
                    if (measureNumber % measuresPerRow === 0 && octaveLine.number === true) {
                        measureSVG.push(<text x={-strokeWidth} key={key++} y={lineY} fontSize={measureLabelSpace} textAnchor="end" dominantBaseline="middle">{Math.floor(j / 7)}</text>);
                    }
                    if (j < maxLine) {
                        for (let measureNumber = 1; measureNumber < beatsPerMeasure; measureNumber++) {
                            let tickX = measureWidth / beatsPerMeasure * measureNumber;
                            measureSVG.push(<rect key={key++} x={tickX - strokeWidth / 2} y={lineY - tickSize} width={strokeWidth} height={tickSize - strokeWidth / 2} fill="#000000" />);
                        }
                    }
                }
            }

            // Add notes to the measure
            const noteHeadSVG: JSX.Element[] = [];
            const noteTailSVG: JSX.Element[] = [];
            score!.tracks.forEach(track => {
                track.measures[measureNumber].forEach((note, _idx) => {
                    noteHeadSVG.push(noteHead(note, key++));

                    let tieStart = note.attributes.ties.includes(Tie.Start);
                    let tieStop = note.attributes.ties.includes(Tie.Stop);
                    let isLastMeasure = ((measureNumber + 1) % measuresPerRow === 0); // whether current measure is the last measure of the row
                    let isLastNote = note.time + note.duration >= currentTime.beats; // whether the note reaches the end of the measure
                    let noteSpansRow = tieStart && isLastMeasure && isLastNote; // whether tied note spans next row
                    noteTailSVG.push(noteTail(note, key++, tieStart, tieStop, noteSpansRow));
                });
            });

            return (
                <g id={`measure${measureNumber + 1}`} key={measureNumber} transform={`translate(${x}, ${y})`}>
                    <g id='frame'>
                        {devMode ? <rect width={measureWidth} height={measureLabelSpace - strokeWidth / 2} fill="#ffdddd" /> : null}
                        <text x={strokeWidth} y={measureLabelSpace - strokeWidth} fontSize={measureLabelSpace}>{measureNumber + 1}</text>
                        {measureSVG}
                    </g>
                    <g id='notes'>
                        {noteTailSVG}
                        {noteHeadSVG}
                    </g>
                </g>
            );
        }

        let row = (i: number): JSX.Element => {
            let height = (rowHeight + measureLabelSpace) + noteSymbolSize / 2;
            return (
                <div className={`snview-row snview-row-${i+1}`} key={i} style={{position: 'relative', height: 'auto', paddingBottom: `${rowPadding}px`}}>
                    <svg viewBox={`0 0 ${width} ${height}`}>
                        <g id={`row${i}`} key={i} transform={`translate(${horizontalPadding}, 0)`}>
                            {devMode ? <rect y={measureLabelSpace} width={staffLabelSpace} height={rowHeight} fill="#ffdddd" /> : null}
                            {devMode ? <rect x={staffLabelSpace} y={measureLabelSpace} width={octaveLabelSpace} height={rowHeight} fill="#ffddff" /> : null}
                            <text x={staffLabelSpace} y={measureLabelSpace + rowHeight / 2} fontSize={staffLabelSpace * 1.5} textAnchor="end" dominantBaseline="middle">𝒯</text>
                            <rect x={staffLabelSpace + octaveLabelSpace - strokeWidth / 2} y={measureLabelSpace - strokeWidth / 2} width={strokeWidth} height={rowHeight + strokeWidth} fill="#000000" />

                            {range(0, i < rowNumber - 1 ? measuresPerRow : measureNumber - (rowNumber - 1) * measuresPerRow).map(j =>
                                measure(staffLabelSpace + octaveLabelSpace + j * measureWidth, 0, i * measuresPerRow + j)
                            )}
                        </g>
                    </svg>
                </div>
            );
        }

        let noteTimeToPos = (noteTime: number) => ({
            x: beatWidth * noteTime,
            y: rowHeight + measureLabelSpace
        });

        // let beatsToPos = (beat: number) => {
        //     let row = Math.floor(beat / beatsPerRow);
        //     let measure = (beat - row * beatsPerRow) / beatsPerMeasure;
        //     return {
        //         row, measure,
        //         ...rowMeasureToPos(row, measure)
        //     };
        // }
        // let rowMeasureToPos = (row: number, measure: number) => ({
        //     x: horizontalPadding + staffLabelSpace + octaveLabelSpace + measure * measureWidth,
        //     y: verticalPadding + row * (rowHeight + measureLabelSpace + rowPadding) + rowHeight + measureLabelSpace
        // });

        let noteTail = (note: basicNote, i: number, tieStart: boolean, tieStop: boolean, noteSpansRow: boolean) => {
            let key = 0;
            let boxes: JSX.Element[] = [];

            let line = getNoteLine(note.midi) - minLine;
            let {x: xStart, y: yStart} = noteTimeToPos(note.time);
            let {x: xEnd} = noteTimeToPos(note.time + note.duration);

            // let pushBox = (x1: number, x2: number, y: number) => {
            //     boxes.push(<rect key={key++} x={x1} y={y - (line + 1) * noteSymbolSize / 2} width={x2 - x1} height={noteSymbolSize} fill={colorPreferenceStyles[noteDurationColor]} fillOpacity={.5} />);
            // }
            // while (rowStart < rowEnd) {
            //     //only executes rarely so it is faster to compute this value in the loop
            //     pushBox(xStart, horizontalPadding + staffLabelSpace + octaveLabelSpace + measuresPerRow * measureWidth, yStart);
            //     rowStart++;
            //     measureStart = 0;
            //     let {x, y} = rowMeasureToPos(rowStart, measureStart);
            //     xStart = x;
            //     yStart = y;
            // }

            let roundingSpace = Math.max(Math.min(noteSymbolSize, xEnd-xStart),0);
            let radiusStart = roundingSpace/4;
            let radiusEnd = roundingSpace/2;
            let pointedEnd = noteSpansRow;
            
            if(tieStart){
                //if(!noteSpansRow){ //this check prevents pointed ends from extending past the end of the row
                    radiusEnd = 0;
                //}
            }
            if(tieStop){
                radiusStart = 0;
            }
            boxes.push(
                <path
                    key={key++}
                    d={`
                        M${xStart+radiusStart} ${yStart - (line + 1) * noteSymbolSize / 2}
                        H${xEnd - radiusEnd}
                        ${pointedEnd?`l`:`a${radiusEnd} ${radiusEnd} 0 0 ${noteSpansRow?0:1} `}${radiusEnd} ${radiusEnd}
                        ${pointedEnd?`
                            l${noteSymbolSize/2 - radiusEnd} ${noteSymbolSize/2 - radiusEnd}
                            l${-noteSymbolSize/2 + radiusEnd} ${noteSymbolSize/2 - radiusEnd}
                        `:`v${noteSymbolSize - 2 * radiusEnd}`}
                        ${pointedEnd?`l`:`a${radiusEnd} ${radiusEnd} 0 0 ${noteSpansRow?0:1} `}${-radiusEnd} ${radiusEnd}
                        H${xStart + radiusStart}
                        a${radiusStart} ${radiusStart} 0 0 1 ${-radiusStart} ${-radiusStart}
                        v${-noteSymbolSize + 2 * radiusStart}
                        a${radiusStart} ${radiusStart} 0 0 1 ${radiusStart} ${-radiusStart}
                        z
                    `}
                    fill={colorPreferenceStyles[noteDurationColor]}
                    fillOpacity={0.5}
                />
            );

            return (
                <React.Fragment key={i}>
                    {boxes}
                </React.Fragment>
            );
        }

        let noteHead = (note: basicNote, i: number) => {
            if (note.attributes.ties.includes(Tie.Stop))
                return;
            let accidental: Accidental = getNoteAccidental(note.midi);
            let line = getNoteLine(note.midi) - minLine;

            let {x, y} = noteTimeToPos(note.time);

            x += noteSymbolSize / 2;
            y -= line * noteSymbolSize / 2;
            let triHeight = noteSymbolSize * Math.sqrt(3) / 2;

            let strokeWidth = 3;
            let crossCircleWidth = noteSymbolSize / 2 / Math.sqrt(2);

            let triangleUp = <polygon key={i} points={`${x},${y - triHeight / 2} ${x + noteSymbolSize / 2},${y + triHeight / 2} ${x - noteSymbolSize / 2},${y + triHeight / 2}`} fill={colorPreferenceStyles[noteSymbolColor]} />;
            let triangleDown = <polygon key={i} points={`${x},${y + triHeight / 2} ${x + noteSymbolSize / 2},${y - triHeight / 2} ${x - noteSymbolSize / 2},${y - triHeight / 2}`} fill={colorPreferenceStyles[noteSymbolColor]} />;
            let hollowCircle = <circle key={i} cx={x} cy={y} r={(noteSymbolSize - strokeWidth) / 2} strokeWidth={strokeWidth} stroke={colorPreferenceStyles[noteSymbolColor]} fill='none' />;
            let circle = <circle key={i} cx={x} cy={y} r={noteSymbolSize / 2} fill={colorPreferenceStyles[noteSymbolColor]} />;

            let crossCircle = <g key={i}>
                <circle cx={x} cy={y} r={(noteSymbolSize - 2) / 2} strokeWidth={2} stroke={colorPreferenceStyles[noteSymbolColor]} fill='none' />;
                <line x1={x - crossCircleWidth} y1={y - crossCircleWidth} x2={x + crossCircleWidth} y2={y + crossCircleWidth} stroke={colorPreferenceStyles[noteSymbolColor]} strokeWidth={2} />
                <line x1={x - crossCircleWidth} y1={y + crossCircleWidth} x2={x + crossCircleWidth} y2={y - crossCircleWidth} stroke={colorPreferenceStyles[noteSymbolColor]} strokeWidth={2} />
            </g>

            let square = <rect x={x - noteSymbolSize / 2 + strokeWidth / 2} y={y - noteSymbolSize / 2 + strokeWidth / 2} width={noteSymbolSize - strokeWidth} height={noteSymbolSize - strokeWidth} fill={colorPreferenceStyles[noteSymbolColor]} />
            let hollowSquare = <rect x={x - noteSymbolSize / 2 + strokeWidth / 2} y={y - noteSymbolSize / 2 + strokeWidth / 2} width={noteSymbolSize - strokeWidth} height={noteSymbolSize - strokeWidth} stroke={colorPreferenceStyles[noteSymbolColor]} strokeWidth={strokeWidth} fill='none' />

            let noteShapes = {
                '▲': triangleUp,
                '▼': triangleDown,
                '○': hollowCircle,
                '●': circle,
                '◼': square,
                '□': hollowSquare,
                '⨂': crossCircle,
            } as any;

            if (accidental === 0) return noteShapes[naturalNoteShape];
            else if (accidentalType === 'auto') return accidental > 0 ? noteShapes[sharpNoteShape] : noteShapes[flatNoteShape];
            else return accidentalType === 'sharp' ? noteShapes[sharpNoteShape] : noteShapes[flatNoteShape];
        }

        // let devSvg = devMode ? (
        //     <g id="devMode">
        //         {<rect x={0} y={0} width={width} height={height} fill="#ddddff" />}
        //         {<circle cx={0} cy={0} r="40" stroke="black" strokeWidth="3" fill="red" />}
        //         {<circle cx={width} cy={0} r="40" stroke="black" strokeWidth="3" fill="red" />}
        //         {<circle cx={width} cy={`${height}`} r="40" stroke="black" strokeWidth="3" fill="red" />}
        //         {<circle cx={0} cy={height} r="40" stroke="black" strokeWidth="3" fill="red" />}
        //         {<rect x={horizontalPadding} y={verticalPadding} width={width - horizontalPadding * 2} height={height - verticalPadding * 2} fill="#ddffdd" />}
        //     </g>
        // ) : null;

        let svgRows: JSX.Element[] = range(0, rowNumber).map(i => row(i));
        return (
            <div id="snview" ref={ref} style={{width: '100%', height: 'auto', overflow: 'hidden', minWidth: '350px', userSelect: 'text', paddingTop: verticalPadding, paddingBottom: verticalPadding}}>
                {/*devSvg*/}
                <div className={`snview-row snview-row-0`} style={{position: 'relative', height: 'auto', paddingBottom: `${rowPadding}px`}}>
                    <svg viewBox={`0 0 ${width} ${180}`}>
                        <text x={width/2} y={50} fontSize={40} textAnchor="middle" alignmentBaseline="hanging">{title}</text>
                        <text x={70} y={170} fontSize={25} textAnchor="start">60 bpm</text>
                        <text x={width-70} y={170} fontSize={25} textAnchor="end">{author}</text>
                    </svg>
                </div>
                {svgRows}
            </div>
        );
    } catch (e) {
        if (!dialogState.shown) {
            showError('An issue was encountered while generating WYSIWYP output for the selected file.');
        }
        //console.error(e);
        return <div ref={ref}></div>;
    }
};

export default SNView;
