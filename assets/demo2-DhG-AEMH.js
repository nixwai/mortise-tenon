import{u as i}from"./index-CLiZvxzW.js";import{f as _,g as d,_ as p,o as f,c as v,t as g,p as h}from"./app-B-cGsxFT.js";const x=_({__name:"demo2",setup(l,{expose:t}){t();const o=d(0),{throttling:e,openThrottle:r,closeThrottle:n}=i(1e3);function s(){if(e.value)return;const m=r();return new Promise(u=>{const c=Math.random()*2e3;setTimeout(()=>{o.value++,n(m),u()},c)})}const a={num:o,throttling:e,openThrottle:r,closeThrottle:n,addNum:s};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function y(l,t,o,e,r,n){return f(),v("button",{style:h({color:e.throttling?"red":"green"}),onClick:t[0]||(t[0]=s=>e.addNum())},g(e.num),5)}const b=p(x,[["render",y],["__scopeId","data-v-7164634d"],["__file","demo2.vue"]]);export{b as default};