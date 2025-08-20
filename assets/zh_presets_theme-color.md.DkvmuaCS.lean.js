const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/dynamic-theme.552ZNhXB.js","assets/chunks/framework.D6Nbw8HZ.js","assets/chunks/more-scene.CUGPM_oH.js"])))=>i.map(i=>d[i]);
import{D as o,v as d,ae as E,p as v,C as b,c as F,o as f,ag as C,af as c,G as i,j as n,ah as g,k as a,w as l,ai as y,a as k}from"./chunks/framework.D6Nbw8HZ.js";import{R as u,k as m}from"./chunks/index.DlEwPQCg.js";const _=`<script setup lang="ts">
import { updateThemeColor } from 'mortise-tenon-preset/helper';
import { ref } from 'vue';

const demo = ref<HTMLElement>();
function setTheme(color: string) {
  updateThemeColor({ name: 'primary', color, dom: demo.value });
}
<\/script>

<template>
  <div class="flex">
    <div>点击切换：</div>
    <button class="c-blue mx-1" @click="setTheme('blue')">
      蓝色
    </button>
    <button class="c-green" @click="setTheme('green')">
      绿色
    </button>
  </div>
  <div ref="demo" class="flex items-center">
    <button class="btn btn-deep mr-2">
      按钮
    </button>
  </div>
</template>
`,B=`<template>
  <div class="c-primary">
    默认主题
  </div>
  <div class="c-warning">
    警告
  </div>
  <div class="c-danger">
    危险
  </div>
</template>
`,X=JSON.parse('{"title":"主题颜色","description":"","frontmatter":{},"headers":[],"relativePath":"zh/presets/theme-color.md","filePath":"zh/presets/theme-color.md","lastUpdated":1740739063000}'),D={name:"zh/presets/theme-color.md"},V=Object.assign(D,{setup(A){const h=o();d(async()=>{h.value=(await E(async()=>{const{default:t}=await import("./chunks/dynamic-theme.552ZNhXB.js");return{default:t}},__vite__mapDeps([0,1]))).default});const e=v(!0),p=o();return d(async()=>{p.value=(await E(async()=>{const{default:t}=await import("./chunks/more-scene.CUGPM_oH.js");return{default:t}},__vite__mapDeps([2,1]))).default}),(t,s)=>{const r=b("ClientOnly");return f(),F("div",null,[s[2]||(s[2]=C("",9)),c(i(a(u),null,null,512),[[g,e.value]]),i(r,null,{default:l(()=>[i(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:a(B)},y({_:2},[p.value?{name:"vue",fn:l(()=>[i(a(p))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[3]||(s[3]=n("h4",{id:"updatethemecolor",tabindex:"-1"},[k("updateThemeColor "),n("a",{class:"header-anchor",href:"#updatethemecolor","aria-label":'Permalink to "updateThemeColor"'},"​")],-1)),s[4]||(s[4]=n("p",null,[k("dom来指定覆盖的范围，传入"),n("code",null,"document.documentElement"),k("时即可覆盖整个页面的颜色。")],-1)),c(i(a(u),null,null,512),[[g,e.value]]),i(r,null,{default:l(()=>[i(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[1]||(s[1]=()=>{e.value=!1}),vueCode:a(_)},y({_:2},[h.value?{name:"vue",fn:l(()=>[i(a(h))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{X as __pageData,V as default};
