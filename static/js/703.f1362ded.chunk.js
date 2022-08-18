/*! For license information please see 703.f1362ded.chunk.js.LICENSE.txt */
(self.webpackChunksnapp=self.webpackChunksnapp||[]).push([[703],{8703:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return a(e)||i(e)||l(e)||u()}function a(e){if(Array.isArray(e))return c(e)}function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s=Object.hasOwnProperty,m=Object.setPrototypeOf,f=Object.isFrozen,p=Object.getPrototypeOf,d=Object.getOwnPropertyDescriptor,h=Object.freeze,g=Object.seal,y=Object.create,b="undefined"!==typeof Reflect&&Reflect,v=b.apply,T=b.construct;v||(v=function(e,t,n){return e.apply(t,n)}),h||(h=function(e){return e}),g||(g=function(e){return e}),T||(T=function(e,t){return r(e,o(t))});var N=C(Array.prototype.forEach),A=C(Array.prototype.pop),E=C(Array.prototype.push),w=C(String.prototype.toLowerCase),k=C(String.prototype.match),x=C(String.prototype.replace),S=C(String.prototype.indexOf),_=C(String.prototype.trim),O=C(RegExp.prototype.test),D=R(TypeError);function C(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return v(e,t,r)}}function R(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return T(e,n)}}function L(e,t,n){n=n||w,m&&m(e,null);for(var r=t.length;r--;){var o=t[r];if("string"===typeof o){var a=n(o);a!==o&&(f(t)||(t[r]=a),o=a)}e[o]=!0}return e}function M(e){var t,n=y(null);for(t in e)v(s,e,[t])&&(n[t]=e[t]);return n}function I(e,t){for(;null!==e;){var n=d(e,t);if(n){if(n.get)return C(n.get);if("function"===typeof n.value)return C(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var F=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),U=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),z=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),B=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),j=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),P=h(["#text"]),G=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),W=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),q=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Y=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),K=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=g(/<%[\w\W]*|[\w\W]*%>/gm),$=g(/^data-[\-\w.\u00B7-\uFFFF]/),X=g(/^aria-[\-\w]+$/),Z=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),J=g(/^(?:\w+script|data):/i),Q=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ee=g(/^html$/i),te=function(){return"undefined"===typeof window?null:window},ne=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function re(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te(),n=function(e){return re(e)};if(n.version="2.3.10",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,u=t.Element,s=t.NodeFilter,m=t.NamedNodeMap,f=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,p=t.HTMLFormElement,d=t.DOMParser,g=t.trustedTypes,y=u.prototype,b=I(y,"cloneNode"),v=I(y,"nextSibling"),T=I(y,"childNodes"),C=I(y,"parentNode");if("function"===typeof l){var R=a.createElement("template");R.content&&R.content.ownerDocument&&(a=R.content.ownerDocument)}var oe=ne(g,r),ae=oe?oe.createHTML(""):"",ie=a,le=ie.implementation,ce=ie.createNodeIterator,ue=ie.createDocumentFragment,se=ie.getElementsByTagName,me=r.importNode,fe={};try{fe=M(a).documentMode?a.documentMode:{}}catch(kt){}var pe={};n.isSupported="function"===typeof C&&le&&"undefined"!==typeof le.createHTMLDocument&&9!==fe;var de,he,ge=K,ye=V,be=$,ve=X,Te=J,Ne=Q,Ae=Z,Ee=null,we=L({},[].concat(o(F),o(H),o(U),o(B),o(P))),ke=null,xe=L({},[].concat(o(G),o(W),o(q),o(Y))),Se=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),_e=null,Oe=null,De=!0,Ce=!0,Re=!1,Le=!1,Me=!1,Ie=!1,Fe=!1,He=!1,Ue=!1,ze=!1,Be=!0,je=!0,Pe=!1,Ge={},We=null,qe=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ye=null,Ke=L({},["audio","video","img","source","image","track"]),Ve=null,$e=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xe="http://www.w3.org/1998/Math/MathML",Ze="http://www.w3.org/2000/svg",Je="http://www.w3.org/1999/xhtml",Qe=Je,et=!1,tt=["application/xhtml+xml","text/html"],nt="text/html",rt=null,ot=a.createElement("form"),at=function(e){return e instanceof RegExp||e instanceof Function},it=function(t){rt&&rt===t||(t&&"object"===e(t)||(t={}),t=M(t),de=de=-1===tt.indexOf(t.PARSER_MEDIA_TYPE)?nt:t.PARSER_MEDIA_TYPE,he="application/xhtml+xml"===de?function(e){return e}:w,Ee="ALLOWED_TAGS"in t?L({},t.ALLOWED_TAGS,he):we,ke="ALLOWED_ATTR"in t?L({},t.ALLOWED_ATTR,he):xe,Ve="ADD_URI_SAFE_ATTR"in t?L(M($e),t.ADD_URI_SAFE_ATTR,he):$e,Ye="ADD_DATA_URI_TAGS"in t?L(M(Ke),t.ADD_DATA_URI_TAGS,he):Ke,We="FORBID_CONTENTS"in t?L({},t.FORBID_CONTENTS,he):qe,_e="FORBID_TAGS"in t?L({},t.FORBID_TAGS,he):{},Oe="FORBID_ATTR"in t?L({},t.FORBID_ATTR,he):{},Ge="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Ce=!1!==t.ALLOW_DATA_ATTR,Re=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=t.SAFE_FOR_TEMPLATES||!1,Me=t.WHOLE_DOCUMENT||!1,He=t.RETURN_DOM||!1,Ue=t.RETURN_DOM_FRAGMENT||!1,ze=t.RETURN_TRUSTED_TYPE||!1,Fe=t.FORCE_BODY||!1,Be=!1!==t.SANITIZE_DOM,je=!1!==t.KEEP_CONTENT,Pe=t.IN_PLACE||!1,Ae=t.ALLOWED_URI_REGEXP||Ae,Qe=t.NAMESPACE||Je,t.CUSTOM_ELEMENT_HANDLING&&at(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Se.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&at(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Se.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Se.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(Ce=!1),Ue&&(He=!0),Ge&&(Ee=L({},o(P)),ke=[],!0===Ge.html&&(L(Ee,F),L(ke,G)),!0===Ge.svg&&(L(Ee,H),L(ke,W),L(ke,Y)),!0===Ge.svgFilters&&(L(Ee,U),L(ke,W),L(ke,Y)),!0===Ge.mathMl&&(L(Ee,B),L(ke,q),L(ke,Y))),t.ADD_TAGS&&(Ee===we&&(Ee=M(Ee)),L(Ee,t.ADD_TAGS,he)),t.ADD_ATTR&&(ke===xe&&(ke=M(ke)),L(ke,t.ADD_ATTR,he)),t.ADD_URI_SAFE_ATTR&&L(Ve,t.ADD_URI_SAFE_ATTR,he),t.FORBID_CONTENTS&&(We===qe&&(We=M(We)),L(We,t.FORBID_CONTENTS,he)),je&&(Ee["#text"]=!0),Me&&L(Ee,["html","head","body"]),Ee.table&&(L(Ee,["tbody"]),delete _e.tbody),h&&h(t),rt=t)},lt=L({},["mi","mo","mn","ms","mtext"]),ct=L({},["foreignobject","desc","title","annotation-xml"]),ut=L({},["title","style","font","a","script"]),st=L({},H);L(st,U),L(st,z);var mt=L({},B);L(mt,j);var ft=function(e){var t=C(e);t&&t.tagName||(t={namespaceURI:Je,tagName:"template"});var n=w(e.tagName),r=w(t.tagName);return e.namespaceURI===Ze?t.namespaceURI===Je?"svg"===n:t.namespaceURI===Xe?"svg"===n&&("annotation-xml"===r||lt[r]):Boolean(st[n]):e.namespaceURI===Xe?t.namespaceURI===Je?"math"===n:t.namespaceURI===Ze?"math"===n&&ct[r]:Boolean(mt[n]):e.namespaceURI===Je&&!(t.namespaceURI===Ze&&!ct[r])&&!(t.namespaceURI===Xe&&!lt[r])&&!mt[n]&&(ut[n]||!st[n])},pt=function(e){E(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(kt){try{e.outerHTML=ae}catch(kt){e.remove()}}},dt=function(e,t){try{E(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(kt){E(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(He||Ue)try{pt(t)}catch(kt){}else try{t.setAttribute(e,"")}catch(kt){}},ht=function(e){var t,n;if(Fe)e="<remove></remove>"+e;else{var r=k(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===de&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=oe?oe.createHTML(e):e;if(Qe===Je)try{t=(new d).parseFromString(o,de)}catch(kt){}if(!t||!t.documentElement){t=le.createDocument(Qe,"template",null);try{t.documentElement.innerHTML=et?"":o}catch(kt){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),Qe===Je?se.call(t,Me?"html":"body")[0]:Me?t.documentElement:i},gt=function(e){return ce.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},yt=function(e){return e instanceof p&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof f)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore)},bt=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},vt=function(e,t,r){pe[e]&&N(pe[e],(function(e){e.call(n,t,r,rt)}))},Tt=function(e){var t;if(vt("beforeSanitizeElements",e,null),yt(e))return pt(e),!0;if(O(/[\u0080-\uFFFF]/,e.nodeName))return pt(e),!0;var r=he(e.nodeName);if(vt("uponSanitizeElement",e,{tagName:r,allowedTags:Ee}),e.hasChildNodes()&&!bt(e.firstElementChild)&&(!bt(e.content)||!bt(e.content.firstElementChild))&&O(/<[/\w]/g,e.innerHTML)&&O(/<[/\w]/g,e.textContent))return pt(e),!0;if("select"===r&&O(/<template/i,e.innerHTML))return pt(e),!0;if(!Ee[r]||_e[r]){if(!_e[r]&&At(r)){if(Se.tagNameCheck instanceof RegExp&&O(Se.tagNameCheck,r))return!1;if(Se.tagNameCheck instanceof Function&&Se.tagNameCheck(r))return!1}if(je&&!We[r]){var o=C(e)||e.parentNode,a=T(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(b(a[i],!0),v(e))}return pt(e),!0}return e instanceof u&&!ft(e)?(pt(e),!0):"noscript"!==r&&"noembed"!==r||!O(/<\/no(script|embed)/i,e.innerHTML)?(Le&&3===e.nodeType&&(t=e.textContent,t=x(t,ge," "),t=x(t,ye," "),e.textContent!==t&&(E(n.removed,{element:e.cloneNode()}),e.textContent=t)),vt("afterSanitizeElements",e,null),!1):(pt(e),!0)},Nt=function(e,t,n){if(Be&&("id"===t||"name"===t)&&(n in a||n in ot))return!1;if(Ce&&!Oe[t]&&O(be,t));else if(De&&O(ve,t));else if(!ke[t]||Oe[t]){if(!(At(e)&&(Se.tagNameCheck instanceof RegExp&&O(Se.tagNameCheck,e)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(e))&&(Se.attributeNameCheck instanceof RegExp&&O(Se.attributeNameCheck,t)||Se.attributeNameCheck instanceof Function&&Se.attributeNameCheck(t))||"is"===t&&Se.allowCustomizedBuiltInElements&&(Se.tagNameCheck instanceof RegExp&&O(Se.tagNameCheck,n)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(n))))return!1}else if(Ve[t]);else if(O(Ae,x(n,Ne,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==S(n,"data:")||!Ye[e])if(Re&&!O(Te,x(n,Ne,"")));else if(n)return!1;return!0},At=function(e){return e.indexOf("-")>0},Et=function(t){var r,o,a,i;vt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var u=r=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?r.value:_(r.value),a=he(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,vt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(dt(s,t),c.keepAttr))if(O(/\/>/i,o))dt(s,t);else{Le&&(o=x(o,ge," "),o=x(o,ye," "));var f=he(t.nodeName);if(Nt(f,a,o)){if(oe&&"object"===e(g)&&"function"===typeof g.getAttributeType)if(m);else switch(g.getAttributeType(f,a)){case"TrustedHTML":o=oe.createHTML(o);break;case"TrustedScriptURL":o=oe.createScriptURL(o)}try{m?t.setAttributeNS(m,s,o):t.setAttribute(s,o),A(n.removed)}catch(kt){}}}}vt("afterSanitizeAttributes",t,null)}},wt=function e(t){var n,r=gt(t);for(vt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)vt("uponSanitizeShadowNode",n,null),Tt(n)||(n.content instanceof i&&e(n.content),Et(n));vt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o,a){var l,u,s,m,f;if((et=!o)&&(o="\x3c!--\x3e"),"string"!==typeof o&&!bt(o)){if("function"!==typeof o.toString)throw D("toString is not a function");if("string"!==typeof(o=o.toString()))throw D("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"===typeof t.toStaticHTML){if("string"===typeof o)return t.toStaticHTML(o);if(bt(o))return t.toStaticHTML(o.outerHTML)}return o}if(Ie||it(a),n.removed=[],"string"===typeof o&&(Pe=!1),Pe){if(o.nodeName){var p=he(o.nodeName);if(!Ee[p]||_e[p])throw D("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(u=(l=ht("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===u.nodeName||"HTML"===u.nodeName?l=u:l.appendChild(u);else{if(!He&&!Le&&!Me&&-1===o.indexOf("<"))return oe&&ze?oe.createHTML(o):o;if(!(l=ht(o)))return He?null:ze?ae:""}l&&Fe&&pt(l.firstChild);for(var d=gt(Pe?o:l);s=d.nextNode();)3===s.nodeType&&s===m||Tt(s)||(s.content instanceof i&&wt(s.content),Et(s),m=s);if(m=null,Pe)return o;if(He){if(Ue)for(f=ue.call(l.ownerDocument);l.firstChild;)f.appendChild(l.firstChild);else f=l;return ke.shadowroot&&(f=me.call(r,f,!0)),f}var h=Me?l.outerHTML:l.innerHTML;return Me&&Ee["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&O(ee,l.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+l.ownerDocument.doctype.name+">\n"+h),Le&&(h=x(h,ge," "),h=x(h,ye," ")),oe&&ze?oe.createHTML(h):h},n.setConfig=function(e){it(e),Ie=!0},n.clearConfig=function(){rt=null,Ie=!1},n.isValidAttribute=function(e,t,n){rt||it({});var r=he(e),o=he(t);return Nt(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&(pe[e]=pe[e]||[],E(pe[e],t))},n.removeHook=function(e){if(pe[e])return A(pe[e])},n.removeHooks=function(e){pe[e]&&(pe[e]=[])},n.removeAllHooks=function(){pe={}},n}return re()}()}}]);
//# sourceMappingURL=703.f1362ded.chunk.js.map