import{p,S as B,d as y,c as v,o as b,F as x,j as n,t as f,N as _,k as o,C as w,ae as C,G as u,a as d,ai as k,w as h}from"./chunks/framework.BSVvnydI.js";import{a as A}from"./chunks/index.CU7lAU4_.js";import{d as T,f as g}from"./chunks/index.CF5C30ZV.js";const G=`<script setup lang="ts">\r
import { useThrottleControl } from 'mortise-tenon-use';\r
import { ref } from 'vue';\r
\r
const num = ref(0);\r
\r
const {\r
  throttling,\r
  openThrottle,\r
  closeThrottle,\r
} = useThrottleControl(3000);\r
\r
/** 当请求等待超过3s或者请求结束时会结束节流 */\r
function handleClick() {\r
  if (throttling.value) {\r
    return;\r
  }\r
  const timer = openThrottle();\r
  addNum().finally(() => {\r
    closeThrottle(timer); // 请求结束时关闭节流\r
  });\r
}\r
\r
/** 模拟远程请求 */\r
function addNum() {\r
  return new Promise<void>((resolve) => {\r
    const sm = num.value * 1000;\r
    setTimeout(() => {\r
      num.value++;\r
      resolve();\r
    }, sm);\r
  });\r
}\r
<\/script>\r
\r
<template>\r
  <div>当前请求所需时间：{{ num }}秒</div>\r
  <button :style="{ color: throttling ? 'red' : 'green' }" class="btn" @click="handleClick()">\r
    {{ num }}\r
  </button>\r
</template>\r
`;function D(c=200,t){const r=p(!1);let e;function a(){return l(),r.value=!0,e=setTimeout(()=>{l()},c),e}function l(s){(!s||s===e)&&(r.value=!1,e&&(clearTimeout(e),e=void 0))}function i(...s){if(!r.value)return a(),t==null?void 0:t(...s)}return A(l),{throttling:B(r),throttleFn:i,openThrottle:a,closeThrottle:l}}const N=y({__name:"use-status",setup(c){const t=p(0),{throttling:r,openThrottle:e,closeThrottle:a}=D(3e3);function l(){if(r.value)return;const s=e();i().finally(()=>{a(s)})}function i(){return new Promise(s=>{const m=t.value*1e3;setTimeout(()=>{t.value++,s()},m)})}return(s,m)=>(b(),v(x,null,[n("div",null,"当前请求所需时间："+f(t.value)+"秒",1),n("button",{style:_({color:o(r)?"red":"green"}),class:"btn",onClick:m[0]||(m[0]=z=>l())},f(t.value),5)],64))}}),U=`<script setup lang="ts">\r
import { useThrottleControl } from 'mortise-tenon-use';\r
import { ref } from 'vue';\r
\r
const num = ref(0);\r
\r
const { throttling, throttleFn: handleClick } = useThrottleControl(1000, () => num.value++);\r
<\/script>\r
\r
<template>\r
  <button :style="{ color: throttling ? 'red' : 'green' }" class="btn" @click="handleClick">\r
    {{ num }}\r
  </button>\r
</template>\r
`,P=y({__name:"use-fn",setup(c){const t=p(0),{throttling:r,throttleFn:e}=D(1e3,()=>t.value++);return(a,l)=>(b(),v("button",{style:_({color:o(r)?"red":"green"}),class:"btn",onClick:l[0]||(l[0]=(...i)=>o(e)&&o(e)(...i))},f(t.value),5))}}),S=JSON.parse('{"title":"useThrottleControl","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/use-throttle-control.md","filePath":"zh/hooks/use-throttle-control.md","lastUpdated":1741252669000}'),V={name:"zh/hooks/use-throttle-control.md"},H=Object.assign(V,{setup(c){const t=p(!0);return(r,e)=>{const a=w("ClientOnly");return b(),v("div",null,[e[2]||(e[2]=n("h1",{id:"usethrottlecontrol",tabindex:"-1"},[d("useThrottleControl "),n("a",{class:"header-anchor",href:"#usethrottlecontrol","aria-label":'Permalink to "useThrottleControl"'},"​")],-1)),e[3]||(e[3]=n("p",null,"节流控制。有效控制程序执行的间隔时间。",-1)),e[4]||(e[4]=n("h2",{id:"通过节流函数控制",tabindex:"-1"},[d("通过节流函数控制 "),n("a",{class:"header-anchor",href:"#通过节流函数控制","aria-label":'Permalink to "通过节流函数控制"'},"​")],-1)),C(u(o(T),null,null,512),[[k,t.value]]),u(a,null,{default:h(()=>[u(o(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:o(U)},{vue:h(()=>[u(P)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=n("h2",{id:"通过节流状态控制",tabindex:"-1"},[d("通过节流状态控制 "),n("a",{class:"header-anchor",href:"#通过节流状态控制","aria-label":'Permalink to "通过节流状态控制"'},"​")],-1)),C(u(o(T),null,null,512),[[k,t.value]]),u(a,null,{default:h(()=>[u(o(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:o(G)},{vue:h(()=>[u(N)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=n("h2",{id:"源码",tabindex:"-1"},[d("源码 "),n("a",{class:"header-anchor",href:"#源码","aria-label":'Permalink to "源码"'},"​")],-1)),e[7]||(e[7]=n("p",null,[n("a",{href:"https://github.com/nixwai/mortise-tenon/blob/main/packages/hooks/src/use-throttle-control/index.ts",target:"_blank",rel:"noreferrer"},"源代码")],-1))])}}});export{S as __pageData,H as default};
