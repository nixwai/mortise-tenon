import{d as c,p as h,o as d,c as a,a as u,j as t,G as s,w as o,F as v,C as p,t as k,e as w,k as l,a1 as W,a2 as z,_ as C,a0 as N,B as L}from"./chunks/framework.CjGSnerP.js";import{a as f}from"./chunks/index.BC3tqwgD.js";import{Q as b}from"./chunks/index.CIoDUysR.js";import"./chunks/index.CJ0ffoLo.js";const B=`<script setup lang="ts">\r
import { MtSort } from '@mortise-tenon/components';\r
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
`,Q=["sort-key"];const S=["sort-key"],Z={"sort-key":7},_=c({__name:"if-show-diff",setup(y){const i=h([2,7,9,6,4,3,1]);return(e,r)=>(d(),a(v,null,[r[6]||(r[6]=u(" 修改顺序为[2, 7, 9, 6, 4, 3, 1]，序号5、8不参与排序修改，隐藏序号7。 ")),r[7]||(r[7]=t("h6",null,"使用v-if隐藏元素",-1)),s(l(f),{"sort-list":i.value},{default:o(()=>[t("div",null,[(d(),a(v,null,p(5,n=>t("div",{key:n,"sort-key":n},k(n),9,Q)),64))]),r[2]||(r[2]=t("div",{"sort-key":6}," 6 ",-1)),t("div",null,[w("",!0),r[0]||(r[0]=t("div",null," 8 ",-1)),r[1]||(r[1]=t("div",{"sort-key":9}," 9 ",-1))])]),_:1},8,["sort-list"]),r[8]||(r[8]=t("h6",null,"使用v-show隐藏元素",-1)),s(l(f),{"sort-list":i.value},{default:o(()=>[t("div",null,[(d(),a(v,null,p(5,n=>t("div",{key:n,"sort-key":n},k(n),9,S)),64))]),r[5]||(r[5]=t("div",{"sort-key":6}," 6 ",-1)),t("div",null,[W(t("div",Z," 7 ",512),[[z,!1]]),r[3]||(r[3]=t("div",null," 8 ",-1)),r[4]||(r[4]=t("div",{"sort-key":9}," 9 ",-1))])]),_:1},8,["sort-list"])],64))}}),V=C(_,[["__scopeId","data-v-810375aa"]]),x=`<script setup lang="ts">\r
import { MtSort } from '@mortise-tenon/components';\r
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
`,D=["sort-key"],G=c({__name:"base",setup(y){const i=h([2,7,9,6,4,3,1]);function e(){i.value=i.value.reverse()}return(r,n)=>(d(),a(v,null,[t("button",{onClick:e}," 点击 "),n[2]||(n[2]=t("br",null,null,-1)),s(l(f),{"sort-list":i.value},{default:o(()=>[t("div",null,[(d(),a(v,null,p(5,m=>t("div",{key:m,"sort-key":m},k(m),9,D)),64))]),n[0]||(n[0]=t("div",{"sort-key":6}," 6 ",-1)),n[1]||(n[1]=t("div",null,[t("div",{"sort-key":7}," 7 "),t("div",null," 8 "),t("div",{"sort-key":9}," 9 ")],-1))]),_:1},8,["sort-list"])],64))}}),g=C(G,[["__scopeId","data-v-98f753ac"]]),T=JSON.parse('{"title":"Sort","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/sort.md","filePath":"zh/components/sort.md","lastUpdated":1733998443000}'),j={name:"zh/components/sort.md"},q=Object.assign(j,{setup(y){return(i,e)=>{const r=L("ClientOnly");return d(),a("div",null,[e[0]||(e[0]=t("h1",{id:"sort",tabindex:"-1"},[u("Sort "),t("a",{class:"header-anchor",href:"#sort","aria-label":'Permalink to "Sort"'},"​")],-1)),e[1]||(e[1]=t("p",null,"控制元素排列顺序，能够同时包含子级元素的排列顺序。",-1)),e[2]||(e[2]=t("h2",{id:"基础用法",tabindex:"-1"},[u("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s(r,null,{default:o(()=>[s(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(x)},{vue:o(()=>[s(g)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=t("h2",{id:"v-if与v-show差异",tabindex:"-1"},[u("v-if与v-show差异 "),t("a",{class:"header-anchor",href:"#v-if与v-show差异","aria-label":'Permalink to "v-if与v-show差异"'},"​")],-1)),e[4]||(e[4]=t("p",null,"使用 v-if 会导致元素在 DOM 中被删除，而 v-show 则不会，因此使用 v-show 时会在保留位置基础上进行换位。 当存在有元素不参与排序时，便会存在一定的差异。",-1)),s(r,null,{default:o(()=>[s(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(B)},{vue:o(()=>[s(V)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=N('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>sortList</td><td>排列顺序</td><td>(number|string)[]</td><td>[]</td></tr><tr><td>keyName</td><td>自定义节点排序属性的key名称</td><td>string</td><td>sort-key</td></tr></tbody></table>',2))])}}});export{T as __pageData,q as default};
