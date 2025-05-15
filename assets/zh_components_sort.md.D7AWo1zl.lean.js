import{d as B,p as y,c as r,o as d,F as a,a as v,j as e,G as o,k as l,w as i,B as p,t as f,e as X,ae as h,ag as k,_ as g,C as w,af as D}from"./chunks/framework.D6wgcOBA.js";import{i as b}from"./chunks/index.BjJUhYrW.js";import{O as c,E as C}from"./chunks/index.CdgJ9okS.js";import"./chunks/index.CQfrTCPU.js";const M=`<script setup lang="ts">
import { MtSort } from 'mortise-tenon-design';
import { ref } from 'vue';

const list = ref([2, 7, 9, 6, 4, 3, 1]);
<\/script>

<template>
  修改顺序为[2, 7, 9, 6, 4, 3, 1]，序号5、8不参与排序修改，隐藏序号7。
  <h6>使用v-if隐藏元素</h6>
  <MtSort :sort-list="list">
    <div>
      <div v-for="i in 5" :key="i" :sort-key="i">
        {{ i }}
      </div>
    </div>
    <div :sort-key="6">
      6
    </div>
    <div>
      <div v-if="false" :sort-key="7">
        7
      </div>
      <div>
        8
      </div>
      <div :sort-key="9">
        9
      </div>
    </div>
  </MtSort>
  <h6>使用v-show隐藏元素</h6>
  <MtSort :sort-list="list">
    <div>
      <div v-for="i in 5" :key="i" :sort-key="i">
        {{ i }}
      </div>
    </div>
    <div :sort-key="6">
      6
    </div>
    <div>
      <div v-show="false" :sort-key="7">
        7
      </div>
      <div>
        8
      </div>
      <div :sort-key="9">
        9
      </div>
    </div>
  </MtSort>
</template>

<style scoped>
div {
  display: inline-block;
}
</style>
`,S=["sort-key"];const T=["sort-key"],x={"sort-key":7},L=B({__name:"if-show-diff",setup(_){const s=y([2,7,9,6,4,3,1]);return(u,t)=>(d(),r(a,null,[t[6]||(t[6]=v(" 修改顺序为[2, 7, 9, 6, 4, 3, 1]，序号5、8不参与排序修改，隐藏序号7。 ")),t[7]||(t[7]=e("h6",null,"使用v-if隐藏元素",-1)),o(l(b),{"sort-list":s.value},{default:i(()=>[e("div",null,[(d(),r(a,null,p(5,n=>e("div",{key:n,"sort-key":n},f(n),9,S)),64))]),t[2]||(t[2]=e("div",{"sort-key":6}," 6 ",-1)),e("div",null,[X("",!0),t[0]||(t[0]=e("div",null," 8 ",-1)),t[1]||(t[1]=e("div",{"sort-key":9}," 9 ",-1))])]),_:1,__:[2]},8,["sort-list"]),t[8]||(t[8]=e("h6",null,"使用v-show隐藏元素",-1)),o(l(b),{"sort-list":s.value},{default:i(()=>[e("div",null,[(d(),r(a,null,p(5,n=>e("div",{key:n,"sort-key":n},f(n),9,T)),64))]),t[5]||(t[5]=e("div",{"sort-key":6}," 6 ",-1)),e("div",null,[h(e("div",x," 7 ",512),[[k,!1]]),t[3]||(t[3]=e("div",null," 8 ",-1)),t[4]||(t[4]=e("div",{"sort-key":9}," 9 ",-1))])]),_:1,__:[5]},8,["sort-list"])],64))}}),Z=g(L,[["__scopeId","data-v-c6786919"]]),A=`<script setup lang="ts">
import { MtSort } from 'mortise-tenon-design';
import { ref } from 'vue';

const list = ref([2, 7, 9, 6, 4, 3, 1]);

function handleClick() {
  list.value = list.value.reverse();
}
<\/script>

<template>
  <button @click="handleClick">
    点击
  </button>
  <br>
  <MtSort :sort-list="list">
    <div>
      <div v-for="i in 5" :key="i" :sort-key="i">
        {{ i }}
      </div>
    </div>
    <div :sort-key="6">
      6
    </div>
    <div>
      <div :sort-key="7">
        7
      </div>
      <div>
        8
      </div>
      <div :sort-key="9">
        9
      </div>
    </div>
  </MtSort>
</template>

<style scoped>
div {
  display: inline-block;
}
</style>
`,J=["sort-key"],N=B({__name:"base",setup(_){const s=y([2,7,9,6,4,3,1]);function u(){s.value=s.value.reverse()}return(t,n)=>(d(),r(a,null,[e("button",{onClick:u}," 点击 "),n[2]||(n[2]=e("br",null,null,-1)),o(l(b),{"sort-list":s.value},{default:i(()=>[e("div",null,[(d(),r(a,null,p(5,m=>e("div",{key:m,"sort-key":m},f(m),9,J)),64))]),n[0]||(n[0]=e("div",{"sort-key":6}," 6 ",-1)),n[1]||(n[1]=e("div",null,[e("div",{"sort-key":7}," 7 "),e("div",null," 8 "),e("div",{"sort-key":9}," 9 ")],-1))]),_:1,__:[0,1]},8,["sort-list"])],64))}}),V=g(N,[["__scopeId","data-v-fdf549f3"]]),R=JSON.parse('{"title":"Sort","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/sort.md","filePath":"zh/components/sort.md","lastUpdated":1741252669000}'),W={name:"zh/components/sort.md"},Y=Object.assign(W,{setup(_){const s=y(!0);return(u,t)=>{const n=w("ClientOnly");return d(),r("div",null,[t[2]||(t[2]=e("h1",{id:"sort",tabindex:"-1"},[v("Sort "),e("a",{class:"header-anchor",href:"#sort","aria-label":'Permalink to "Sort"'},"​")],-1)),t[3]||(t[3]=e("p",null,"控制元素排列顺序，能够同时包含子级元素的排列顺序。",-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[v("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),h(o(l(c),null,null,512),[[k,s.value]]),o(n,null,{default:i(()=>[o(l(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:l(A)},{vue:i(()=>[o(V)]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=e("h2",{id:"v-if与v-show差异",tabindex:"-1"},[v("v-if与v-show差异 "),e("a",{class:"header-anchor",href:"#v-if与v-show差异","aria-label":'Permalink to "v-if与v-show差异"'},"​")],-1)),t[6]||(t[6]=e("p",null,"使用 v-if 会导致元素在 DOM 中被删除，而 v-show 则不会，因此使用 v-show 时会在保留位置基础上进行换位。 当存在有元素不参与排序时，便会存在一定的差异。",-1)),h(o(l(c),null,null,512),[[k,s.value]]),o(n,null,{default:i(()=>[o(l(C),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:l(M)},{vue:i(()=>[o(Z)]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=D("",4))])}}});export{R as __pageData,Y as default};
