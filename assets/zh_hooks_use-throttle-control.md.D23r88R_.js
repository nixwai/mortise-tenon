import{a as y}from"./chunks/index.B74Jq58F.js";import{p as f,S as _,d as k,o as b,c as v,j as r,t as p,N as T,k as s,F as B,a as h,G as a,w as d,B as D}from"./chunks/framework.BBOB-rHY.js";import{Q as C}from"./chunks/index.RthYUpRD.js";const x=`<script setup lang="ts">\r
import { useThrottleControl } from '@mortise-tenon/hooks';\r
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
  <button\r
    :style="{ color: throttling ? 'red' : 'green' }"\r
    class="btn"\r
    @click="handleClick()"\r
  >\r
    {{ num }}\r
  </button>\r
</template>\r
`;function g(c=200,n){const t=f(!1);let e;function i(){return o(),t.value=!0,e=setTimeout(()=>{o()},c),e}function o(l){(!l||l===e)&&(t.value=!1,e&&(clearTimeout(e),e=void 0))}function u(...l){if(!t.value)return i(),n==null?void 0:n(...l)}return y(o),{throttling:_(t),throttleFn:u,openThrottle:i,closeThrottle:o}}const N=k({__name:"use-status",setup(c){const n=f(0),{throttling:t,openThrottle:e,closeThrottle:i}=g(3e3);function o(){if(t.value)return;const l=e();u().finally(()=>{i(l)})}function u(){return new Promise(l=>{const m=n.value*1e3;setTimeout(()=>{n.value++,l()},m)})}return(l,m)=>(b(),v(B,null,[r("div",null,"当前请求所需时间："+p(n.value)+"秒",1),r("button",{style:T({color:s(t)?"red":"green"}),class:"btn",onClick:m[0]||(m[0]=U=>o())},p(n.value),5)],64))}}),w=`<script setup lang="ts">\r
import { useThrottleControl } from '@mortise-tenon/hooks';\r
import { ref } from 'vue';\r
\r
const num = ref(0);\r
\r
const { throttling, throttleFn: handleClick } = useThrottleControl(1000, () => num.value++);\r
<\/script>\r
\r
<template>\r
  <button\r
    :style="{ color: throttling ? 'red' : 'green' }"\r
    class="btn"\r
    @click="handleClick"\r
  >\r
    {{ num }}\r
  </button>\r
</template>\r
`,z=k({__name:"use-fn",setup(c){const n=f(0),{throttling:t,throttleFn:e}=g(1e3,()=>n.value++);return(i,o)=>(b(),v("button",{style:T({color:s(t)?"red":"green"}),class:"btn",onClick:o[0]||(o[0]=(...u)=>s(e)&&s(e)(...u))},p(n.value),5))}}),Z=JSON.parse('{"title":"useThrottleControl","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/use-throttle-control.md","filePath":"zh/hooks/use-throttle-control.md","lastUpdated":1733998443000}'),G={name:"zh/hooks/use-throttle-control.md"},L=Object.assign(G,{setup(c){return(n,t)=>{const e=D("ClientOnly");return b(),v("div",null,[t[0]||(t[0]=r("h1",{id:"usethrottlecontrol",tabindex:"-1"},[h("useThrottleControl "),r("a",{class:"header-anchor",href:"#usethrottlecontrol","aria-label":'Permalink to "useThrottleControl"'},"​")],-1)),t[1]||(t[1]=r("p",null,"节流控制。有效控制程序执行的间隔时间。",-1)),t[2]||(t[2]=r("h2",{id:"通过节流函数控制",tabindex:"-1"},[h("通过节流函数控制 "),r("a",{class:"header-anchor",href:"#通过节流函数控制","aria-label":'Permalink to "通过节流函数控制"'},"​")],-1)),a(e,null,{default:d(()=>[a(s(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(w)},{vue:d(()=>[a(z)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=r("h2",{id:"通过节流状态控制",tabindex:"-1"},[h("通过节流状态控制 "),r("a",{class:"header-anchor",href:"#通过节流状态控制","aria-label":'Permalink to "通过节流状态控制"'},"​")],-1)),a(e,null,{default:d(()=>[a(s(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(x)},{vue:d(()=>[a(N)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=r("h2",{id:"源码",tabindex:"-1"},[h("源码 "),r("a",{class:"header-anchor",href:"#源码","aria-label":'Permalink to "源码"'},"​")],-1)),t[5]||(t[5]=r("p",null,[r("a",{href:"https://github.com/nixwai/mortise-tenon/blob/main/packages/hooks/use-throttle-control/index.ts",target:"_blank",rel:"noreferrer"},"源代码")],-1))])}}});export{Z as __pageData,L as default};
