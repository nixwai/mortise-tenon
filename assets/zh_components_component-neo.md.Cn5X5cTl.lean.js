const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/count.Dne6lAGF.js","assets/zh_components_component-neo.md.Cn5X5cTl.js","assets/chunks/framework.DpLEMRIP.js","assets/chunks/index.BL8YCZup.js","assets/chunks/index.C8XiTzS9.js","assets/chunks/text.BSy0CH3v.js"])))=>i.map(i=>d[i]);
import{P as W,d as C,p as _,v as R,c as f,o as d,j as c,G as r,k as a,w as s,b as V,t as b,H as B,ae as T,af as P,r as D,a as g,F as I,ag as M,ah as z,ad as q,C as E,ai as x}from"./chunks/framework.DpLEMRIP.js";import{u as L,M as A}from"./chunks/index.BL8YCZup.js";import{Q as N}from"./chunks/index.C8XiTzS9.js";const Z=`<script setup lang="ts">\r
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';\r
import { onMounted, ref } from 'vue';\r
\r
const { toggleComponent } = useComponentNeo('uniqueId3');\r
\r
const val = ref(false);\r
function handleClick() {\r
  val.value = !val.value;\r
  if (val.value) {\r
    toggleComponent(() => import('./count.vue'), { class: 'c-green' });\r
  }\r
  else {\r
    toggleComponent(() => import('./text.vue'));\r
  }\r
}\r
\r
onMounted(() => {\r
  handleClick();\r
});\r
<\/script>\r
\r
<template>\r
  <div>\r
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">\r
      切换组件\r
    </button>\r
    <MtComponentNeo v-slot="{ Component, compRef, compName }" unique-id="uniqueId3">\r
      <component :is="Component" :ref="compRef">\r
        <template #count="{ value }">\r
          <div>我是{{ compName }}的自定义插槽，点击+1：{{ value }}</div>\r
        </template>\r
        <template #text="{ value }">\r
          <div>我是{{ compName }}的自定义插槽，输出：{{ value }}</div>\r
        </template>\r
      </component>\r
    </MtComponentNeo>\r
  </div>\r
</template>\r
`;function y(i=""){const{setComponent:n,getComponent:e}=L();async function t(o,p,l){var v;try{const m=typeof o=="function"?(await o()).default:o,u={};for(let h in p){const k=p[h];h.startsWith("vModel:")?(h=h.replace("vModel:",""),u[h]=k,u[`onUpdate:${h}`]=w=>{"value"in k&&(k.value=w)}):u[h]=k}return n(i,{comp:m,attrs:u,slots:l||{}}),await W(),(v=e(i))==null?void 0:v.Instance.value}catch(m){console.error(m)}}return{getComponentRef:()=>{var o;return(o=e(i))==null?void 0:o.Instance.value},toggleComponent:t}}const S=C({__name:"custom-slot",setup(i){const{toggleComponent:n}=y("uniqueId3"),e=_(!1);function t(){e.value=!e.value,e.value?n(()=>T(()=>import("./chunks/count.Dne6lAGF.js"),__vite__mapDeps([0,1,2,3,4])),{class:"c-green"}):n(()=>T(()=>import("./chunks/text.BSy0CH3v.js"),__vite__mapDeps([5,1,2,3,4])))}return R(()=>{t()}),(o,p)=>(d(),f("div",null,[c("button",{class:"btn mb-2 flex flex-col-reverse",onClick:t}," 切换组件 "),r(a(A),{"unique-id":"uniqueId3"},{default:s(({Component:l,compRef:v,compName:m})=>[(d(),V(B(l),{ref:v},{count:s(({value:u})=>[c("div",null,"我是"+b(m)+"的自定义插槽，点击+1："+b(u),1)]),text:s(({value:u})=>[c("div",null,"我是"+b(m)+"的自定义插槽，输出："+b(u),1)]),_:2},1536))]),_:1})]))}}),j=`<script setup lang="ts">\r
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';\r
import { onMounted, ref } from 'vue';\r
\r
const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId2');\r
\r
const val = ref(false);\r
function handleClick() {\r
  val.value = !val.value;\r
  if (val.value) {\r
    toggleComponent(() => import('./count.vue'), { class: 'c-red' });\r
  }\r
  else {\r
    toggleComponent(() => import('./text.vue'));\r
  }\r
}\r
\r
function handleToggle() {\r
  console.warn('已切换', getComponentRef());\r
}\r
\r
onMounted(() => {\r
  handleClick();\r
});\r
<\/script>\r
\r
<template>\r
  <div>\r
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">\r
      切换组件\r
    </button>\r
    <MtComponentNeo v-slot="{ Component, compRef }" unique-id="uniqueId2" @toggle-component="handleToggle">\r
      <keep-alive>\r
        <component :is="Component" :ref="compRef" />\r
      </keep-alive>\r
    </MtComponentNeo>\r
  </div>\r
</template>\r
`,G=C({__name:"keep-state",setup(i){const{getComponentRef:n,toggleComponent:e}=y("uniqueId2"),t=_(!1);function o(){t.value=!t.value,t.value?e(()=>T(()=>import("./chunks/count.Dne6lAGF.js"),__vite__mapDeps([0,1,2,3,4])),{class:"c-red"}):e(()=>T(()=>import("./chunks/text.BSy0CH3v.js"),__vite__mapDeps([5,1,2,3,4])))}function p(){console.warn("已切换",n())}return R(()=>{o()}),(l,v)=>(d(),f("div",null,[c("button",{class:"btn mb-2 flex flex-col-reverse",onClick:o}," 切换组件 "),r(a(A),{"unique-id":"uniqueId2",onToggleComponent:p},{default:s(({Component:m,compRef:u})=>[(d(),V(P,null,[(d(),V(B(m),{ref:u},null,512))],1024))]),_:1})]))}}),Q=`<script setup lang="tsx">\r
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';\r
import { h, onMounted, ref } from 'vue';\r
import Count from './count.vue';\r
import Text from './text.vue';\r
\r
const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId1');\r
\r
const val = ref(false);\r
function handleClick() {\r
  val.value = !val.value;\r
  if (val.value) {\r
    toggleComponent(Count, { class: 'c-red' }, { count: (slotData: { value: number }) => h('div', \`我是Count插槽，点击+1：\${slotData?.value}\`) });\r
  }\r
  else {\r
    toggleComponent(Text, {}, { text: (slotData: { value: string }) => h('div', \`我是Text插槽，输出：\${slotData?.value}\`) });\r
  }\r
}\r
\r
function handleToggle() {\r
  console.warn('已切换', getComponentRef());\r
}\r
\r
onMounted(() => {\r
  handleClick();\r
});\r
<\/script>\r
\r
<template>\r
  <div>\r
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">\r
      切换组件\r
    </button>\r
    <MtComponentNeo unique-id="uniqueId1" @toggle-component="handleToggle" />\r
  </div>\r
</template>\r
`,U=C({name:"ExampleCount",__name:"count",setup(i){const n=_(0);return(e,t)=>(d(),f("div",{class:"cursor-pointer",onClick:t[0]||(t[0]=o=>n.value++)},[D(e.$slots,"count",{value:n.value},()=>[g(" 点击："+b(n.value),1)])]))}}),$=C({name:"ExampleText",__name:"text",setup(i){const n=_("");return(e,t)=>(d(),f(I,null,[M(c("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o),type:"text",class:"b-1 b-gray b-solid rounded-md mr-1 px-1"},null,512),[[z,n.value]]),D(e.$slots,"text",{value:n.value},()=>[g(b(n.value),1)])],64))}}),X=C({__name:"use-hook",setup(i){const{getComponentRef:n,toggleComponent:e}=y("uniqueId1"),t=_(!1);function o(){t.value=!t.value,t.value?e(U,{class:"c-red"},{count:l=>q("div",`我是Count插槽，点击+1：${l==null?void 0:l.value}`)}):e($,{},{text:l=>q("div",`我是Text插槽，输出：${l==null?void 0:l.value}`)})}function p(){console.warn("已切换",n())}return R(()=>{o()}),(l,v)=>(d(),f("div",null,[c("button",{class:"btn mb-2 flex flex-col-reverse",onClick:o}," 切换组件 "),r(a(A),{"unique-id":"uniqueId1",onToggleComponent:p})]))}}),F=`<script setup lang="ts">\r
import { MtComponentNeo } from '@mortise-tenon/components';\r
import { h, ref } from 'vue';\r
\r
const comp1 = h('div', 'Hollo');\r
const comp2 = h('div', 'World');\r
\r
const val = ref(true);\r
\r
function handleToggle(_name?: string, componentRef?: any) {\r
  console.warn('已切换', componentRef);\r
}\r
<\/script>\r
\r
<template>\r
  <div>\r
    <button class="btn mb-2" @click="val = !val">\r
      切换组件\r
    </button>\r
    <MtComponentNeo :is="val ? comp1 : comp2" @toggle-component="handleToggle" />\r
  </div>\r
</template>\r
`,O=C({__name:"base",setup(i){const n=q("div","Hollo"),e=q("div","World"),t=_(!0);function o(p,l){console.warn("已切换",l)}return(p,l)=>(d(),f("div",null,[c("button",{class:"btn mb-2",onClick:l[0]||(l[0]=v=>t.value=!t.value)}," 切换组件 "),r(a(A),{is:t.value?a(n):a(e),onToggleComponent:o},null,8,["is"])]))}}),ee=JSON.parse('{"title":"ComponentNeo","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/component-neo.md","filePath":"zh/components/component-neo.md","lastUpdated":1740212683000}'),H={name:"zh/components/component-neo.md"},te=Object.assign(H,{setup(i){return(n,e)=>{const t=E("ClientOnly");return d(),f("div",null,[e[0]||(e[0]=x("",5)),r(t,null,{default:s(()=>[r(a(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(F)},{vue:s(()=>[r(O)]),_:1},8,["vueCode"])]),_:1}),e[1]||(e[1]=x("",11)),r(t,null,{default:s(()=>[r(a(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(Q)},{vue:s(()=>[r(X)]),_:1},8,["vueCode"])]),_:1}),e[2]||(e[2]=x("",3)),r(t,null,{default:s(()=>[r(a(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(j)},{vue:s(()=>[r(G)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=c("h2",{id:"传递插槽",tabindex:"-1"},[g("传递插槽 "),c("a",{class:"header-anchor",href:"#传递插槽","aria-label":'Permalink to "传递插槽"'},"​")],-1)),e[4]||(e[4]=c("p",null,[g("可以通过 "),c("code",null,"component"),g(" 的插槽传递内容给引入的组件，但这种方式会导致所有组件使用相同的插槽，并使 "),c("code",null,"toggleComponent"),g(" 中的插槽参数失效，需要谨慎使用。")],-1)),r(t,null,{default:s(()=>[r(a(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(Z)},{vue:s(()=>[r(S)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=x("",8))])}}});export{U as _,ee as __pageData,$ as a,te as default};
