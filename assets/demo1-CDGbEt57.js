import{h as u,p as i,t as c,f as p,_,o as f,c as d,q as m}from"./app-BD8n-KN3.js";function h(s=200,t){const n=u(!1);let e;function o(){return r(),n.value=!0,e=setTimeout(()=>{r()},s),e}function r(l){(!l||l===e)&&(n.value=!1,e&&(clearTimeout(e),e=void 0))}function a(...l){if(!n.value)return o(),t==null?void 0:t(...l)}return c(r),{throttleOpen:i(n),throttleFn:a,openThrottle:o,closeThrottle:r}}const v=p({__name:"demo1",setup(s,{expose:t}){t();const n=u(0),{throttleFn:e}=h(1e3,()=>n.value++),o={num:n,handleClick:e};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function k(s,t,n,e,o,r){return f(),d("button",{onClick:t[0]||(t[0]=(...a)=>e.handleClick&&e.handleClick(...a))},m(e.num),1)}const T=_(v,[["render",k],["__file","demo1.vue"]]);export{T as default};
