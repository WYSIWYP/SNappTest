(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/dropDown.2ec80983.svg"},16:function(e,t,n){e.exports=n.p+"static/media/upload.027829c2.svg"},17:function(e,t,n){e.exports=n(35)},30:function(e,t){},31:function(e,t){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(4),l=n(3),s=n.n(l),u=n(6),d=n(2),p=n(1);function m(e,t){for(var n=[],a=e;a<t;a++)n.push(a);return n}var f=function(e){var t={c:0,d:2,e:4,f:5,g:7,a:9,b:11}[e.step.toLowerCase()];return 12*e.octave+t+(void 0===e.alter?0:Math.round(e.alter))},h=function(e){var t=e.xml,n=(e.options,e.children,Object(a.useRef)(null)),i=Object(a.useState)(void 0),o=Object(d.a)(i,2),c=o[0],l=o[1],s=Object(a.useState)(void 0),u=Object(d.a)(s,2),h=u[0],v=u[1];if(Object(a.useEffect)(function(){var e=void 0,t=function(){var t=n.current.getBoundingClientRect().width;e!=t&&(e=t,l(t))};window.addEventListener("resize",t);var a=setInterval(t,20);return t(),function(){window.removeEventListener("resize",t),clearInterval(a)}},[]),Object(a.useEffect)(function(){v(function(e){var t=0,n={};return e.measures.forEach(function(e,a){Object.keys(e.parts).forEach(function(a){var r;void 0===n[a]&&(n[a]={divisions:void 0,progress:0,timeSignatures:[],notes:[]});var i=n[a],o=[],c=function(e){return void 0===i.divisions?(console.error("A note was defined before timing information was established"),e/24):e/i.divisions};e.parts[a].forEach(function(e){switch(e._class){case"Note":if(void 0!==e.duration){var n=i.progress;void 0!==e.chord?0===o.length?console.error("The first note within a measure was marked as being part of a chord"):(o[o.length-1].duration!==c(e.duration)&&console.error("Two notes in a chord were of different durations"),n=o[o.length-1].time):i.progress+=c(e.duration),void 0===e.rest&&void 0===e.pitch&&console.error("A note was neither marked as a rest or given a pitch"),void 0!==e.rest&&void 0!==e.pitch&&console.error("A note was marked as a rest but was also given a pitch"),void 0!==e.pitch&&o.push({time:n,duration:c(e.duration),midi:f(e.pitch)})}break;case"Backup":i.progress-=c(e.duration);break;case"Forward":i.progress+=c(e.duration);break;case"Attributes":if(void 0!==e.divisions&&(i.divisions=e.divisions),void 0!==e.times&&0!==e.times.length)try{i.timeSignatures.push({time:i.progress,beats:parseInt(e.times[0].beats[0]),beatTypes:e.times[0].beatTypes})}catch(a){console.error("Failed to parse time signature",e.times[0])}break;case"Print":case"Direction":break;default:console.error("Unrecognized MusicXML entry: '".concat(e._class,"'"))}i.progress>t&&(t=i.progress)}),(r=i.notes).push.apply(r,o)})}),{tracks:Object.keys(n).map(function(e){return{notes:n[e].notes,timeSignatures:n[e].timeSignatures}}),duration:t}}(t))},[t]),void 0===h||void 0===c)return r.a.createElement("div",{ref:n});var g=20,x=[1,1,0,0,0,1,1],b=[void 0,void 0,{color:"red",number:!0},void 0,void 0,{color:"blue"},void 0],w=[0,1,0,1,0,0,1,0,1,0,1,0].map(function(e){return 1===e}),y=[0,0,1,1,2,3,3,4,4,5,5,6],E=function(e){return 7*Math.floor(e/12)+y[e%12]},k=h.tracks.reduce(function(e,t){return Math.min(e,t.notes.reduce(function(e,t){return Math.min(e,t.midi)},128))},128),S=h.tracks.reduce(function(e,t){return Math.max(e,t.notes.reduce(function(e,t){return Math.max(e,t.midi)},-1))},-1);if(k>=128||k<0||S>=128||S<0)throw console.log(k,S),new Error("An issue was detected while analyzing this work's note range");for(var O=E(k);x[O%7]===x[(O-1+7)%7];)O--;for(var j=E(S);x[j%7]===x[(j-1+7)%7];)j++;var B=20*(j-O)/2,I=h.tracks[0].timeSignatures.length>0?h.tracks[0].timeSignatures[0].beats:4,F=40*I,M=c-2*g-25-15,z=Math.floor(M/F);if(z<=0)throw new Error("Could not place a measure in the allowed space");g+=(M-z*F)/2;var C=I*z,T=Math.ceil(h.duration/I);if(T<=0)throw new Error("Failed to identify number of measures");var D=Math.ceil(T/z),L=60+D*(B+15)+30*(D-1),R=function(e){var t=g,n=30+e*(B+15+30);return r.a.createElement("g",{id:"row".concat(e),key:e,transform:"translate(".concat(t,", ").concat(n,")")},null,null,r.a.createElement("text",{x:25,y:15+B/2,fontSize:37.5,textAnchor:"end",dominantBaseline:"middle"},"\ud835\udcaf"),r.a.createElement("rect",{x:39,y:14,width:2,height:B+2,fill:"#000000"}),m(0,e<D-1?z:T-(D-1)*z).map(function(t){return function(e,t,n){var a=0,i=[];i.push(r.a.createElement("rect",{key:a++,x:F-1,y:14,width:2,height:B+2,fill:"#000000"}));for(var o=O;o<=j;o++){var c=b[o%7];if(void 0!==c){var l=15+B-20*(o-O)/2;if(i.push(r.a.createElement("rect",{key:a++,x:1,y:l-1,width:F-2,height:2,fill:c.color})),n%z===0&&!0===c.number&&i.push(r.a.createElement("text",{x:-2,key:a++,y:l,fontSize:15,textAnchor:"end",dominantBaseline:"middle"},Math.floor(o/7)+2)),o<j)for(var s=1;s<I;s++){var u=F/I*s;i.push(r.a.createElement("rect",{key:a++,x:u-1,y:l-7,width:2,height:6,fill:"#000000"}))}}}return r.a.createElement("g",{id:"measure".concat(n+1),key:n,transform:"translate(".concat(e,", ").concat(t,")")},null,r.a.createElement("text",{x:2,y:13,fontSize:15},n+1),i)}(40+t*F,0,e*z+t)}))},A=function(e){var t=Math.floor(e/C),n=(e-t*C)/I;return Object(p.a)({row:t,measure:n},W(t,n))},W=function(e,t){return{x:g+25+15+t*F,y:30+e*(B+15+30)+B+15}},N=function(e,t){var n=function(e){return w[e%12]}(e.midi),a=E(e.midi)-O,i=A(e.time),o=i.x,c=i.y;o+=10,c-=20*a/2;var l=20*Math.sqrt(3)/2;return n?r.a.createElement("polygon",{key:t,points:"".concat(o,",").concat(c-l/2," ").concat(o+10,",").concat(c+l/2," ").concat(o-10,",").concat(c+l/2),fill:"#000000"}):r.a.createElement("circle",{key:t,cx:o,cy:c,r:10,fill:"#000000"})};return r.a.createElement("div",{ref:n,style:{width:"100%",height:"auto"}},r.a.createElement("svg",{viewBox:"0 0 ".concat(c," ").concat(L),width:"".concat(c),height:"".concat(L)},null,r.a.createElement("g",{id:"measures"},m(0,D).map(function(e){return R(e)})),r.a.createElement("g",{id:"notes",opacity:"1.0"},h.tracks.map(function(e,t){return e.notes.map(function(e,n){return function(e,t){for(var n=0,a=[],i=E(e.midi)-O,o=A(e.time),c=o.row,l=(o.measure,o.x),s=o.y,u=A(e.time+e.duration),d=u.row,p=u.x,m=function(e,t,o){a.push(r.a.createElement("rect",{key:n++,x:e,y:o-20*(i+1)/2,width:t-e,height:20,fill:"#777777",fillOpacity:.5}))};c<d;){m(l,g+25+15+z*F,s);var f=W(++c,0);l=f.x,s=f.y}return m(l,p,s),r.a.createElement(r.a.Fragment,{key:t},a)}(e,1e7*t+n)})}),h.tracks.map(function(e,t){return e.notes.map(function(e,n){return N(e,1e7*t+n)})}))))},v={appContainer:{overflow:"hidden"},header:{paddingTop:"8px",fontStyle:"normal",fontWeight:"normal",fontSize:"42px",alignItems:"center",textAlign:"center",letterSpacing:"0.15em",left:"50%",top:"0px",height:"100px",transform:"translate(-50%,0px)",backgroundColor:"#31B7D6",minWidth:"600px",position:"absolute"},page:{top:"100px",height:"calc(100% - 100px)",overflow:"auto"},sideBar:{boxShadow:"0px 1px 9px rgba(0, 0, 0, 0.15)",top:"100px",height:"calc(100% - 100px)",borderLeft:"1px solid #BBBBBB",left:"auto",right:"0px"}},g=function(e){var t=e.header,n=e.fontSize,i=e.SideMenu,o=e.ShowSideMenu,c=e.children,l=Object(a.useState)(0),s=Object(d.a)(l,2),u=s[0],m=s[1],f=Object(a.useState)(0),h=Object(d.a)(f,2),g=(h[0],h[1],function(e){return e<0?0:e*e});return Object(a.useEffect)(function(){var e=u,t=setInterval(function(){o&&e<1?m(e+=.1):!o&&e>0?m(e-=.1):clearInterval(t)},25);return function(){clearInterval(t)}},[o]),r.a.createElement("div",{style:v.appContainer},r.a.createElement("div",{style:Object(p.a)({},v.header,{fontSize:n||45})},t),r.a.createElement("div",{style:Object(p.a)({},v.sideBar,{width:"".concat(350*g(u),"px")})},0!=u?i:null),r.a.createElement("div",{style:Object(p.a)({},v.page,{width:"calc(100% - ".concat(350*g(u),"px)")})},c))},x=n(7),b=n(8),w=function(){function e(){Object(x.a)(this,e)}return Object(b.a)(e,null,[{key:"setup",value:function(){e.baseURL=""}}]),e}();w.baseURL=void 0,w.setup();var y=function(){function e(){Object(x.a)(this,e)}return Object(b.a)(e,null,[{key:"get",value:function(){var e=Object(u.a)(s.a.mark(function e(t){var n,a=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},Object.keys(n).length>0&&(t+="?".concat(Object.keys(n).map(function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(JSON.stringify(n[e])))}).join("&"))),e.next=4,fetch("".concat(w.baseURL,"/").concat(t));case 4:return e.next=6,e.sent.text();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(u.a)(s.a.mark(function e(t){var n,a=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,fetch("".concat(w.baseURL,"/").concat(t),{method:"post",body:JSON.stringify(n)});case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=n(14),k=n.n(E),S=n(15),O={leftSide:{float:"left",width:"80%"},svg:{marginRight:"7px"},left:{display:"flex",alignItems:"center",height:"auto",color:"#31B7D6",marginTop:"27px",marginLeft:"25px",fontSize:"25px",fontWeight:"bold",cursor:"pointer",position:"relative",float:"left",width:"auto"},right:{display:"flex",alignItems:"center",height:"auto",marginTop:"27px",fontWeight:"bold",color:"#31B7D6",marginRight:"25px",fontSize:"25px",position:"relative",float:"right",width:"auto",cursor:"pointer"},subHeader:{height:"80px"},SNView:{top:"80px"},sideBar:{minWidth:"300px"},sideBarTopOptions:{position:"relative",width:"33%",height:"auto",whiteSpace:"nowrap",textAlign:"center",cursor:"pointer"},sideBarTop:{display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid #BBBBBB",boxSizing:"border-box",height:"80px",color:"#31B7D6",fontSize:"25px",fontWeight:"bold",position:"relative",width:"auto"},sideBarContent:{padding:"0 20px",position:"relative",marginTop:"40px"},line:{fontSize:"20px",margin:"30px 0px",justifyContent:"center",alignItems:"baseline",display:"flex",position:"relative",height:"auto"},name:{position:"relative",width:"50%"},select:{fontSize:"20px",height:"60px",backgroundPosition:"95% center",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(n.n(S).a,")"),padding:"0.5em 1.5em",border:"1px solid #6F6F6F",boxSizing:"border-box",borderRadius:"10px",position:"relative",width:"50%",textAlign:"center",webkitAppearance:"none"}},j=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(void 0),l=Object(d.a)(o,2),p=l[0],m=l[1],f=Object(a.useState)("Grapefruit"),v=Object(d.a)(f,2),x=v[0],b=v[1],w=Object(a.useState)("comp411"),E=Object(d.a)(w,2),S=E[0],j=E[1];Object(a.useEffect)(function(){var e=!1;return Object(u.a)(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("BeetAnGeSample.musicxml");case 2:n=t.sent,e||(a=k.a.parseScore(n),console.log(a),m(a));case 4:case"end":return t.stop()}},t)}))(),function(){e=!0}},[]);var B=r.a.createElement("div",{style:O.sideBar},r.a.createElement("div",{style:O.sideBarTop},r.a.createElement("div",{style:O.sideBarTopOptions},"Export"),r.a.createElement("div",{style:O.sideBarTopOptions},"Import"),r.a.createElement("div",{style:O.sideBarTopOptions,onClick:function(){i(!1)}},"Close X")),r.a.createElement("form",{onSubmit:function(){i(!1)}},r.a.createElement("label",null,r.a.createElement("div",{style:O.sideBarContent},r.a.createElement("div",{style:O.line},r.a.createElement("div",{style:O.name},"Staff Scale"),r.a.createElement("select",{style:O.select,value:x,onChange:function(e){b(e.target.value)}},r.a.createElement("option",{value:"grapefruit"},"Grapefruit"),r.a.createElement("option",{value:"lime"},"Lime"),r.a.createElement("option",{value:"coconut"},"Coconut"),r.a.createElement("option",{value:"mango"},"Mango"))),r.a.createElement("div",{style:O.line},r.a.createElement("div",{style:O.name},"Interesting classes"),r.a.createElement("select",{style:O.select,value:S,onChange:function(e){j(e.target.value)}},r.a.createElement("option",{value:"comp411"},"comp411"),r.a.createElement("option",{value:"comp110"},"comp110"),r.a.createElement("option",{value:"math101"},"math101"),r.a.createElement("option",{value:"physics101"},"physics101")))))));return r.a.createElement(g,{header:"SNapp",fontSize:55,ShowSideMenu:n,SideMenu:B},r.a.createElement("div",{style:O.subHeader},r.a.createElement("div",{style:O.left,onClick:function(){Object(c.b)("/")}},r.a.createElement("svg",{style:O.svg,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Home"),r.a.createElement("div",{style:O.right,onClick:function(){i(!0)}},1==n?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{style:O.svg,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"3"}),r.a.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})),"Preferences")),r.a.createElement("div",{style:O.right},r.a.createElement("svg",{style:O.svg,xmlns:"http://www.w3.org/2000/svg","padding-right":"5px",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),r.a.createElement("polyline",{points:"13 2 13 9 20 9"})),"Save as PDF")),r.a.createElement("div",{style:O.SNView},void 0===p?null:r.a.createElement(h,{xml:p})))},B={body:{top:"50%",height:"auto",transform:"translate(0px,-50px)",textAlign:"center",fontSize:"22px"}},I=function(){return r.a.createElement("div",{style:B.body},"That page could not be found")},F=function(e){var t=e.children;return[].forEach(function(e){t=e({children:t})}),r.a.createElement(r.a.Fragment,null,t)},M=function(e){var t=e.children,n=[];return n.forEach(function(e){t=e({children:t})}),r.a.createElement(r.a.Fragment,null,n.map(function(e,t){return r.a.createElement(e,{key:t})}))},z=n(16),C=n.n(z),T={container:{display:"flex",flexDirection:"column",overflow:"hidden"},item:{position:"initial",top:"auto",left:"auto",height:"auto",marginLeft:"50%",width:"70%",transform:"translate(-50%,0px)",textAlign:"center",fontSize:"21px",flex:"0 0 auto"},recentFiles:{color:"#31B7D6",maxWidth:"600px",height:"250px",borderRadius:"10px",border:"2px solid #BBBBBB",padding:"5px",overflow:"hidden"},recentFilesInner:{position:"relative",paddingLeft:"15px",paddingRight:"15px",overflowX:"hidden",overflowY:"auto"},recentFilesItem:{display:"flex",width:"calc(100% - 10px)",marginTop:"20px",marginLeft:"5px",marginRight:"5px",lineHeight:"40px",fontSize:"24px",position:"relative",height:"40px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer"},recentFilesSeparator:{position:"relative",height:"2px",backgroundColor:"#DDDDDD",borderRadius:"10px"},recentFilesItemInner:{position:"initial",width:"auto",flex:"0 0 auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},link:{color:"#31B7D6",cursor:"pointer",fontSize:"28px",fontWeight:"bold"},icon:{height:"1em",width:"1em",position:"relative",display:"inline-flex",top:".125em",marginRight:".25em"}},D=function(){var e=Object(a.useState)(void 0),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)(function(){var e=null;try{e=JSON.parse(localStorage.getItem("recent_files"))}catch(o){}if(null===e){for(var t=(new Date).getTime(),n=[],a=Math.floor(6*Math.random())+1,r=0;r<a;r++)n.push({name:["A Hard Days Night","Be Mine Tonight","Baa, Baa, Black Sheep","Twinkle Twinkle Little Star","Tchaikovsky \u2013 Swan Lake Theme","Fur Elise"][r],date:t-24*(2*r+1)*60*60*1e3,data:void 0});localStorage.setItem("recent_files",JSON.stringify(n)),i([])}else localStorage.removeItem("recent_files"),i(e)},[]),r.a.createElement(g,{header:"SNapp",fontSize:55},void 0===n?null:r.a.createElement("div",{style:T.container},r.a.createElement("div",{style:Object(p.a)({},T.item,{flex:"1 0 auto"})}),r.a.createElement("div",{style:Object(p.a)({},T.item,{maxWidth:"720px"})},"SNapp implements a simpler and more intuitive music notation so that musicians can spend less time learning music and more time playing it!"),0===n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:Object(p.a)({},T.item,{flex:".2 0 auto"})}),r.a.createElement("div",{style:T.item},"Try uploading a MusicXML file below"),r.a.createElement("div",{style:Object(p.a)({},T.item,{flex:".35 0 auto"})})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:Object(p.a)({},T.item,{flex:".36 0 auto"})}),r.a.createElement("div",{style:Object(p.a)({},T.item,{fontSize:"28px",fontWeight:"bolder"})},"Recent Files"),r.a.createElement("div",{style:Object(p.a)({},T.item,{flex:".08 0 auto"})}),r.a.createElement("div",{style:Object(p.a)({},T.item,T.recentFiles)},r.a.createElement("div",{style:Object(p.a)({},T.recentFilesInner)},n.map(function(e,t){return r.a.createElement(a.Fragment,{key:t},r.a.createElement("div",{style:T.recentFilesItem,onClick:function(){Object(c.b)("convert")}},r.a.createElement("div",{style:Object(p.a)({},T.recentFilesItemInner,{flex:"0 1 auto",fontWeight:"bold"})},e.name),r.a.createElement("div",{style:Object(p.a)({},T.recentFilesItemInner,{width:"10px",flex:"1 1 auto"})}),r.a.createElement("div",{style:Object(p.a)({},T.recentFilesItemInner,{flex:"0 100000 auto",fontSize:"22px"})},(n=new Date(e.date),"".concat(n.getMonth()+1,"/").concat(n.getDate(),"/").concat(n.getFullYear())))),r.a.createElement("div",{style:T.recentFilesSeparator}));var n}))),r.a.createElement("div",{style:Object(p.a)({},T.item,{flex:".24 0 auto"})})),r.a.createElement("div",{style:T.item},r.a.createElement("span",{style:T.link,onClick:function(){Object(c.b)("convert")}},r.a.createElement("img",{src:C.a,style:T.icon}),"Upload MusicXML File")),r.a.createElement("div",{style:Object(p.a)({},T.item,{flex:"1 0 auto"})})))},L=function(){return r.a.createElement(F,null,r.a.createElement(M,null),r.a.createElement(c.a,null,r.a.createElement(D,{path:"/"}),r.a.createElement(j,{path:"/convert"}),r.a.createElement(I,{path:"/*"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(34);o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.1ca32c9d.chunk.js.map