const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/direction.CZU85TXi.js","assets/chunks/framework.D6Nbw8HZ.js","assets/chunks/index.BOEbCvfa.js","assets/chunks/index.BYQncKqd.js","assets/chunks/base.DdPFT_fU.js"])))=>i.map(i=>d[i]);
import{D as u,v as p,ae as c,p as g,C as x,c as y,o as k,j as n,af as f,G as t,ag as w,a as d,ah as b,k as r,w as s,ai as h}from"./chunks/framework.D6Nbw8HZ.js";import{R as v,k as _}from"./chunks/index.DlEwPQCg.js";const R=`<script setup lang="ts">\r
import { MtResize } from 'mortise-tenon-design';\r
import { ref } from 'vue';\r
\r
const lockAspectRatio = ref(false);\r
const offset = ref<'position' | 'transform' | 'translate'>('position');\r
const grid = ref([0.5, 0.5]);\r
<\/script>\r
\r
<template>\r
  <div class="flex gap-1 mt-4">\r
    <div>\r
      <input\r
        id="unlock"\r
        v-model="lockAspectRatio"\r
        type="radio"\r
        name="lockAspectRatio"\r
        :value="false"\r
        class="mb-[3px]"\r
      >\r
      <label for="unlock">unlock</label>\r
    </div>\r
    <div>\r
      <input\r
        id="lock"\r
        v-model="lockAspectRatio"\r
        type="radio"\r
        name="lockAspectRatio"\r
        :value="true"\r
        class="mb-[3px]"\r
      >\r
      <label for="lock">lock</label>\r
    </div>\r
  </div>\r
\r
  <div class="flex gap-1 mt-4">\r
    <div>\r
      <input\r
        id="position"\r
        v-model="offset"\r
        type="radio"\r
        name="offset"\r
        value="position"\r
        class="mb-[3px]"\r
      >\r
      <label for="position">position</label>\r
    </div>\r
    <div>\r
      <input\r
        id="transform"\r
        v-model="offset"\r
        type="radio"\r
        name="offset"\r
        value="transform"\r
        class="mb-[3px]"\r
      >\r
      <label for="transform">transform</label>\r
    </div>\r
    <div>\r
      <input\r
        id="translate"\r
        v-model="offset"\r
        type="radio"\r
        name="offset"\r
        value="translate"\r
        class="mb-[3px]"\r
      >\r
      <label for="translate">translate</label>\r
    </div>\r
  </div>\r
\r
  <div class="flex gap-1 mt-4">\r
    gridX: <input v-model="grid[0]" class="b-1 b-gray b-solid px-1 b-rounded">\r
    gridY: <input v-model="grid[1]" class="b-1 b-gray b-solid b-rounded px-1">\r
  </div>\r
\r
  <div class="position-relative h-100">\r
    <MtResize\r
      :directions="['left', 'right', 'top', 'bottom']"\r
      :offset="offset"\r
      :grid="grid"\r
      :lock-aspect-ratio="lockAspectRatio"\r
      class="bg-blue min-w-10 w-30 h-30 position-absolute min-h-10 max-w-100 left-[200px] max-h-100 top-[200px]"\r
    />\r
  </div>\r
</template>\r
\r
<style lang="css" scoped>\r
.ctxs-btn {\r
  width: 40px;\r
  padding: 0 10px;\r
  margin: 5px;\r
  border: 1px solid gray;\r
  border-radius: 4px;\r
}\r
</style>\r
`,z=`<script setup lang="ts">\r
import { MtResize } from 'mortise-tenon-design';\r
import { ref } from 'vue';\r
\r
const width = ref<number>();\r
\r
function handleResize(content: { width?: number }) {\r
  width.value = content.width;\r
}\r
<\/script>\r
\r
<template>\r
  鼠标移至元素右侧即可拖拽调整大小\r
  <MtResize class="min-w-10 bg-blue w-20 h-20 max-w-100% mt-2" @resize="handleResize">\r
    width: {{ width }}\r
  </MtResize>\r
</template>\r
`,C=JSON.parse('{"title":"Resize","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/resize.md","filePath":"zh/components/resize.md","lastUpdated":1755688875000}'),X={name:"zh/components/resize.md"},D=Object.assign(X,{setup(A){const o=u();p(async()=>{o.value=(await c(async()=>{const{default:l}=await import("./chunks/direction.CZU85TXi.js");return{default:l}},__vite__mapDeps([0,1,2,3]))).default});const a=g(!0),i=u();return p(async()=>{i.value=(await c(async()=>{const{default:l}=await import("./chunks/base.DdPFT_fU.js");return{default:l}},__vite__mapDeps([4,2,1,3]))).default}),(l,e)=>{const m=x("ClientOnly");return k(),y("div",null,[e[2]||(e[2]=n("h1",{id:"resize",tabindex:"-1"},[d("Resize "),n("a",{class:"header-anchor",href:"#resize","aria-label":'Permalink to "Resize"'},"​")],-1)),e[3]||(e[3]=n("p",null,"调整元素的大小",-1)),e[4]||(e[4]=n("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),f(t(r(v),null,null,512),[[b,a.value]]),t(m,null,{default:s(()=>[t(r(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:r(z)},h({_:2},[i.value?{name:"vue",fn:s(()=>[t(r(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[5]||(e[5]=n("h2",{id:"更多功能",tabindex:"-1"},[d("更多功能 "),n("a",{class:"header-anchor",href:"#更多功能","aria-label":'Permalink to "更多功能"'},"​")],-1)),f(t(r(v),null,null,512),[[b,a.value]]),t(m,null,{default:s(()=>[t(r(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:r(R)},h({_:2},[o.value?{name:"vue",fn:s(()=>[t(r(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=w('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>directions</td><td>可调整的方向</td><td>(&#39;left&#39; | &#39;right&#39; | &#39;top&#39; | &#39;bottom&#39;)[]</td><td>[&#39;right&#39;]</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>offset</td><td>使用偏移，适用于元素脱离文档流时使用</td><td>&#39;transform&#39; | &#39;position&#39; | &#39;translate&#39;</td><td>--</td></tr><tr><td>lockAspectRatio</td><td>锁定纵横比，directions至少需要设置两个方向横向与纵向方向的值</td><td>boolean</td><td>false</td></tr><tr><td>grid</td><td>网格对齐，固定每次调整的最小距离，单位px，使用小数注意精度问题，建议使用0.5的倍数</td><td>number[]</td><td>[0.5,0.5]</td></tr></tbody></table><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p><a href="https://github.com/nixwai/mortise-tenon/blob/main/packages/components/src/resize/src/resize.vue" target="_blank" rel="noreferrer">源代码</a></p>',4))])}}});export{C as __pageData,D as default};
