const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/base.unrRNyfc.js","assets/chunks/index.BOEbCvfa.js","assets/chunks/framework.D6Nbw8HZ.js","assets/chunks/index.BYQncKqd.js"])))=>i.map(i=>d[i]);
import{p as u,D as p,v as m,ae as h,C as c,c as b,o as _,j as e,af as f,G as a,ag as v,a as d,ah as x,k as n,w as s,ai as g}from"./chunks/framework.D6Nbw8HZ.js";import{R as k,k as B}from"./chunks/index.DlEwPQCg.js";const C=`<script lang="ts" setup>
import { MtExpand } from 'mortise-tenon-design';
import { ref } from 'vue';

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
<\/script>

<template>
  <button @click="toggle">
    点击
  </button>
  <MtExpand :open="open">
    展开后内容
  </MtExpand>
</template>
`,D=JSON.parse('{"title":"Expand","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/expand.md","filePath":"zh/components/expand.md","lastUpdated":1741252669000}'),E={name:"zh/components/expand.md"},A=Object.assign(E,{setup(T){const l=u(!0),o=p();return m(async()=>{o.value=(await h(async()=>{const{default:r}=await import("./chunks/base.unrRNyfc.js");return{default:r}},__vite__mapDeps([0,1,2,3]))).default}),(r,t)=>{const i=c("ClientOnly");return _(),b("div",null,[t[1]||(t[1]=e("h1",{id:"expand",tabindex:"-1"},[d("Expand "),e("a",{class:"header-anchor",href:"#expand","aria-label":'Permalink to "Expand"'},"​")],-1)),t[2]||(t[2]=e("p",null,"控制内容的展开/收起",-1)),t[3]||(t[3]=e("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),f(a(n(k),null,null,512),[[x,l.value]]),a(i,null,{default:s(()=>[a(n(B),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:n(C)},g({_:2},[o.value?{name:"vue",fn:s(()=>[a(n(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=v('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open</td><td>是否展开</td><td>boolean</td><td>true</td></tr><tr><td>targetRange</td><td>收起时的范围大小(px)</td><td>number</td><td>0</td></tr><tr><td>transitionTime</td><td>动画过渡时间(ms)</td><td>number</td><td>200</td></tr></tbody></table><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p><a href="https://github.com/nixwai/mortise-tenon/blob/main/packages/components/src/expand/src/expand.vue" target="_blank" rel="noreferrer">源代码</a></p>',4))])}}});export{D as __pageData,A as default};
