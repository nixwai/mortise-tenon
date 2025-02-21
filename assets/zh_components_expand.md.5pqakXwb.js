import{a as u}from"./chunks/index.C7Dumq_T.js";import{d as c,p as h,c as p,o as i,F as b,j as e,G as a,k as r,w as o,a as d,C as f,ag as _}from"./chunks/framework.cvzX9Zjb.js";import{Q as x}from"./chunks/index.DHUEn3aV.js";const C=`<script lang="ts" setup>\r
import { MtExpand } from '@mortise-tenon/components';\r
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
`,v=c({__name:"base",setup(m){const n=h(!1);function t(){n.value=!n.value}return(l,s)=>(i(),p(b,null,[e("button",{onClick:t}," 点击 "),a(r(u),{open:n.value},{default:o(()=>s[0]||(s[0]=[d(" 展开后内容 ")])),_:1},8,["open"])],64))}}),B=JSON.parse('{"title":"Expand","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/expand.md","filePath":"zh/components/expand.md","lastUpdated":1733998443000}'),g={name:"zh/components/expand.md"},E=Object.assign(g,{setup(m){return(n,t)=>{const l=f("ClientOnly");return i(),p("div",null,[t[0]||(t[0]=e("h1",{id:"expand",tabindex:"-1"},[d("Expand "),e("a",{class:"header-anchor",href:"#expand","aria-label":'Permalink to "Expand"'},"​")],-1)),t[1]||(t[1]=e("p",null,"控制内容的展开/收起",-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),a(l,null,{default:o(()=>[a(r(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(C)},{vue:o(()=>[a(v)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=_('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open</td><td>是否展开</td><td>boolean</td><td>true</td></tr><tr><td>targetRange</td><td>收起时的范围大小(px)</td><td>number</td><td>0</td></tr><tr><td>transitionTime</td><td>动画过渡时间(ms)</td><td>number</td><td>200</td></tr></tbody></table>',2))])}}});export{B as __pageData,E as default};
