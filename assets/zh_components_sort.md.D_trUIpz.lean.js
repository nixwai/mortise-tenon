import{d as c,p as h,o as d,c as v,a as u,j as t,G as s,w as i,F as a,C as m,t as k,e as w,k as l,a1 as B,a2 as _,_ as C,a0 as x,B as D}from"./chunks/framework.D6w4zQ8K.js";import{a as y}from"./chunks/index.Bb2XV9Ne.js";import{R as b}from"./chunks/index.CP7nzNwI.js";import"./chunks/index.5EWLbd1v.js";const G=`<script setup lang="ts">\r
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
`,S=["sort-key"];const Z=["sort-key"],N={"sort-key":7},V=c({__name:"demo2",setup(f){const o=h([2,7,9,6,4,3,1]);return(n,r)=>(d(),v(a,null,[r[6]||(r[6]=u(" 修改顺序为[2, 7, 9, 6, 4, 3, 1]，序号5、8不参与排序修改，隐藏序号7。 ")),r[7]||(r[7]=t("h6",null,"使用v-if隐藏元素",-1)),s(l(y),{"sort-list":o.value},{default:i(()=>[t("div",null,[(d(),v(a,null,m(5,e=>t("div",{key:e,"sort-key":e},k(e),9,S)),64))]),r[2]||(r[2]=t("div",{"sort-key":6}," 6 ",-1)),t("div",null,[w("",!0),r[0]||(r[0]=t("div",null," 8 ",-1)),r[1]||(r[1]=t("div",{"sort-key":9}," 9 ",-1))])]),_:1},8,["sort-list"]),r[8]||(r[8]=t("h6",null,"使用v-show隐藏元素",-1)),s(l(y),{"sort-list":o.value},{default:i(()=>[t("div",null,[(d(),v(a,null,m(5,e=>t("div",{key:e,"sort-key":e},k(e),9,Z)),64))]),r[5]||(r[5]=t("div",{"sort-key":6}," 6 ",-1)),t("div",null,[B(t("div",N," 7 ",512),[[_,!1]]),r[3]||(r[3]=t("div",null," 8 ",-1)),r[4]||(r[4]=t("div",{"sort-key":9}," 9 ",-1))])]),_:1},8,["sort-list"])],64))}}),j=C(V,[["__scopeId","data-v-27a956f7"]]),z=`<script setup lang="ts">\r
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
`,g=["sort-key"],A=c({__name:"demo1",setup(f){const o=h([2,7,9,6,4,3,1]);function n(){o.value=o.value.reverse()}return(r,e)=>(d(),v(a,null,[t("button",{onClick:n}," 点击 "),e[2]||(e[2]=t("br",null,null,-1)),s(l(y),{"sort-list":o.value},{default:i(()=>[t("div",null,[(d(),v(a,null,m(5,p=>t("div",{key:p,"sort-key":p},k(p),9,g)),64))]),e[0]||(e[0]=t("div",{"sort-key":6}," 6 ",-1)),e[1]||(e[1]=t("div",null,[t("div",{"sort-key":7}," 7 "),t("div",null," 8 "),t("div",{"sort-key":9}," 9 ")],-1))]),_:1},8,["sort-list"])],64))}}),M=C(A,[["__scopeId","data-v-73717d39"]]),L=JSON.parse('{"title":"Sort","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/sort.md","filePath":"zh/components/sort.md"}'),E={name:"zh/components/sort.md"},P=Object.assign(E,{setup(f){return(o,n)=>{const r=D("ClientOnly");return d(),v("div",null,[n[0]||(n[0]=t("h1",{id:"sort",tabindex:"-1"},[u("Sort "),t("a",{class:"header-anchor",href:"#sort","aria-label":'Permalink to "Sort"'},"​")],-1)),n[1]||(n[1]=t("p",null,"控制元素排列顺序，能够同时包含子级元素的排列顺序。",-1)),n[2]||(n[2]=t("h2",{id:"基础用法",tabindex:"-1"},[u("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s(r,null,{default:i(()=>[s(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(z)},{vue:i(()=>[s(M)]),_:1},8,["vueCode"])]),_:1}),n[3]||(n[3]=t("h2",{id:"v-if与v-show差异",tabindex:"-1"},[u("v-if与v-show差异 "),t("a",{class:"header-anchor",href:"#v-if与v-show差异","aria-label":'Permalink to "v-if与v-show差异"'},"​")],-1)),n[4]||(n[4]=t("p",null,"使用 v-if 会导致元素在 DOM 中被删除，而 v-show 则不会，因此使用 v-show 时会在保留位置基础上进行换位。 当存在有元素不参与排序时，便会存在一定的差异。",-1)),s(r,null,{default:i(()=>[s(l(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(G)},{vue:i(()=>[s(j)]),_:1},8,["vueCode"])]),_:1}),n[5]||(n[5]=x('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>sortList</td><td>排列顺序</td><td>(number|string)[]</td><td>[]</td></tr><tr><td>keyName</td><td>自定义节点排序属性的key名称</td><td>string</td><td>sort-key</td></tr></tbody></table>',2))])}}});export{L as __pageData,P as default};
