(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){"use strict";a.d(t,"d",function(){return c}),a.d(t,"c",function(){return l}),a.d(t,"g",function(){return s}),a.d(t,"h",function(){return u}),a.d(t,"f",function(){return d}),a.d(t,"e",function(){return f}),a.d(t,"b",function(){return m}),a.d(t,"a",function(){return v}),a.d(t,"i",function(){return g});var n=a(3),r=a(2),o=a(0),i=a.n(o),c={black:"#000000",grey:"#777777",red:"#FF0000",orange:"orange",yellow:"#FFFF00",green:"#00FF00",blue:"#0000FF",purple:"purple"},l=Object.keys(c),s=["small","medium","large"],u=["narrow","moderate","wide"],d=["\u25cf","\u25fc","\u25b2","\u25bc","\u25cb","\u2610","\u25b3","\u25bd","\u2297","\u22a0"],f=[1,2,3,4,5,6],m=["auto","sharp","flat"],p={noteDurationColor:"grey",noteSymbolColor:"black",staffScale:"medium",horizontalSpacing:"moderate",verticalSpacing:"moderate",noteScale:"medium",naturalNoteShape:"\u25cf",sharpNoteShape:"\u25b2",flatNoteShape:"\u25bc",measuresPerRow:4,accidentalType:"auto"},h=Object(o.createContext)(void 0),v=function(e){var t=e.children,a=Object(o.useRef)(function(e,t){switch(t.type){case"set":return Object(r.a)({},e,t.val)}}),c=Object(o.useReducer)(a.current,p),l=Object(n.a)(c,2),s=l[0],u=l[1];return i.a.createElement(h.Provider,{value:[s,u]},t)},g=function(){return Object(o.useContext)(h)}},10:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s});var n=a(3),r=a(0),o=a.n(r),i={shown:!1},c=Object(r.createContext)(void 0),l=function(e){var t=e.children,a=Object(r.useRef)(function(e,t){switch(t.type){case"open":return{shown:!0,data:t.val};case"close":return{shown:!1}}}),l=Object(r.useReducer)(a.current,i),s=Object(n.a)(l,2),u=s[0],d=s[1];return o.a.createElement(c.Provider,{value:[u,d]},t)},s=function(){return Object(r.useContext)(c)}},12:function(e,t,a){"use strict";var n;a.d(t,"a",function(){return n}),function(e){e.Start="START",e.Stop="STOP"}(n||(n={}))},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(64),i=a.n(o),c=a(7),l=a(16),s=a.n(l),u=a(27),d=a(3),f=a(35),m=a(2),p={appContainer:{overflow:"hidden"},header:{paddingTop:"8px",fontStyle:"normal",fontWeight:"normal",fontSize:"42px",alignItems:"center",textAlign:"center",letterSpacing:"0.15em",left:"50%",top:"0px",height:"80px",transform:"translate(-50%,0px)",backgroundColor:"#31B7D6",minWidth:"600px",position:"absolute"},page:{top:"80px",height:"calc(100% - 80px)",overflow:"auto"},sideBar:{overflowY:"scroll",overflowX:"hidden",backgroundColor:"rgba(0,0,0,0.7)",top:"80px",height:"calc(100% - 80px)",left:"auto",right:"0px"}},h=function(e){var t=e.header,a=e.fontSize,n=e.sideMenu,o=e.showSideMenu,i=e.children;return r.a.createElement("div",{style:p.appContainer},r.a.createElement("div",{id:"header",style:Object(m.a)({},p.header,{fontSize:a||45})},t),r.a.createElement("div",{style:p.page},i),r.a.createElement("div",{className:"animated ".concat(o?"open":"close"),style:Object(m.a)({},p.sideBar)},n))},v=a(67),g=a(68),y=a.n(g),x={},b=Object(n.createContext)(void 0),E=function(e){var t=e.children,a=Object(n.useRef)(function(e,t){switch(t.type){case"set":return t.val}}),o=Object(n.useReducer)(a.current,x),i=Object(d.a)(o,2),c=i[0],l=i[1];return r.a.createElement(b.Provider,{value:[c,l]},t)},w=function(){return Object(n.useContext)(b)},S=a(1),k=a(69),O=a.n(k),j=a(70),C=a.n(j),B={leftSide:{float:"left",width:"80%"},svg:{marginRight:"7px"},left:{display:"flex",alignItems:"center",height:"auto",color:"#31B7D6",marginTop:"15px",marginLeft:"25px",fontSize:"23px",fontWeight:"bold",cursor:"pointer",position:"relative",float:"left",width:"auto"},right:{display:"flex",alignItems:"center",height:"auto",marginTop:"15px",fontWeight:"bold",color:"#31B7D6",fontSize:"23px",marginRight:"25px",position:"relative",float:"right",width:"auto",cursor:"pointer"},subHeader:{height:"65px"},SNView:{top:"65px",height:"auto"},sideBar:{color:"white",minWidth:"350px"},sideBarTop:{position:"sticky",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid #BBBBBB",height:"65px",color:"#31B7D6",fontSize:"23px",fontWeight:"bold",width:"auto",backgroundColor:"#4c4c4c",opacity:1,zIndex:1},sideBarTopOptions:{position:"relative",width:"33%",height:"auto",whiteSpace:"nowrap",textAlign:"center",cursor:"pointer"},fileInput:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",cursor:"pointer",padding:"0px",opacity:0},sideBarContent:{zIndex:0,padding:"0 20px",position:"relative",marginTop:"40px"},line:{fontSize:"17px",margin:"30px 0px",justifyContent:"center",alignItems:"baseline",display:"flex",position:"relative",height:"auto"},name:{position:"relative",width:"60%"},select:{fontSize:"17px",height:"40px",backgroundPosition:"95% center",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(y.a,")"),backgroundColor:"rgba(255,255,255,0.6)",paddingLeft:"20px",border:"none",borderRadius:"10px",position:"relative",width:"40%",textAlign:"center",WebkitAppearance:"none"},hidden:{width:"0px",height:"0px",overflow:"hidden",opacity:.01}},M=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],i=Object(S.i)(),l=Object(d.a)(i,2),m=l[0],p=l[1],g=w(),y=Object(d.a)(g,2),x=y[0],b=y[1],E=Object(n.useState)(!0),k=Object(d.a)(E,2),j=k[0],M=k[1];Object(n.useEffect)(function(){if(a)return M(!1),function(){};var e=setTimeout(function(){M(!0)},1e3);return function(){clearTimeout(e)}},[a]),Object(n.useEffect)(function(){Object(u.a)(s.a.mark(function e(){var t,a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===x.id)try{t=localStorage.getItem("current_file"),a=JSON.parse(localStorage.getItem("recent_files")).filter(function(e){return e.id===t})[0].file_name,n=JSON.parse(localStorage.getItem(t)),b({type:"set",val:{id:t,file_name:a,data:n}})}catch(r){console.log(r),Object(c.b)("..")}case 1:case"end":return e.stop()}},e)}))()},[x.id,b]);var F=r.a.createElement("div",{style:B.sideBar},r.a.createElement("div",{style:B.sideBarTop},r.a.createElement("div",{id:"export",title:"Click to export",style:B.sideBarTopOptions,onClick:function(){!function(){var e=new Blob([JSON.stringify(m,null,4)],{type:"text/plain"});Object(v.saveAs)(e,"preferences.snapp")}()}},"Export"),r.a.createElement("div",{id:"import",style:B.sideBarTopOptions},"Import",r.a.createElement("input",{style:B.fileInput,type:"file",title:"Click to import",accept:".snapp",onChange:function(e){!function(e){try{var t=new FileReader;t.onload=function(e){try{var t=JSON.parse(e.target.result);p({type:"set",val:t})}catch(e){console.error(e)}},t.readAsText(e.target.files[0])}catch(e){console.error(e)}e.target.value=""}(e)}})),r.a.createElement("div",{id:"close",style:B.sideBarTopOptions,onClick:function(){o(!1)}},"Close X")),r.a.createElement("form",{onSubmit:function(){o(!1)}},r.a.createElement("label",null,r.a.createElement("div",{style:B.sideBarContent},r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Measures per Row"),r.a.createElement("select",{style:B.select,value:m.measuresPerRow,onChange:function(e){p({type:"set",val:{measuresPerRow:e.target.value}})}},S.e.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Accidental Type"),r.a.createElement("select",{style:B.select,value:m.accidentalType,onChange:function(e){p({type:"set",val:{accidentalType:e.target.value}})}},S.b.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Note Size"),r.a.createElement("select",{style:B.select,value:m.noteScale,onChange:function(e){p({type:"set",val:{noteScale:e.target.value}})}},S.g.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Clef Size"),r.a.createElement("select",{style:B.select,value:m.staffScale,onChange:function(e){p({type:"set",val:{staffScale:e.target.value}})}},S.g.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Margin Size"),r.a.createElement("select",{style:B.select,value:m.horizontalSpacing,onChange:function(e){p({type:"set",val:{horizontalSpacing:e.target.value}})}},S.h.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Staff Spacing Size"),r.a.createElement("select",{style:B.select,value:m.verticalSpacing,onChange:function(e){p({type:"set",val:{verticalSpacing:e.target.value}})}},S.h.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Natural Notehead"),r.a.createElement("select",{style:B.select,value:m.naturalNoteShape,onChange:function(e){p({type:"set",val:{naturalNoteShape:e.target.value}})}},S.f.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Sharp Notehead"),r.a.createElement("select",{style:B.select,value:m.sharpNoteShape,onChange:function(e){p({type:"set",val:{sharpNoteShape:e.target.value}})}},S.f.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Flat Notehead"),r.a.createElement("select",{style:B.select,value:m.flatNoteShape,onChange:function(e){p({type:"set",val:{flatNoteShape:e.target.value}})}},S.f.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Notehead Color"),r.a.createElement("select",{style:B.select,value:m.noteSymbolColor,onChange:function(e){p({type:"set",val:{noteSymbolColor:e.target.value}})}},S.c.map(function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("div",{style:B.line},r.a.createElement("div",{style:B.name},"Duration Color"),r.a.createElement("select",{style:B.select,value:m.noteDurationColor,onChange:function(e){p({type:"set",val:{noteDurationColor:e.target.value}})}},S.c.map(function(e){return r.a.createElement("option",{key:e},e)})))))));return r.a.createElement(h,{header:"SNapp",showSideMenu:a,sideMenu:F},r.a.createElement("div",{style:B.subHeader},r.a.createElement("div",{id:"home",style:B.left,onClick:function(){Object(c.b)("/")}},r.a.createElement("svg",{style:B.svg,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Home"),r.a.createElement("div",{style:B.left,onClick:function(){!function(){try{var e=5,t=5,a=document.getElementById("hidden-pdf-generation"),n=a.getElementsByClassName("canvas")[0],r=new O.a;e=210*e/100,t=210*t/100;for(var o=a.getElementsByClassName("snview-row"),i=e,c=0;c<o.length;c++){var l=o[c],s=l.getElementsByTagName("svg")[0].getAttribute("viewBox").split(" ").map(function(e){return parseInt(e)}),u=Object(d.a)(s,4),f=u[2],m=u[3],p=Math.ceil(1e3*m/f),h=Math.ceil((210-2*e)*m/f);i+h>297-e&&(r.addPage(),i=e),n.height=p;var v=n.getContext("2d");v.fillStyle="white",v.fillRect(0,0,n.width,n.height),v.fillStyle="black",C()(n,l.innerHTML,{ignoreClear:!0}),r.addImage(n,"JPEG",e,i,210-2*e,h),i+=h+t}r.save("".concat(x.file_name||"WYSIWYP",".pdf"))}catch(g){console.error(g)}}()}},r.a.createElement("svg",{style:B.svg,xmlns:"http://www.w3.org/2000/svg","padding-right":"5px",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),r.a.createElement("polyline",{points:"13 2 13 9 20 9"})),"Save as PDF"),r.a.createElement("div",{id:"preference",style:B.right,onClick:function(){o(!0)}},j?r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{style:B.svg,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"3"}),r.a.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})),"Preferences"):r.a.createElement(r.a.Fragment,null))),r.a.createElement("div",{style:B.SNView},void 0===x.data?null:r.a.createElement(f.a,{xml:x.data})),r.a.createElement("div",{id:"hidden-pdf-generation",style:B.hidden},r.a.createElement("canvas",{className:"canvas",width:1e3,height:1e3}),void 0===x.data?null:r.a.createElement(f.a,{xml:x.data,forcedWidth:1e3})))},F={body:{top:"50%",height:"auto",transform:"translate(0px,-50px)",textAlign:"center",fontSize:"22px"}},I=function(){return r.a.createElement("div",{style:F.body},"That page could not be found")},N=a(10),T=function(e){var t=e.children;return[N.a,E,S.a].forEach(function(e){t=e({children:t})}),r.a.createElement(r.a.Fragment,null,t)},A={bg:{position:"fixed",backgroundColor:"#00000099"},frame:{border:"2px solid #444",overflow:"hidden",transform:"translate(-50%,-50%)",borderRadius:"10px"},header:{height:"50px",backgroundColor:"#ddd",lineHeight:"50px",textAlign:"center",userSelect:"none",borderBottom:"1px solid #444"},headerRight:{left:"auto",right:"20px",width:"auto",fontSize:"15px"},body:{top:"50px",backgroundColor:"#fff",height:"calc(100% - 50px)"},page:{top:"calc(50% - 40px)",left:"50%",height:"auto",width:"85%",maxHeight:"calc(100% - 120px)",textAlign:"center",fontSize:"25px",transform:"translate(-50%, -50%)",overflowY:"auto"},buttons:{top:"auto",bottom:"20px",left:"50%",width:"200px",height:"60px",transform:"translate(-50%, 0px)"}},z=function(){var e=Object(N.b)(),t=Object(d.a)(e,1)[0],a=t.data,o=Object(n.useState)({active:!1,startX:0,startY:0,mouseX:0,mouseY:0,x:0,y:0}),i=Object(d.a)(o,2),c=i[0],l=i[1];return Object(n.useEffect)(function(){0===c.x||0===c.y||t.shown||l(Object(m.a)({},c,{x:0,y:0}))},[c,t.shown]),t.shown?r.a.createElement("div",{style:A.bg,onMouseMove:function(e){l(Object(m.a)({},c,{mouseX:e.clientX,mouseY:e.clientY},c.active?{x:c.mouseX-c.startX,y:c.mouseY-c.startY}:{}))},onMouseUp:function(){l(Object(m.a)({},c,{active:!1}))},onMouseLeave:function(){l(Object(m.a)({},c,{active:!1}))}},r.a.createElement("div",{style:Object(m.a)({},A.frame,{top:"calc(50% + ".concat(c.y,"px)"),left:"calc(50% + ".concat(c.x,"px)"),width:"".concat(a.width,"px"),height:"".concat(a.height,"px")})},r.a.createElement("div",{style:Object(m.a)({},A.header,{fontSize:30}),onMouseDown:function(){l(Object(m.a)({},c,{active:!0,startX:c.mouseX-c.x,startY:c.mouseY-c.y}))}},a.title,r.a.createElement("div",{style:A.headerRight},"")),r.a.createElement("div",{style:A.body},a.contents))):null},W=function(e){var t=e.children,a=[z];return a.forEach(function(e){t=e({children:t})}),r.a.createElement(r.a.Fragment,null,a.map(function(e,t){return r.a.createElement(e,{key:t})}))},R=a(19),D=a(71),L=a.n(D),_=a(37),P=a.n(_),X=a(18),Y=a(72),H=a.n(Y),J={container:{display:"flex",flexDirection:"column",overflow:"hidden"},item:{position:"initial",top:"auto",left:"auto",height:"auto",marginLeft:"50%",width:"70%",transform:"translate(-50%,0px)",textAlign:"center",fontSize:"21px",flex:"0 0 auto"},fileInput:{position:"absolute",top:"0px",left:"calc(50% - 170px)",width:"340px",height:"100%",cursor:"pointer",opacity:0},recentFiles:{color:"#31B7D6",maxWidth:"750px",height:"250px",borderRadius:"10px",border:"2px solid #BBBBBB",padding:"5px",overflow:"hidden"},recentFilesInner:{position:"relative",paddingLeft:"15px",paddingRight:"15px",overflowX:"hidden",overflowY:"auto"},recentFilesItem:{display:"flex",width:"calc(100% - 10px)",marginTop:"20px",marginLeft:"5px",marginRight:"5px",lineHeight:"40px",fontSize:"24px",position:"relative",height:"40px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer"},recentFilesSeparator:{position:"relative",height:"2px",backgroundColor:"#DDDDDD",borderRadius:"10px"},recentFilesItemInner:{position:"initial",width:"auto",flex:"0 0 auto",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},link:{color:"#31B7D6",cursor:"pointer",fontSize:"28px",fontWeight:"bold"},icon:{height:"1em",width:"1em",position:"relative",display:"inline-flex",top:".125em",marginRight:".25em"}},q=function(){var e=Object(n.useState)(void 0),t=Object(d.a)(e,2),a=t[0],o=t[1],i=Object(N.b)(),l=Object(d.a)(i,2)[1],f=w(),p=Object(d.a)(f,2)[1],v=function(e){l(X.b("An Error Occurred",e,"Close",function(){l(X.a())}))};Object(n.useEffect)(function(){var e=null;try{e=JSON.parse(localStorage.getItem("recent_files"))}catch(t){}null===e&&(e=[]),o(e)},[]);var g=function(e,t){var n="file_".concat(Array.from({length:16},function(){return Math.floor(16*Math.random()).toString(16)}).join(""));p({type:"set",val:{id:n,file_name:e,data:t}});try{localStorage.setItem(n,JSON.stringify(t)),localStorage.setItem("current_file",n),localStorage.setItem("recent_files",JSON.stringify([{file_name:e,date_created:(new Date).getTime(),date_opened:(new Date).getTime(),id:n}].concat(Object(R.a)(a.filter(function(t){return t.file_name!==e})))))}catch(r){console.error(r)}Object(c.b)("convert")};return r.a.createElement(h,{header:"SNapp"},void 0===a?null:r.a.createElement("div",{style:J.container},r.a.createElement("div",{style:Object(m.a)({},J.item,{flex:"1 0 auto"})}),r.a.createElement("div",{style:Object(m.a)({},J.item,{maxWidth:"720px"})},"SNapp implements a simpler and more intuitive music notation so that musicians can spend less time learning music and more time playing it!"),0===a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:Object(m.a)({},J.item,{flex:".2 0 auto"})}),r.a.createElement("div",{style:J.item},"Try uploading a MusicXML file below"),r.a.createElement("div",{style:Object(m.a)({},J.item,{flex:".35 0 auto"})})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:Object(m.a)({},J.item,{flex:".36 0 auto"})}),r.a.createElement("div",{style:Object(m.a)({},J.item,{fontSize:"28px",fontWeight:"bolder"})},"Recent Files"),r.a.createElement("div",{style:Object(m.a)({},J.item,{flex:".08 0 auto"})}),r.a.createElement("div",{style:Object(m.a)({},J.item,J.recentFiles)},r.a.createElement("div",{style:Object(m.a)({},J.recentFilesInner)},a.map(function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement("div",{className:"button-recent-file",style:J.recentFilesItem,onClick:function(){!function(e){try{var t=JSON.parse(localStorage.getItem(e.id));p({type:"set",val:{id:e.id,file_name:e.file_name,data:t}});try{localStorage.setItem("current_file",e.id),localStorage.setItem("recent_files",JSON.stringify([Object(m.a)({},e,{date_opened:(new Date).getTime()})].concat(Object(R.a)(a.filter(function(t){return t.id!==e.id})))))}catch(n){console.error(n)}Object(c.b)("convert")}catch(n){v("An issue was encountered while loading the data for this file."),console.error(n)}}(e)}},r.a.createElement("div",{style:Object(m.a)({},J.recentFilesItemInner,{flex:"0 100000 auto",fontWeight:"bold"})},e.file_name),r.a.createElement("div",{style:Object(m.a)({},J.recentFilesItemInner,{width:"10px",flex:"1 1 auto"})}),r.a.createElement("div",{style:Object(m.a)({},J.recentFilesItemInner,{flex:"0 1 auto",fontSize:"22px"})},(t=new Date(e.date_created||e.date),"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear())))),r.a.createElement("div",{style:J.recentFilesSeparator}));var t}))),r.a.createElement("div",{style:Object(m.a)({},J.item,{flex:".24 0 auto"})})),r.a.createElement("div",{style:J.item},r.a.createElement("span",{id:"button-upload",style:J.link,onClick:function(){}},r.a.createElement("img",{src:L.a,style:J.icon,alt:""}),"Upload MusicXML File",r.a.createElement("input",{style:J.fileInput,type:"file",title:"Click to upload",accept:".musicxml,.mxl",onChange:function(e){!function(e){var t=e.target.files[0].name.replace(/\.(?:musicxml|mxl)$/i,""),a=0,n=function(){2===++a&&v("An issue was encountered while reading the selected file.")};try{var r=new FileReader;r.onload=function(){try{var a=r.result;if(null===a)throw new Error("Failed to read file - null");Object(u.a)(s.a.mark(function e(){var r,o,i,c,l,u,d,f,m;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.loadAsync(a);case 3:return r=e.sent,e.next=6,r.file("META-INF/container.xml").async("text");case 6:for(o=e.sent,i=new DOMParser,c=i.parseFromString(o,"application/xml"),l=c.getElementsByTagName("rootfile"),u=l[0].getAttribute("full-path"),d=l.length-1;d>=0;d--)"application/vnd.recordare.musicxml+xml"===l[d].getAttribute("media-type")&&(u=l[d].getAttribute("full-path"));return e.next=14,r.file(u).async("text");case 14:if(f=e.sent,void 0!==(m=P.a.parseScore(f)).measures){e.next=18;break}throw new Error("Invalid MusicXML format");case 18:g(t,m),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),n(),console.error(e.t0);case 25:case"end":return e.stop()}},e,null,[[0,21]])}))()}catch(e){n(),console.error(e)}},r.readAsArrayBuffer(e.target.files[0]);var o=new FileReader;o.onload=function(){try{var a=o.result;if(null===a)throw new Error("Failed to read file - null");var r=P.a.parseScore(a);if(void 0===r.measures)throw new Error("Invalid MusicXML format");console.log(r),g(t,r)}catch(e){n(),console.error(e)}},o.readAsText(e.target.files[0])}catch(e){v("An issue was encountered while reading the selected file."),console.error(e)}}(e)}}))),r.a.createElement("div",{style:Object(m.a)({},J.item,{flex:"1 0 auto"})})))},V=function(){return r.a.createElement(T,null,r.a.createElement(c.a,null,r.a.createElement(q,{path:"/"}),r.a.createElement(M,{path:"/convert"}),r.a.createElement(I,{path:"/*"})),r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(129);i.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},18:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i});var n=a(0),r=a.n(n),o=function(){return{type:"close"}},i=function(e,t,a,n){return{type:"open",val:{title:e,width:400,height:275,contents:r.a.createElement("div",{style:c.body},r.a.createElement("div",{style:c.space}),r.a.createElement("div",{style:c.top},t),r.a.createElement("div",{style:c.space}),r.a.createElement("div",{style:c.bottom},r.a.createElement("span",{style:c.link,onClick:n},a)))}}},c={body:{display:"flex",flexDirection:"column"},top:{position:"initial",top:"auto",left:"auto",height:"auto",fontSize:"20px",textAlign:"center",flex:"0 1 auto",padding:"30px",overflowX:"hidden",overflowY:"auto"},bottom:{position:"initial",top:"auto",left:"auto",height:"auto",textAlign:"center",flex:"0 0 auto",paddingBottom:"20px"},space:{position:"initial",top:"auto",left:"auto",height:"auto",flex:"1 0 auto"},link:{color:"#31B7D6",cursor:"pointer",fontSize:"28px",fontWeight:"bold"}}},35:function(e,t,a){"use strict";(function(e){var n,r=a(17),o=a(19),i=a(3),c=a(0),l=a.n(c),s=a(36),u=a(66),d=a(12),f=a(1),m=a(10),p=a(18),h=a(7);!function(e){e[e.Flat=-1]="Flat",e[e.Natural=0]="Natural",e[e.Sharp=1]="Sharp"}(n||(n={}));t.a=function(t){var a=t.xml,v=t.forcedWidth;console.log(a);var g=Object(c.useRef)(null),y=Object(c.useState)(void 0),x=Object(i.a)(y,2),b=x[0],E=x[1],w=Object(c.useState)(void 0),S=Object(i.a)(w,2),k=S[0],O=S[1],j=Object(f.i)(),C=Object(i.a)(j,1)[0],B=Object(m.b)(),M=Object(i.a)(B,2),F=M[0],I=M[1],N=function(t){I(p.b("An Error Occurred",t,"Close",function(){Object(h.b)("/"),e(function(){return I(p.a())})}))},T=Object(c.useRef)(N);if(console.log("Score:",k),Object(c.useEffect)(function(){if(void 0===v){var e=void 0,t=function(){var t=g.current.getBoundingClientRect().width;e!==t&&(e=t,E(t))};return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t)}}E(v)},[E,v]),Object(c.useEffect)(function(){try{O(Object(u.a)(a))}catch(e){T.current("An issue was encountered while processing this file."),console.error(e)}},[a]),void 0===k||void 0===b)return l.a.createElement("div",{ref:g});try{var A=C.noteDurationColor,z=C.noteSymbolColor,W=C.staffScale,R=C.horizontalSpacing,D=C.verticalSpacing,L=C.noteScale,_=C.naturalNoteShape,P=C.sharpNoteShape,X=C.flatNoteShape,Y=C.measuresPerRow,H=C.accidentalType,J={small:15,medium:20,large:25}[L],q={narrow:10,moderate:30,wide:50}[D],V={narrow:20,moderate:40,wide:60}[R],U={small:18,medium:25,large:32}[W],K=b-2*V-U-15,$=K/k.tracks[0].timeSignatures[0].beats/Y,G=k.tracks[0].keySignatures[0].fifths,Q=["\ud835\udcaf","\ud834\udd22"],Z=[{color:"red",number:!0},void 0,void 0,{color:"blue"},void 0,void 0,void 0],ee=[0,1,0,1,0,0,1,0,1,0,1,0].map(function(e){return 1===e}),te=[0,0,1,1,2,3,3,4,4,5,5,6],ae=function(e){return ee[e%12]?G>=0?n.Sharp:n.Flat:n.Natural},ne=function(e){var t=7*Math.floor(e/12-1)+te[e%12];return"auto"===H&&ae(e)<0?t++:"flat"===H&&0!==ae(e)&&t++,t},re="";try{re=a.movementTitle,re=a.work.workTitle}catch(Ee){}var oe="";try{a.credits.filter(function(e){return void 0!==e.creditWords&&e.creditWords.length>0}).map(function(e){return e.creditWords}).forEach(function(e){e.forEach(function(e){Math.abs(e.words.length-20)<Math.abs(oe.length-20)&&(oe=e.words)})})}catch(Ee){}var ie=128,ce=-1;if(k.tracks.filter(function(e){return e.trackTypes.includes("Instrument")}).forEach(function(e){return e.measures.forEach(function(e){return e.forEach(function(e){ie=Math.min(ie,e.midi),ce=Math.max(ce,e.midi)})})}),ie>=128||ie<0||ce>=128||ce<0)throw console.log(ie,ce),new Error("An issue was detected while analyzing this work's note range");for(var le=ne(ie),se=ne(ce);le%7!==0&&le%7!==3;)le--;for(;se%7!==0&&se%7!==3;)se++;Math.abs(se-le)<=1&&(se+=se%7===0?3:4,le-=le%7===0?4:3);var ue=(se-le)*J/2,de=k.tracks[0].timeSignatures[0].beats,fe=$*de;V+=(b-2*V-U-15-Y*fe)/2;var me=k.tracks.reduce(function(e,t){return Math.max(e,t.measures.length)},0);if(me<=0)throw new Error("Failed to identify number of measures");var pe=Math.ceil(me/Y),he=function(e,t,a,n){var r=function(e){var t=Object(o.a)(k.tracks[0].timeSignatures).reverse(),a=Object(o.a)(k.tracks[0].keySignatures).reverse(),n=t.find(function(t){return t.measure<=e}),r=a.find(function(t){return t.measure<=e});return n||(n=k.tracks[0].timeSignatures[0]),r||(r=k.tracks[0].keySignatures[0]),{currentTime:n,currentKey:r}}(a),i=r.currentTime,c=r.currentKey;$=K/i.beats/Y,de=i.beats,G=c.fifths;var s=0,u=[];u.push(l.a.createElement("rect",{key:s++,x:fe-1,y:14,width:2,height:ue+2,fill:"#000000"}));for(var f=le;f<=se;f++){var m=Z[f%7];if(void 0!==m){var p=15+ue-(f-le)*J/2;if(u.push(l.a.createElement("rect",{key:s++,x:1,y:p-1,width:fe-2,height:2,fill:m.color})),a%Y===0&&!0===m.number&&u.push(l.a.createElement("text",{x:-2,key:s++,y:p,fontSize:15,textAnchor:"end",dominantBaseline:"middle"},Math.floor(f/7))),f<se)for(var h=1;h<de;h++){var v=fe/de*h;u.push(l.a.createElement("rect",{key:s++,x:v-1,y:p-7,width:2,height:6,fill:"#000000"}))}}}var g=[],y=[];return k.tracks.forEach(function(e){e.trackTypes.includes("Instrument")&&e.measures[a].filter(function(e){return"treble"===n?1===e.staff:1!==e.staff}).forEach(function(e,t){g.push(xe(e,s++));var n=e.attributes.ties.includes(d.a.Start),r=e.attributes.ties.includes(d.a.Stop),o=(a+1)%Y===0,c=e.time+e.duration>=i.beats,l=n&&o&&c;y.push(ye(e,s++,n,r,l))})}),l.a.createElement("g",{id:"measure".concat(a+1),key:a,transform:"translate(".concat(e,", ").concat(t,")")},l.a.createElement("g",{id:"frame"},null,l.a.createElement("text",{x:2,y:13,fontSize:15},a+1),u),l.a.createElement("g",{id:"notes"},y,g))},ve=function(e,t){var a="treble"===t?0:ue+15+50+J/2+50,n="treble"===t?Q[0]:Q[1];return l.a.createElement("g",{id:"row".concat(e).concat(t),key:t+e,transform:"translate(".concat(V,", ").concat(a,")")},null,null,l.a.createElement("text",{x:U,y:15+ue/2,fontSize:1.5*U,textAnchor:"end",dominantBaseline:"middle"},n),l.a.createElement("rect",{x:U+15-1,y:14,width:2,height:ue+2,fill:"#000000"}),Object(s.a)(0,e<pe-1?Y:me-(pe-1)*Y).map(function(a){return he(U+15+a*fe,0,e*Y+a,t)}))},ge=function(e){return{x:$*e,y:ue+15}},ye=function(e,t,a,n,r){var o=0,i=[],c=ne(e.midi)-le,s=ge(e.time),u=s.x,d=s.y,m=ge(e.time+e.duration).x,p=Math.max(Math.min(J,m-u),0),h=p/4,v=p/2,g=r;return a&&(v=0),n&&(h=0),i.push(l.a.createElement("path",{key:o++,d:"\n                        M".concat(u+h," ").concat(d-(c+1)*J/2,"\n                        H").concat(m-v,"\n                        ").concat(g?"l":"a".concat(v," ").concat(v," 0 0 ").concat(r?0:1," ")).concat(v," ").concat(v,"\n                        ").concat(g?"\n                            l".concat(J/2-v," ").concat(J/2-v,"\n                            l").concat(-J/2+v," ").concat(J/2-v,"\n                        "):"v".concat(J-2*v),"\n                        ").concat(g?"l":"a".concat(v," ").concat(v," 0 0 ").concat(r?0:1," ")).concat(-v," ").concat(v,"\n                        H").concat(u+h,"\n                        a").concat(h," ").concat(h," 0 0 1 ").concat(-h," ").concat(-h,"\n                        v").concat(2*h-J,"\n                        a").concat(h," ").concat(h," 0 0 1 ").concat(h," ").concat(-h,"\n                        z\n                    "),fill:f.d[A],fillOpacity:.5})),l.a.createElement(l.a.Fragment,{key:t},i)},xe=function(e,t){var a;if(e.attributes.ties.includes(d.a.Stop))return null;var o=ae(e.midi),i=ne(e.midi)-le,c=ge(e.time),s=c.x,u=c.y;s+=J/2,u-=i*J/2;var m=J*Math.sqrt(3)/2,p=J/8,h=J/2/Math.sqrt(2),v="sharp"===H?P:X;switch((a={},Object(r.a)(a,n.Natural,_),Object(r.a)(a,n.Flat,"auto"===H?X:v),Object(r.a)(a,n.Sharp,"auto"===H?P:v),a)[o]){case"\u25cf":return l.a.createElement("circle",{key:t,cx:s,cy:u,r:J/2,fill:f.d[z]});case"\u25fc":return l.a.createElement("rect",{key:t,x:s-J/2+p/2,y:u-J/2+p/2,width:J-p,height:J-p,fill:f.d[z]});case"\u25b2":return l.a.createElement("polygon",{key:t,points:"".concat(s,",").concat(u-m/2," ").concat(s+J/2,",").concat(u+m/2," ").concat(s-J/2,",").concat(u+m/2),fill:f.d[z]});case"\u25bc":return l.a.createElement("polygon",{key:t,points:"".concat(s,",").concat(u+m/2," ").concat(s+J/2,",").concat(u-m/2," ").concat(s-J/2,",").concat(u-m/2),fill:f.d[z]});case"\u25cb":return l.a.createElement("circle",{key:t,cx:s,cy:u,r:(J-p)/2,strokeWidth:p,stroke:f.d[z],fill:"none"});case"\u2610":return l.a.createElement("rect",{key:t,x:s-J/2+p/2,y:u-J/2+p/2,width:J-p,height:J-p,stroke:f.d[z],strokeWidth:p,fill:"none"});case"\u25b3":return l.a.createElement("polygon",{key:t,points:"".concat(s,",").concat(u-m/2+p," ").concat(s+J/2-Math.sqrt(3)*p/2,",").concat(u+m/2-p/2," ").concat(s-J/2+Math.sqrt(3)*p/2,",").concat(u+m/2-p/2),stroke:f.d[z],strokeWidth:p,fill:"none"});case"\u25bd":return l.a.createElement("polygon",{key:t,points:"".concat(s,",").concat(u+m/2-p," ").concat(s+J/2-Math.sqrt(3)*p/2,",").concat(u-m/2+p/2," ").concat(s-J/2+Math.sqrt(3)*p/2,",").concat(u-m/2+p/2),stroke:f.d[z],strokeWidth:p,fill:"none"});case"\u2297":return l.a.createElement("g",{key:t},l.a.createElement("circle",{cx:s,cy:u,r:(J-2)/2,strokeWidth:p,stroke:f.d[z],fill:"none"}),";",l.a.createElement("line",{x1:s-h,y1:u-h,x2:s+h,y2:u+h,stroke:f.d[z],strokeWidth:p}),l.a.createElement("line",{x1:s-h,y1:u+h,x2:s+h,y2:u-h,stroke:f.d[z],strokeWidth:p}));case"\u22a0":return l.a.createElement("g",{key:t},l.a.createElement("rect",{x:s-J/2+p/2,y:u-J/2+p/2,width:J-p,height:J-p,stroke:f.d[z],strokeWidth:p,fill:"none"}),l.a.createElement("line",{x1:s-J/2+p/2,y1:u-J/2+p/2,x2:s+J/2-p/2,y2:u+J/2-p/2,stroke:f.d[z],strokeWidth:p}),l.a.createElement("line",{x1:s-J/2+p/2,y1:u+J/2-p/2,x2:s+J/2-p/2,y2:u-J/2+p/2,stroke:f.d[z],strokeWidth:p}))}},be=Object(s.a)(0,pe).map(function(e){return function(e){var t=2*(ue+15+J/2+50)+50;return l.a.createElement("div",{className:"snview-row snview-row-".concat(e+1),key:e,style:{position:"relative",height:"auto",paddingBottom:"".concat(q,"px")}},l.a.createElement("svg",{viewBox:"0 0 ".concat(b," ").concat(t)},ve(e,"treble"),ve(e,"bass")))}(e)});return l.a.createElement("div",{id:"snview",ref:g,style:{width:"100%",height:"auto",overflow:"hidden",minWidth:"350px",userSelect:"text",paddingTop:30,paddingBottom:30}},l.a.createElement("div",{className:"snview-row snview-row-0",style:{position:"relative",height:"auto",paddingBottom:"".concat(q,"px")}},l.a.createElement("svg",{viewBox:"0 0 ".concat(b," ",180)},l.a.createElement("text",{x:b/2,y:50,fontSize:40,textAnchor:"middle",alignmentBaseline:"hanging"},re),l.a.createElement("text",{x:70,y:170,fontSize:25,textAnchor:"start"},"60 bpm"),l.a.createElement("text",{x:b-70,y:170,fontSize:25,textAnchor:"end"},oe))),be)}catch(Ee){return console.error(Ee),F.shown||N("An issue was encountered while generating WYSIWYP output for the selected file."),l.a.createElement("div",{ref:g})}}}).call(this,a(28).setImmediate)},36:function(e,t,a){"use strict";function n(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a}a.d(t,"a",function(){return n})},66:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(12),r=function(e){var t={c:0,d:2,e:4,f:5,g:7,a:9,b:11}[e.step.toLowerCase()];return 12*(e.octave+1)+t+(void 0===e.alter?0:Math.round(e.alter))},o=function(e){var t=function(e){var t;return e.measures.some(function(e){return Object.keys(e.parts).some(function(a){var n=e.parts[a].some(function(e){return void 0!==e.lyrics});return void 0!==(t=n?a:void 0)})}),t}(e),a=function(e){var t=e.partList.find(function(e){return function(e){return e&&"ScorePart"===e._class}(e)&&"piano"===e.partName.partName.toLowerCase()});return t?t.id:void 0}(e),o=4,i={},c=[],l=void 0!==a?a:"P1";c.push(l),void 0===t||c.includes(t)||c.push(t),e.measures.forEach(function(t,a){c.forEach(function(c){if(void 0!==t.parts[c]){void 0===i[c]&&(i[c]={divisions:void 0,progress:0,timeSignatures:[],keySignatures:[],measures:Array(e.measures.length)});var l=i[c],s=[],u=function(e){return void 0===l.divisions?(console.error("A note was defined before timing information was established"),e/24):e/l.divisions*(o/4)};l.progress=0,t.parts[c].forEach(function(e){switch(e._class){case"Note":if(void 0!==e.duration){var t=l.progress;if(void 0!==e.chord?0===s.length?console.error("The first note within a measure was marked as being part of a chord"):(s[s.length-1].duration!==u(e.duration)&&console.error("Two notes in a chord were of different durations"),t=s[s.length-1].time):l.progress+=u(e.duration),void 0===e.rest&&void 0===e.pitch&&console.error("A note was neither marked as a rest or given a pitch"),void 0!==e.rest&&void 0!==e.pitch&&console.error("A note was marked as a rest but was also given a pitch"),void 0!==e.pitch){var i=e.ties,c=e.staff?e.staff:1;s.push({time:t,duration:u(e.duration),midi:r(e.pitch),staff:c,attributes:{ties:i?i.map(function(e){return 0===e.type?n.a.Start:n.a.Stop}):[]}})}l.measures[a]=s}break;case"Backup":l.progress-=u(e.duration);break;case"Forward":l.progress+=u(e.duration);break;case"Attributes":if(void 0!==e.divisions&&(l.divisions=e.divisions),void 0!==e.times&&0!==e.times.length)try{l.timeSignatures.push({measure:a,beats:parseInt(e.times[0].beats[0]),beatTypes:e.times[0].beatTypes[0]}),o=e.times[0].beatTypes[0]}catch(d){console.error("Failed to parse time signature",e.times[0])}if(e.keySignatures&&0!==e.keySignatures.length)try{l.keySignatures.push({measure:a,fifths:e.keySignatures[0].fifths})}catch(d){console.error("Failed to parse key signature",e.keySignatures[0])}break;case"Print":case"Barline":case"Direction":case"Sound":break;default:console.error("Unrecognized MusicXML entry: '".concat(e._class,"'"))}})}})});var s=Object.keys(i).map(function(e){var a=[];return e===t&&a.push("Lyrics"),e===l&&a.push("Instrument"),{measures:i[e].measures,timeSignatures:i[e].timeSignatures,keySignatures:i[e].keySignatures,trackTypes:a}});return s.forEach(function(e){if(0===e.keySignatures.length&&e.keySignatures.push({measure:0,fifths:0}),0===e.timeSignatures.length)if(1===e.measures.length){var t=e.measures[0],a=Array(Math.ceil(t.length/4)).fill([]).map(function(e,t){return 4*t}).map(function(e){return t.slice(e,e+4)});a.forEach(function(e,t){return e.forEach(function(e){return e.time-=4*t})}),e.timeSignatures.push({measure:a.length,beats:4,beatTypes:4}),e.measures=a}else{var n=4;e.measures.forEach(function(t,a){var r=t[t.length-1],o=Math.max(r.time+r.duration);n!==o&&(e.timeSignatures.push({measure:a,beats:o,beatTypes:4}),n=o)})}}),{tracks:s}}},68:function(e,t,a){e.exports=a.p+"static/media/dropDown.2ec80983.svg"},71:function(e,t,a){e.exports=a.p+"static/media/upload.027829c2.svg"},73:function(e,t,a){e.exports=a(130)},89:function(e,t){},90:function(e,t){},96:function(e,t){},98:function(e,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.6d42217d.chunk.js.map