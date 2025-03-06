import{d as w,p as b,c as l,o as d,F as a,a as v,j as r,G as s,k as o,w as i,B as p,t as f,e as B,ae as k,ai as y,_ as x,C as g,ah as D}from"./chunks/framework.BSVvnydI.js";import{i as h}from"./chunks/index.Bnuvy5Be.js";import{d as _,f as C}from"./chunks/index.CF5C30ZV.js";import"./chunks/index.CU7lAU4_.js";const S=`<script setup lang="ts">\r
import { MtSort } from 'mortise-tenon-design';\r
import { ref } from 'vue';\r
\r
const list = ref([2, 7, 9, 6, 4, 3, 1]);\r
<\/script>\r
\r
<template>\r
  修改顺序为[2, 7, 9, 6, 4, 3, 1]，序号5、8不参与排序修改，隐藏序号7。\r
  <h6>使用v-if隐藏元素</h6>\r
  <MtSort :sort-list="list">\r
    <div>\r
      <div v-for="i in 5" :key="i" :sort-key="i">\r
        {{ i }}\r
      </div>\r
    </div>\r
    <div :sort-key="6">\r
      6\r
    </div>\r
    <div>\r
      <div v-if="false" :sort-key="7">\r
        7\r
      </div>\r
      <div>\r
        8\r
      </div>\r
      <div :sort-key="9">\r
        9\r
      </div>\r
    </div>\r
  </MtSort>\r
  <h6>使用v-show隐藏元素</h6>\r
  <MtSort :sort-list="list">\r
    <div>\r
      <div v-for="i in 5" :key="i" :sort-key="i">\r
        {{ i }}\r
      </div>\r
    </div>\r
    <div :sort-key="6">\r
      6\r
    </div>\r
    <div>\r
      <div v-show="false" :sort-key="7">\r
        7\r
      </div>\r
      <div>\r
        8\r
      </div>\r
      <div :sort-key="9">\r
        9\r
      </div>\r
    </div>\r
  </MtSort>\r
</template>\r
\r
<style scoped>\r
div {\r
  display: inline-block;\r
}\r
</style>\r
`,T=["sort-key"];const N=["sort-key"],Z={"sort-key":7},A=w({__name:"if-show-diff",setup(c){const n=b([2,7,9,6,4,3,1]);return(u,t)=>(d(),l(a,null,[t[6]||(t[6]=v(" 修改顺序为[2, 7, 9, 6, 4, 3, 1]，序号5、8不参与排序修改，隐藏序号7。 ")),t[7]||(t[7]=r("h6",null,"使用v-if隐藏元素",-1)),s(o(h),{"sort-list":n.value},{default:i(()=>[r("div",null,[(d(),l(a,null,p(5,e=>r("div",{key:e,"sort-key":e},f(e),9,T)),64))]),t[2]||(t[2]=r("div",{"sort-key":6}," 6 ",-1)),r("div",null,[B("",!0),t[0]||(t[0]=r("div",null," 8 ",-1)),t[1]||(t[1]=r("div",{"sort-key":9}," 9 ",-1))])]),_:1},8,["sort-list"]),t[8]||(t[8]=r("h6",null,"使用v-show隐藏元素",-1)),s(o(h),{"sort-list":n.value},{default:i(()=>[r("div",null,[(d(),l(a,null,p(5,e=>r("div",{key:e,"sort-key":e},f(e),9,N)),64))]),t[5]||(t[5]=r("div",{"sort-key":6}," 6 ",-1)),r("div",null,[k(r("div",Z," 7 ",512),[[y,!1]]),t[3]||(t[3]=r("div",null," 8 ",-1)),t[4]||(t[4]=r("div",{"sort-key":9}," 9 ",-1))])]),_:1},8,["sort-list"])],64))}}),j=x(A,[["__scopeId","data-v-dcaa65c2"]]),G=`<script setup lang="ts">\r
import { MtSort } from 'mortise-tenon-design';\r
import { ref } from 'vue';\r
\r
const list = ref([2, 7, 9, 6, 4, 3, 1]);\r
\r
function handleClick() {\r
  list.value = list.value.reverse();\r
}\r
<\/script>\r
\r
<template>\r
  <button @click="handleClick">\r
    点击\r
  </button>\r
  <br>\r
  <MtSort :sort-list="list">\r
    <div>\r
      <div v-for="i in 5" :key="i" :sort-key="i">\r
        {{ i }}\r
      </div>\r
    </div>\r
    <div :sort-key="6">\r
      6\r
    </div>\r
    <div>\r
      <div :sort-key="7">\r
        7\r
      </div>\r
      <div>\r
        8\r
      </div>\r
      <div :sort-key="9">\r
        9\r
      </div>\r
    </div>\r
  </MtSort>\r
</template>\r
\r
<style scoped>\r
div {\r
  display: inline-block;\r
}\r
</style>\r
`,V=["sort-key"],z=w({__name:"base",setup(c){const n=b([2,7,9,6,4,3,1]);function u(){n.value=n.value.reverse()}return(t,e)=>(d(),l(a,null,[r("button",{onClick:u}," 点击 "),e[2]||(e[2]=r("br",null,null,-1)),s(o(h),{"sort-list":n.value},{default:i(()=>[r("div",null,[(d(),l(a,null,p(5,m=>r("div",{key:m,"sort-key":m},f(m),9,V)),64))]),e[0]||(e[0]=r("div",{"sort-key":6}," 6 ",-1)),e[1]||(e[1]=r("div",null,[r("div",{"sort-key":7}," 7 "),r("div",null," 8 "),r("div",{"sort-key":9}," 9 ")],-1))]),_:1},8,["sort-list"])],64))}}),M=x(z,[["__scopeId","data-v-1c603fe2"]]),L=JSON.parse('{"title":"Sort","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/sort.md","filePath":"zh/components/sort.md","lastUpdated":1741252669000}'),P={name:"zh/components/sort.md"},Q=Object.assign(P,{setup(c){const n=b(!0);return(u,t)=>{const e=g("ClientOnly");return d(),l("div",null,[t[2]||(t[2]=r("h1",{id:"sort",tabindex:"-1"},[v("Sort "),r("a",{class:"header-anchor",href:"#sort","aria-label":'Permalink to "Sort"'},"​")],-1)),t[3]||(t[3]=r("p",null,"控制元素排列顺序，能够同时包含子级元素的排列顺序。",-1)),t[4]||(t[4]=r("h2",{id:"基础用法",tabindex:"-1"},[v("基础用法 "),r("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),k(s(o(_),null,null,512),[[y,n.value]]),s(e,null,{default:i(()=>[s(o(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:o(G)},{vue:i(()=>[s(M)]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=r("h2",{id:"v-if与v-show差异",tabindex:"-1"},[v("v-if与v-show差异 "),r("a",{class:"header-anchor",href:"#v-if与v-show差异","aria-label":'Permalink to "v-if与v-show差异"'},"​")],-1)),t[6]||(t[6]=r("p",null,"使用 v-if 会导致元素在 DOM 中被删除，而 v-show 则不会，因此使用 v-show 时会在保留位置基础上进行换位。 当存在有元素不参与排序时，便会存在一定的差异。",-1)),k(s(o(_),null,null,512),[[y,n.value]]),s(e,null,{default:i(()=>[s(o(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:o(S)},{vue:i(()=>[s(j)]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=D("",4))])}}});export{L as __pageData,Q as default};
