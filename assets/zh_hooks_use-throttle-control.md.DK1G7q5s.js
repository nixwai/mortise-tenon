const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/use-status.DBT2rXcs.js","assets/chunks/index.DQ9oZjO2.js","assets/chunks/framework.D6Nbw8HZ.js","assets/chunks/use-fn.99AnysQ_.js"])))=>i.map(i=>d[i]);
import{D as m,v as h,ae as c,p as _,C,c as k,o as w,j as t,af as v,G as l,a as r,ah as f,k as n,w as s,ai as b}from"./chunks/framework.D6Nbw8HZ.js";import{R as p,k as X}from"./chunks/index.DlEwPQCg.js";const T=`<script setup lang="ts">
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
`,N=`<script setup lang="ts">
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
`,y=JSON.parse('{"title":"useThrottleControl","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/use-throttle-control.md","filePath":"zh/hooks/use-throttle-control.md","lastUpdated":1741252669000}'),R={name:"zh/hooks/use-throttle-control.md"},D=Object.assign(R,{setup(L){const u=m();h(async()=>{u.value=(await c(async()=>{const{default:a}=await import("./chunks/use-status.DBT2rXcs.js");return{default:a}},__vite__mapDeps([0,1,2]))).default});const o=_(!0),i=m();return h(async()=>{i.value=(await c(async()=>{const{default:a}=await import("./chunks/use-fn.99AnysQ_.js");return{default:a}},__vite__mapDeps([3,1,2]))).default}),(a,e)=>{const d=C("ClientOnly");return w(),k("div",null,[e[2]||(e[2]=t("h1",{id:"usethrottlecontrol",tabindex:"-1"},[r("useThrottleControl "),t("a",{class:"header-anchor",href:"#usethrottlecontrol","aria-label":'Permalink to "useThrottleControl"'},"​")],-1)),e[3]||(e[3]=t("p",null,"节流控制。有效控制程序执行的间隔时间。",-1)),e[4]||(e[4]=t("h2",{id:"通过节流函数控制",tabindex:"-1"},[r("通过节流函数控制 "),t("a",{class:"header-anchor",href:"#通过节流函数控制","aria-label":'Permalink to "通过节流函数控制"'},"​")],-1)),v(l(n(p),null,null,512),[[f,o.value]]),l(d,null,{default:s(()=>[l(n(X),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:n(N)},b({_:2},[i.value?{name:"vue",fn:s(()=>[l(n(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[5]||(e[5]=t("h2",{id:"通过节流状态控制",tabindex:"-1"},[r("通过节流状态控制 "),t("a",{class:"header-anchor",href:"#通过节流状态控制","aria-label":'Permalink to "通过节流状态控制"'},"​")],-1)),v(l(n(p),null,null,512),[[f,o.value]]),l(d,null,{default:s(()=>[l(n(X),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:n(T)},b({_:2},[u.value?{name:"vue",fn:s(()=>[l(n(u))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"源码",tabindex:"-1"},[r("源码 "),t("a",{class:"header-anchor",href:"#源码","aria-label":'Permalink to "源码"'},"​")],-1)),e[7]||(e[7]=t("p",null,[t("a",{href:"https://github.com/nixwai/mortise-tenon/blob/main/packages/hooks/src/use-throttle-control/index.ts",target:"_blank",rel:"noreferrer"},"源代码")],-1))])}}});export{y as __pageData,D as default};
