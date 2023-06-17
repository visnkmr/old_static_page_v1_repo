(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6486(e,t,n){"use strict";n.d(t,{F(){return d},f(){return c}});var a=n(7862);const r=["light","dark"],o="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,a.createContext)(void 0),s={setTheme(e){},themes:[]},d=()=>{var e;return null!==(e=(0,a.useContext)(l))&&void 0!==e?e:s},c=e=>(0,a.useContext)(l)?a.createElement(a.Fragment,null,e.children):a.createElement(u,e),m=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:s="theme",themes:d=m,defaultTheme:c=(n?"system":"light"),attribute:u="data-theme",value:g,children:p,nonce:b})=>{const[w,E]=(0,a.useState)((()=>f(s,c))),[x,k]=(0,a.useState)((()=>f(s))),$=g?Object.values(g):d,C=(0,a.useCallback)((e=>{let a=e;if(!a)return;"system"===e&&n&&(a=y());const o=g?g[a]:a,l=t?v():null,s=document.documentElement;if("class"===u?(s.classList.remove(...$),o&&s.classList.add(o)):o?s.setAttribute(u,o):s.removeAttribute(u),i){const e=r.includes(c)?c:null,t=r.includes(a)?a:e;s.style.colorScheme=t}null==l||l()}),[]),S=(0,a.useCallback)((e=>{E(e);try{localStorage.setItem(s,e)}catch(e){}}),[e]),N=(0,a.useCallback)((t=>{const a=y(t);k(a),"system"===w&&n&&!e&&C("system")}),[w,e]);(0,a.useEffect)((()=>{const e=window.matchMedia(o);return e.addListener(N),N(e),()=>e.removeListener(N)}),[N]),(0,a.useEffect)((()=>{const e=e=>{e.key===s&&S(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[S]),(0,a.useEffect)((()=>{C(null!=e?e:w)}),[e,w]);const _=(0,a.useMemo)((()=>({theme:w,setTheme:S,forcedTheme:e,resolvedTheme:"system"===w?x:w,themes:n?[...d,"system"]:d,systemTheme:n?x:void 0})),[w,S,e,x,n,d]);return a.createElement(l.Provider,{value:_},a.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:s,themes:d,defaultTheme:c,attribute:u,value:g,children:p,attrs:$,nonce:b}),p)},h=(0,a.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:l,defaultTheme:s,value:d,attrs:c,nonce:m})=>{const u="system"===s,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map((e=>`'${e}'`)).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=l?r.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,a=!0)=>{const o=d?d[e]:e,i=t?e+"|| ''":`'${o}'`;let s="";return l&&a&&!t&&r.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||o?`c.add(${i})`:"null":o&&(s+=`d[s](n,${i})`),s},y=e?`!function(){${h}${v(e)}}()`:i?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${v(d?"x[e]":"e",!0)}}${u?"":"else{"+v(s,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${v(d?"x[e]":"e",!0)}}else{${v(s,!1,!1)};}${f}}catch(t){}}();`;return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})}),(()=>!0)),f=(e,t)=>{if(i)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},v=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},y=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},9716(e,t,n){Promise.resolve().then(n.bind(n,8190)),Promise.resolve().then(n.bind(n,2239)),Promise.resolve().then(n.t.bind(n,9163,23)),Promise.resolve().then(n.bind(n,5186)),Promise.resolve().then(n.t.bind(n,5721,23))},8190(e,t,n){"use strict";function a(){const{theme:e,setTheme:t}=(0,i.F)();return(0,o.useEffect)((()=>{const t=document.getElementById("theme-toggle-dark-icon"),n=document.getElementById("theme-toggle-light-icon");"dark"===e?(t.style.display="block",n.style.display="none"):(t.style.display="none",n.style.display="block")}),[e]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"dark:bg-gray-900 h-10",children:[(0,r.jsx)("span",{className:"p-2.5 absolute right-0",children:(0,r.jsxs)("button",{id:"theme-toggle",type:"button","aria-label":"light dark mode toggle",className:"text-gray-500  rounded-lg text-sm p-2.5",onClick(){return t("light"===e?"dark":"light")},children:[(0,r.jsx)("svg",{id:"theme-toggle-dark-icon",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",style:{display:"none"},children:(0,r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),(0,r.jsx)("svg",{id:"theme-toggle-light-icon",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",style:{display:"none"},children:(0,r.jsx)("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"})})]})}),(0,r.jsx)("span",{className:"p-2.5 absolute left-0",children:(0,r.jsx)("img",{alt:"image of Vishnu N K",className:"topimg rounded-full w-9 sm:w-20 ",src:"https://cdn.jsdelivr.net/gh/visnkmr/hv2static@main/1654419210688.jpg"})})]})})}var r,o,i;n.r(t),n.d(t,{default(){return a}}),r=n(960),o=n(7862),i=n(6486),n(4427)},2239(e,t,n){"use strict";function a(e){let{children:t}=e;return(0,r.jsx)(o.f,{attribute:"class",children:t})}var r,o;n.r(t),n.d(t,{Providers(){return a}}),r=n(960),n(7862),o=n(6486)},9163(){},5721(){},4427(){},529(e,t,n){"use strict";function a(e,t,n){var a,r={},i=null,c=null;for(a in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,a)&&!d.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:i,ref:c,props:r,_owner:s.current}}var r=n(7862),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l={}.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};t.Fragment=i,t.jsx=a,t.jsxs=a},960(e,t,n){"use strict";e.exports=n(529)},5186(e,t,n){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(7862),o=a(r),(e=>{if("undefined"==typeof window)return;const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML='.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n}\n\n.child {\n  transform: var(--transform);\n}',document.head.appendChild(t)})();const i=r.forwardRef((({style:e={},className:t="",autoFill:n=!1,play:a=!0,pauseOnHover:i=!1,pauseOnClick:l=!1,direction:s="left",speed:d=50,delay:c=0,loop:m=0,gradient:u=!1,gradientColor:h=[255,255,255],gradientWidth:f=200,onFinish:v,onCycleComplete:y,onMount:g,children:p},b)=>{const[w,E]=r.useState(0),[x,k]=r.useState(0),[$,C]=r.useState(1),[S,N]=r.useState(!1),_=r.useRef(null),j=b||_,T=r.useRef(null),M=r.useCallback((()=>{if(T.current&&j.current){const e=j.current.getBoundingClientRect(),t=T.current.getBoundingClientRect();let a=e.width,r=t.width;"up"!==s&&"down"!==s||(a=e.height,r=t.height),C(n&&a&&r&&a>r?Math.ceil(a/r):1),E(a),k(r)}}),[n,j,s]);r.useEffect((()=>{if(S&&(M(),T.current&&j.current)){const e=new ResizeObserver((()=>M()));return e.observe(j.current),e.observe(T.current),()=>{e&&e.disconnect()}}}),[M,j,S]),r.useEffect((()=>{M()}),[M,p]),r.useEffect((()=>{N(!0)}),[]),r.useEffect((()=>{"function"==typeof g&&g()}),[]);const O=r.useMemo((()=>n?x*$/d:w>x?w/d:x/d),[n,w,x,$,d]),z=`rgba(${h[0]}, ${h[1]}, ${h[2]}`,L=r.useMemo((()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!a||i?"paused":"running","--pause-on-click":!a||i&&!l||l?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"})),[e,a,i,l,s]),P=r.useMemo((()=>({"--gradient-color":`${z}, 1), ${z}, 0)`,"--gradient-width":"number"==typeof f?f+"px":f})),[z,f]),I=r.useMemo((()=>({"--play":a?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":O+"s","--delay":c+"s","--iteration-count":m?""+m:"infinite","--min-width":n?"auto":"100%"})),[a,s,O,c,m,n]),R=r.useMemo((()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"})),[s]),A=r.useCallback((e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map(((e,t)=>o.default.createElement(r.Fragment,{key:t},r.Children.map(p,(e=>o.default.createElement("div",{style:R,className:"child"},e))))))),[R,p]);return S?o.default.createElement("div",{ref:j,style:L,className:"marquee-container "+t},u&&o.default.createElement("div",{style:P,className:"overlay"}),o.default.createElement("div",{className:"marquee",style:I,onAnimationIteration:y,onAnimationEnd:v},o.default.createElement("div",{className:"initial-child-container",ref:T},r.Children.map(p,(e=>o.default.createElement("div",{style:R,className:"child"},e)))),A($-1)),o.default.createElement("div",{className:"marquee",style:I},A($))):null}));t.default=i}},e=>{var t=(9716,e(e.s=9716));_N_E=t}]);