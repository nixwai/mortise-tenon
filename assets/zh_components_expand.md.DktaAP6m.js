import{d as c,p as i,c as p,o as u,F as h,j as a,G as n,k as o,w as l,a as d,C as f,ae as b,ah as _,ai as x}from"./chunks/framework.BSVvnydI.js";import{m as v}from"./chunks/index.Bnuvy5Be.js";import{d as g,f as C}from"./chunks/index.CF5C30ZV.js";import"./chunks/index.CU7lAU4_.js";const k=`<script lang="ts" setup>\r
import { MtExpand } from 'mortise-tenon-design';\r
import { ref } from 'vue';\r
\r
const open = ref(false);\r
\r
function toggle() {\r
  open.value = !open.value;\r
}\r
<\/script>\r
\r
<template>\r
  <button @click="toggle">\r
    点击\r
  </button>\r
  <MtExpand :open="open">\r
    展开后内容\r
  </MtExpand>\r
</template>\r
`,T=c({__name:"base",setup(m){const t=i(!1);function s(){t.value=!t.value}return(e,r)=>(u(),p(h,null,[a("button",{onClick:s}," 点击 "),n(o(v),{open:t.value},{default:l(()=>r[0]||(r[0]=[d(" 展开后内容 ")])),_:1},8,["open"])],64))}}),y=JSON.parse('{"title":"Expand","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/expand.md","filePath":"zh/components/expand.md","lastUpdated":1741252669000}'),B={name:"zh/components/expand.md"},E=Object.assign(B,{setup(m){const t=i(!0);return(s,e)=>{const r=f("ClientOnly");return u(),p("div",null,[e[1]||(e[1]=a("h1",{id:"expand",tabindex:"-1"},[d("Expand "),a("a",{class:"header-anchor",href:"#expand","aria-label":'Permalink to "Expand"'},"​")],-1)),e[2]||(e[2]=a("p",null,"控制内容的展开/收起",-1)),e[3]||(e[3]=a("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),b(n(o(g),null,null,512),[[x,t.value]]),n(r,null,{default:l(()=>[n(o(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:o(k)},{vue:l(()=>[n(T)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=_('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open</td><td>是否展开</td><td>boolean</td><td>true</td></tr><tr><td>targetRange</td><td>收起时的范围大小(px)</td><td>number</td><td>0</td></tr><tr><td>transitionTime</td><td>动画过渡时间(ms)</td><td>number</td><td>200</td></tr></tbody></table><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p><a href="https://github.com/nixwai/mortise-tenon/blob/main/packages/components/src/expand/src/expand.vue" target="_blank" rel="noreferrer">源代码</a></p>',4))])}}});export{y as __pageData,E as default};
