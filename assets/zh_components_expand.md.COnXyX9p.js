import{d as h,p as i,c as p,o as u,F as c,j as a,G as n,k as r,w as l,a as s,C as b,ae as f,af as _,ag as x}from"./chunks/framework.D6wgcOBA.js";import{m as v}from"./chunks/index.BjJUhYrW.js";import{O as g,E as C}from"./chunks/index.CdgJ9okS.js";import"./chunks/index.CQfrTCPU.js";const k=`<script lang="ts" setup>
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
`,B=h({__name:"base",setup(m){const t=i(!1);function d(){t.value=!t.value}return(e,o)=>(u(),p(c,null,[a("button",{onClick:d}," 点击 "),n(r(v),{open:t.value},{default:l(()=>o[0]||(o[0]=[s(" 展开后内容 ")])),_:1,__:[0]},8,["open"])],64))}}),P=JSON.parse('{"title":"Expand","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/expand.md","filePath":"zh/components/expand.md","lastUpdated":1741252669000}'),E={name:"zh/components/expand.md"},V=Object.assign(E,{setup(m){const t=i(!0);return(d,e)=>{const o=b("ClientOnly");return u(),p("div",null,[e[1]||(e[1]=a("h1",{id:"expand",tabindex:"-1"},[s("Expand "),a("a",{class:"header-anchor",href:"#expand","aria-label":'Permalink to "Expand"'},"​")],-1)),e[2]||(e[2]=a("p",null,"控制内容的展开/收起",-1)),e[3]||(e[3]=a("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),f(n(r(g),null,null,512),[[x,t.value]]),n(o,null,{default:l(()=>[n(r(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:r(k)},{vue:l(()=>[n(B)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=_('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open</td><td>是否展开</td><td>boolean</td><td>true</td></tr><tr><td>targetRange</td><td>收起时的范围大小(px)</td><td>number</td><td>0</td></tr><tr><td>transitionTime</td><td>动画过渡时间(ms)</td><td>number</td><td>200</td></tr></tbody></table><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p><a href="https://github.com/nixwai/mortise-tenon/blob/main/packages/components/src/expand/src/expand.vue" target="_blank" rel="noreferrer">源代码</a></p>',4))])}}});export{P as __pageData,V as default};
