import{a as g,R as v}from"./chunks/index.DA64odDQ.js";import{p,S as _,d as C,o as h,c as f,t as k,N as x,k as a,_ as y,j as r,a as d,G as u,w as m,B as G}from"./chunks/framework.D6w4zQ8K.js";const B=`<script setup lang="ts">\r
import { useThrottleControl } from '@mortise-tenon/hooks';\r
import { ref } from 'vue';\r
\r
const num = ref(0);\r
\r
const {\r
  throttling,\r
  openThrottle,\r
  closeThrottle,\r
} = useThrottleControl(1000);\r
\r
/** 模拟远程请求，等待0~2秒 */\r
function addNum() {\r
  if (throttling.value) {\r
    return;\r
  }\r
  const timer = openThrottle();\r
  return new Promise<void>((resolve) => {\r
    const sm = Math.random() * 2000; // 随机0~2000\r
    setTimeout(() => {\r
      num.value++;\r
      closeThrottle(timer); // 结束时可提前关闭节流\r
      resolve();\r
    }, sm);\r
  });\r
}\r
<\/script>\r
\r
<template>\r
  <button :style="{ color: throttling ? 'red' : 'green' }" @click="addNum()">\r
    {{ num }}\r
  </button>\r
</template>\r
\r
<style scoped>\r
button {\r
  padding: 5px 15px;\r
  cursor: pointer;\r
  background-color: #fff;\r
  border-radius: 4px;\r
}\r
</style>\r
`;function T(i=200,n){const t=p(!1);let e;function s(){return l(),t.value=!0,e=setTimeout(()=>{l()},i),e}function l(o){(!o||o===e)&&(t.value=!1,e&&(clearTimeout(e),e=void 0))}function c(...o){if(!t.value)return s(),n==null?void 0:n(...o)}return g(l),{throttling:_(t),throttleFn:c,openThrottle:s,closeThrottle:l}}const D=C({__name:"demo2",setup(i){const n=p(0),{throttling:t,openThrottle:e,closeThrottle:s}=T(1e3);function l(){if(t.value)return;const c=e();return new Promise(o=>{const b=Math.random()*2e3;setTimeout(()=>{n.value++,s(c),o()},b)})}return(c,o)=>(h(),f("button",{style:x({color:a(t)?"red":"green"}),onClick:o[0]||(o[0]=b=>l())},k(n.value),5))}}),Z=y(D,[["__scopeId","data-v-7164634d"]]),A=`<script setup lang="ts">\r
import { useThrottleControl } from '@mortise-tenon/hooks';\r
import { ref } from 'vue';\r
\r
const num = ref(0);\r
\r
const { throttleFn: handleClick } = useThrottleControl(1000, () => num.value++);\r
<\/script>\r
\r
<template>\r
  <button @click="handleClick">\r
    {{ num }}\r
  </button>\r
</template>\r
\r
<style scoped>\r
button {\r
  padding: 5px 15px;\r
  cursor: pointer;\r
  background-color: #fff;\r
  border-radius: 4px;\r
}\r
</style>\r
`,N=C({__name:"demo1",setup(i){const n=p(0),{throttleFn:t}=T(1e3,()=>n.value++);return(e,s)=>(h(),f("button",{onClick:s[0]||(s[0]=(...l)=>a(t)&&a(t)(...l))},k(n.value),1))}}),U=y(N,[["__scopeId","data-v-a96ae0a9"]]),J=JSON.parse('{"title":"useThrottleControl","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/use-throttle-control.md","filePath":"zh/hooks/use-throttle-control.md"}'),w={name:"zh/hooks/use-throttle-control.md"},V=Object.assign(w,{setup(i){return(n,t)=>{const e=G("ClientOnly");return h(),f("div",null,[t[0]||(t[0]=r("h1",{id:"usethrottlecontrol",tabindex:"-1"},[d("useThrottleControl "),r("a",{class:"header-anchor",href:"#usethrottlecontrol","aria-label":'Permalink to "useThrottleControl"'},"​")],-1)),t[1]||(t[1]=r("p",null,"节流控制。有效控制程序执行的间隔时间。",-1)),t[2]||(t[2]=r("h2",{id:"通过节流函数控制",tabindex:"-1"},[d("通过节流函数控制 "),r("a",{class:"header-anchor",href:"#通过节流函数控制","aria-label":'Permalink to "通过节流函数控制"'},"​")],-1)),u(e,null,{default:m(()=>[u(a(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(A)},{vue:m(()=>[u(U)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=r("h2",{id:"通过节流状态控制",tabindex:"-1"},[d("通过节流状态控制 "),r("a",{class:"header-anchor",href:"#通过节流状态控制","aria-label":'Permalink to "通过节流状态控制"'},"​")],-1)),u(e,null,{default:m(()=>[u(a(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(B)},{vue:m(()=>[u(Z)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=r("h2",{id:"源码",tabindex:"-1"},[d("源码 "),r("a",{class:"header-anchor",href:"#源码","aria-label":'Permalink to "源码"'},"​")],-1)),t[5]||(t[5]=r("p",null,[r("a",{href:"https://github.com/nixwai/mortise-tenon/blob/main/packages/hooks/use-throttle-control/index.ts",target:"_blank",rel:"noreferrer"},"源代码")],-1))])}}});export{J as __pageData,V as default};
