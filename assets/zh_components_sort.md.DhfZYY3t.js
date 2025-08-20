const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/if-show-diff.CjTwpQsP.js","assets/chunks/framework.D6Nbw8HZ.js","assets/chunks/index.BOEbCvfa.js","assets/chunks/index.BYQncKqd.js","assets/chunks/base.DUamZxIp.js"])))=>i.map(i=>d[i]);
import{D as u,v as h,ae as m,p as _,C as k,c as w,o as C,j as e,af as c,G as n,ag as X,a as d,ah as f,k as a,w as s,ai as p}from"./chunks/framework.D6Nbw8HZ.js";import{R as b,k as y}from"./chunks/index.DlEwPQCg.js";const B=`<script setup lang="ts">
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
`,D=`<script setup lang="ts">
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
`,A=JSON.parse('{"title":"Sort","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/sort.md","filePath":"zh/components/sort.md","lastUpdated":1741252669000}'),g={name:"zh/components/sort.md"},L=Object.assign(g,{setup(M){const l=u();h(async()=>{l.value=(await m(async()=>{const{default:o}=await import("./chunks/if-show-diff.CjTwpQsP.js");return{default:o}},__vite__mapDeps([0,1,2,3]))).default});const i=_(!0),r=u();return h(async()=>{r.value=(await m(async()=>{const{default:o}=await import("./chunks/base.DUamZxIp.js");return{default:o}},__vite__mapDeps([4,2,1,3]))).default}),(o,t)=>{const v=k("ClientOnly");return C(),w("div",null,[t[2]||(t[2]=e("h1",{id:"sort",tabindex:"-1"},[d("Sort "),e("a",{class:"header-anchor",href:"#sort","aria-label":'Permalink to "Sort"'},"​")],-1)),t[3]||(t[3]=e("p",null,"控制元素排列顺序，能够同时包含子级元素的排列顺序。",-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),c(n(a(b),null,null,512),[[f,i.value]]),n(v,null,{default:s(()=>[n(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:a(D)},p({_:2},[r.value?{name:"vue",fn:s(()=>[n(a(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=e("h2",{id:"v-if与v-show差异",tabindex:"-1"},[d("v-if与v-show差异 "),e("a",{class:"header-anchor",href:"#v-if与v-show差异","aria-label":'Permalink to "v-if与v-show差异"'},"​")],-1)),t[6]||(t[6]=e("p",null,"使用 v-if 会导致元素在 DOM 中被删除，而 v-show 则不会，因此使用 v-show 时会在保留位置基础上进行换位。 当存在有元素不参与排序时，便会存在一定的差异。",-1)),c(n(a(b),null,null,512),[[f,i.value]]),n(v,null,{default:s(()=>[n(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:t[1]||(t[1]=()=>{i.value=!1}),vueCode:a(B)},p({_:2},[l.value?{name:"vue",fn:s(()=>[n(a(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=X('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>sortList</td><td>排列顺序</td><td>(number|string)[]</td><td>[]</td></tr><tr><td>keyName</td><td>自定义节点排序属性的key名称</td><td>string</td><td>sort-key</td></tr></tbody></table><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p><a href="https://github.com/nixwai/mortise-tenon/blob/main/packages/components/src/sort/src/sort.ts" target="_blank" rel="noreferrer">源代码</a></p>',4))])}}});export{A as __pageData,L as default};
