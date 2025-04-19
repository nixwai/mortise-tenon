import{p,S as X,au as y,d as _,c as f,o as b,F as N,j as n,t as v,N as B,k as o,C as w,ag as C,G as u,a as d,an as g,w as h}from"./chunks/framework.BqQ-1jS-.js";import{O as k,E as T}from"./chunks/index.Wxu1pIBX.js";const x=`<script setup lang="ts">
import { useThrottleControl } from 'mortise-tenon-use';
import { ref } from 'vue';

const num = ref(0);

const {
  throttling,
  openThrottle,
  closeThrottle,
} = useThrottleControl(3000);

/** 当请求等待超过3s或者请求结束时会结束节流 */
function handleClick() {
  if (throttling.value) {
    return;
  }
  const timer = openThrottle();
  addNum().finally(() => {
    closeThrottle(timer); // 请求结束时关闭节流
  });
}

/** 模拟远程请求 */
function addNum() {
  return new Promise<void>((resolve) => {
    const sm = num.value * 1000;
    setTimeout(() => {
      num.value++;
      resolve();
    }, sm);
  });
}
<\/script>

<template>
  <div>当前请求所需时间：{{ num }}秒</div>
  <button :style="{ color: throttling ? 'red' : 'green' }" class="btn" @click="handleClick()">
    {{ num }}
  </button>
</template>
`;function D(m=200,t){const l=p(!1);let e;function a(){return r(),l.value=!0,e=setTimeout(()=>{r()},m),e}function r(s){(!s||s===e)&&(l.value=!1,e&&(clearTimeout(e),e=void 0))}function i(...s){if(!l.value)return a(),t==null?void 0:t(...s)}return y(r),{throttling:X(l),throttleFn:i,openThrottle:a,closeThrottle:r}}const A=_({__name:"use-status",setup(m){const t=p(0),{throttling:l,openThrottle:e,closeThrottle:a}=D(3e3);function r(){if(l.value)return;const s=e();i().finally(()=>{a(s)})}function i(){return new Promise(s=>{const c=t.value*1e3;setTimeout(()=>{t.value++,s()},c)})}return(s,c)=>(b(),f(N,null,[n("div",null,"当前请求所需时间："+v(t.value)+"秒",1),n("button",{style:B({color:o(l)?"red":"green"}),class:"btn",onClick:c[0]||(c[0]=P=>r())},v(t.value),5)],64))}}),L=`<script setup lang="ts">
import { useThrottleControl } from 'mortise-tenon-use';
import { ref } from 'vue';

const num = ref(0);

const { throttling, throttleFn: handleClick } = useThrottleControl(1000, () => num.value++);
<\/script>

<template>
  <button :style="{ color: throttling ? 'red' : 'green' }" class="btn" @click="handleClick">
    {{ num }}
  </button>
</template>
`,R=_({__name:"use-fn",setup(m){const t=p(0),{throttling:l,throttleFn:e}=D(1e3,()=>t.value++);return(a,r)=>(b(),f("button",{style:B({color:o(l)?"red":"green"}),class:"btn",onClick:r[0]||(r[0]=(...i)=>o(e)&&o(e)(...i))},v(t.value),5))}}),z=JSON.parse('{"title":"useThrottleControl","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/use-throttle-control.md","filePath":"zh/hooks/use-throttle-control.md","lastUpdated":1741252669000}'),M={name:"zh/hooks/use-throttle-control.md"},S=Object.assign(M,{setup(m){const t=p(!0);return(l,e)=>{const a=w("ClientOnly");return b(),f("div",null,[e[2]||(e[2]=n("h1",{id:"usethrottlecontrol",tabindex:"-1"},[d("useThrottleControl "),n("a",{class:"header-anchor",href:"#usethrottlecontrol","aria-label":'Permalink to "useThrottleControl"'},"​")],-1)),e[3]||(e[3]=n("p",null,"节流控制。有效控制程序执行的间隔时间。",-1)),e[4]||(e[4]=n("h2",{id:"通过节流函数控制",tabindex:"-1"},[d("通过节流函数控制 "),n("a",{class:"header-anchor",href:"#通过节流函数控制","aria-label":'Permalink to "通过节流函数控制"'},"​")],-1)),C(u(o(k),null,null,512),[[g,t.value]]),u(a,null,{default:h(()=>[u(o(T),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:o(L)},{vue:h(()=>[u(R)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=n("h2",{id:"通过节流状态控制",tabindex:"-1"},[d("通过节流状态控制 "),n("a",{class:"header-anchor",href:"#通过节流状态控制","aria-label":'Permalink to "通过节流状态控制"'},"​")],-1)),C(u(o(k),null,null,512),[[g,t.value]]),u(a,null,{default:h(()=>[u(o(T),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:o(x)},{vue:h(()=>[u(A)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=n("h2",{id:"源码",tabindex:"-1"},[d("源码 "),n("a",{class:"header-anchor",href:"#源码","aria-label":'Permalink to "源码"'},"​")],-1)),e[7]||(e[7]=n("p",null,[n("a",{href:"https://github.com/nixwai/mortise-tenon/blob/main/packages/hooks/src/use-throttle-control/index.ts",target:"_blank",rel:"noreferrer"},"源代码")],-1))])}}});export{z as __pageData,S as default};
