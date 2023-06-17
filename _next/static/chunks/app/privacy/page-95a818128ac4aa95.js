(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[385],{635(e,t){var n;(()=>{"use strict";function t(){var e,n,i,a,o,s=[];for(e=0;arguments.length>e;e++)if(n=arguments[e])if("string"==(i=typeof n)||"number"===i)s.push(n);else if(Array.isArray(n))n.length&&(a=t.apply(null,n))&&s.push(a);else if("object"===i){if(n.toString!=={}.toString&&!n.toString.toString().includes("[native code]")){s.push(n.toString());continue}for(o in n)r.call(n,o)&&n[o]&&s.push(o)}return s.join(" ")}var r={}.hasOwnProperty;e.exports?(t.default=t,e.exports=t):void 0===(n=t)||(e.exports=n)})()},166(e,t,n){function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){var t,n;return"number"==typeof e?e:(e=>"symbol"==typeof e||(e=>!!e&&"object"==typeof e)(e)&&p.call(e)==o)(e)?a:(r(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=r(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=e.replace(s,""),(n=u.test(e))||c.test(e)?d(e.slice(2),n?2:8):l.test(e)?a:+e))}var a=NaN,o="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,m="object"==typeof self&&self&&self.Object===Object&&self,v=f||m||Function("","return this")(),p={}.toString,h=Math.max,y=Math.min,g=()=>v.Date.now();e.exports=function(e,t,n){function a(t){var n=c,r=d;return c=d=void 0,b=t,m=e.apply(r,n)}function o(e){var n=e-p;return void 0===p||n>=t||0>n||x&&e-b>=f}function s(){var e=g();if(o(e))return l(e);v=setTimeout(s,(e=>{var n=t-(e-p);return x?y(n,f-(e-b)):n})(e))}function l(e){return v=void 0,E&&c?a(e):(c=d=void 0,m)}function u(){var e=g(),n=o(e);if(c=arguments,d=this,p=e,n){if(void 0===v)return(e=>(b=e,v=setTimeout(s,t),w?a(e):m))(p);if(x)return v=setTimeout(s,t),a(p)}return void 0===v&&(v=setTimeout(s,t)),m}var c,d,f,m,v,p,b=0,w=!1,x=!1,E=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t=i(t)||0,r(n)&&(w=!!n.leading,f=(x="maxWait"in n)?h(i(n.maxWait)||0,t):f,E="trailing"in n?!!n.trailing:E),u.cancel=()=>{void 0!==v&&clearTimeout(v),b=0,c=p=d=v=void 0},u.flush=()=>void 0===v?m:l(g()),u}},5480(e,t,n){Promise.resolve().then(n.t.bind(n,5154,23)),Promise.resolve().then(n.bind(n,1871)),Promise.resolve().then(n.bind(n,5186))},1871(e,t,n){"use strict";var r,i,a,o,s,l;n.r(t),r=n(960),i=n(166),a=n.n(i),o=n(7862),s=n(635),l=n.n(s),t.default=e=>{let{text:t,lines:n=2,className:i,...s}=e;const[u,c]=(0,o.useState)(!0),[d,f]=(0,o.useState)(!1),m=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=a()((()=>{if(m.current){const e=m.current.clientHeight<m.current.scrollHeight;f(e)}}),100);return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("div",{className:l()(u?"line-clamp-".concat(n):"",i),ref:m,onClick(){c(!u)},...s,children:[t,d&&(0,r.jsx)("button",{onClick(){return c(!u)},className:"absolute right-0 bottom-0 text-blue-500 hover:text-blue-700",children:u?"...":"<"})]})})}},5154(){},529(e,t,n){"use strict";function r(e,t,n){var r,i={},o=null,c=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:o,ref:c,props:i,_owner:l.current}}var i=n(7862),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s={}.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};t.Fragment=o,t.jsx=r,t.jsxs=r},960(e,t,n){"use strict";e.exports=n(529)},5186(e,t,n){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i,a;Object.defineProperty(t,"__esModule",{value:!0}),i=n(7862),a=r(i),(e=>{if("undefined"==typeof window)return;const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML='.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n}\n\n.child {\n  transform: var(--transform);\n}',document.head.appendChild(t)})();const o=i.forwardRef((({style:e={},className:t="",autoFill:n=!1,play:r=!0,pauseOnHover:o=!1,pauseOnClick:s=!1,direction:l="left",speed:u=50,delay:c=0,loop:d=0,gradient:f=!1,gradientColor:m=[255,255,255],gradientWidth:v=200,onFinish:p,onCycleComplete:h,onMount:y,children:g},b)=>{const[w,x]=i.useState(0),[E,_]=i.useState(0),[N,j]=i.useState(1),[O,k]=i.useState(!1),S=i.useRef(null),C=b||S,R=i.useRef(null),M=i.useCallback((()=>{if(R.current&&C.current){const e=C.current.getBoundingClientRect(),t=R.current.getBoundingClientRect();let r=e.width,i=t.width;"up"!==l&&"down"!==l||(r=e.height,i=t.height),j(n&&r&&i&&r>i?Math.ceil(r/i):1),x(r),_(i)}}),[n,C,l]);i.useEffect((()=>{if(O&&(M(),R.current&&C.current)){const e=new ResizeObserver((()=>M()));return e.observe(C.current),e.observe(R.current),()=>{e&&e.disconnect()}}}),[M,C,O]),i.useEffect((()=>{M()}),[M,g]),i.useEffect((()=>{k(!0)}),[]),i.useEffect((()=>{"function"==typeof y&&y()}),[]);const $=i.useMemo((()=>n?E*N/u:w>E?w/u:E/u),[n,w,E,N,u]),T=`rgba(${m[0]}, ${m[1]}, ${m[2]}`,P=i.useMemo((()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!r||o?"paused":"running","--pause-on-click":!r||o&&!s||s?"paused":"running","--width":"up"===l||"down"===l?"100vh":"100%","--transform":"up"===l?"rotate(-90deg)":"down"===l?"rotate(90deg)":"none"})),[e,r,o,s,l]),q=i.useMemo((()=>({"--gradient-color":`${T}, 1), ${T}, 0)`,"--gradient-width":"number"==typeof v?v+"px":v})),[T,v]),A=i.useMemo((()=>({"--play":r?"running":"paused","--direction":"left"===l?"normal":"reverse","--duration":$+"s","--delay":c+"s","--iteration-count":d?""+d:"infinite","--min-width":n?"auto":"100%"})),[r,l,$,c,d,n]),F=i.useMemo((()=>({"--transform":"up"===l?"rotate(90deg)":"down"===l?"rotate(-90deg)":"none"})),[l]),L=i.useCallback((e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map(((e,t)=>a.default.createElement(i.Fragment,{key:t},i.Children.map(g,(e=>a.default.createElement("div",{style:F,className:"child"},e))))))),[F,g]);return O?a.default.createElement("div",{ref:C,style:P,className:"marquee-container "+t},f&&a.default.createElement("div",{style:q,className:"overlay"}),a.default.createElement("div",{className:"marquee",style:A,onAnimationIteration:h,onAnimationEnd:p},a.default.createElement("div",{className:"initial-child-container",ref:R},i.Children.map(g,(e=>a.default.createElement("div",{style:F,className:"child"},e)))),L(N-1)),a.default.createElement("div",{className:"marquee",style:A},L(N))):null}));t.default=o}},e=>{var t=(5480,e(e.s=5480));_N_E=t}]);