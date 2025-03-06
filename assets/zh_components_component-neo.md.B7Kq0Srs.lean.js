import{P,d as B,p as f,c as h,o as c,r as w,a as g,t as b,F as j,ae as D,af as Z,j as s,v as q,G as o,k as C,w as a,b as F,H as V,ag as S,ad as T,C as G,ah as _,ai as x}from"./chunks/framework.BSVvnydI.js";import{M as $,n as N}from"./chunks/index.Bnuvy5Be.js";import{d as A,f as k}from"./chunks/index.CF5C30ZV.js";import"./chunks/index.CU7lAU4_.js";const z=`<script setup lang="ts">\r
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';\r
import { onMounted, ref } from 'vue';\r
import Count from './count.vue';\r
import Text from './text.vue';\r
\r
const { toggleComponent } = useComponentNeo('uniqueId3');\r
\r
const val = ref(false);\r
function handleClick() {\r
  val.value = !val.value;\r
  if (val.value) {\r
    toggleComponent(Count, { class: 'c-green' });\r
  }\r
  else {\r
    toggleComponent(Text);\r
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
`;function y(u=""){const{setComponent:n,getComponent:r}=$();async function e(t,p,l){var d;try{const m=typeof t=="function"?(await t()).default:t,i={};for(let v in p){const E=p[v];v.startsWith("vModel:")?(v=v.replace("vModel:",""),i[v]=E,i[`onUpdate:${v}`]=I=>{"value"in E&&(E.value=I)}):i[v]=E}return n(u,{comp:m,attrs:i,slots:l||{}}),await P(),(d=r(u))==null?void 0:d.Instance.value}catch(m){console.error(m)}}return{getComponentRef:()=>{var t;return(t=r(u))==null?void 0:t.Instance.value},toggleComponent:e}}const R=B({name:"ExampleCount",__name:"count",setup(u){const n=f(0);return(r,e)=>(c(),h("div",{class:"cursor-pointer",onClick:e[0]||(e[0]=t=>n.value++)},[w(r.$slots,"count",{value:n.value},()=>[g(" 点击："+b(n.value),1)])]))}}),M=B({name:"ExampleText",__name:"text",setup(u){const n=f("");return(r,e)=>(c(),h(j,null,[D(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),type:"text",class:"b-1 b-gray b-solid rounded-md mr-1 px-1"},null,512),[[Z,n.value]]),w(r.$slots,"text",{value:n.value},()=>[g(b(n.value),1)])],64))}}),W=B({__name:"custom-slot",setup(u){const{toggleComponent:n}=y("uniqueId3"),r=f(!1);function e(){r.value=!r.value,r.value?n(R,{class:"c-green"}):n(M)}return q(()=>{e()}),(t,p)=>(c(),h("div",null,[s("button",{class:"btn mb-2 flex flex-col-reverse",onClick:e}," 切换组件 "),o(C(N),{"unique-id":"uniqueId3"},{default:a(({Component:l,compRef:d,compName:m})=>[(c(),F(V(l),{ref:d},{count:a(({value:i})=>[s("div",null,"我是"+b(m)+"的自定义插槽，点击+1："+b(i),1)]),text:a(({value:i})=>[s("div",null,"我是"+b(m)+"的自定义插槽，输出："+b(i),1)]),_:2},1536))]),_:1})]))}}),X=`<script setup lang="ts">\r
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';\r
import { onMounted, ref } from 'vue';\r
import Count from './count.vue';\r
import Text from './text.vue';\r
\r
const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId2');\r
\r
const val = ref(false);\r
function handleClick() {\r
  val.value = !val.value;\r
  if (val.value) {\r
    toggleComponent(Count, { class: 'c-red' });\r
  }\r
  else {\r
    toggleComponent(Text);\r
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
`,O=B({__name:"keep-state",setup(u){const{getComponentRef:n,toggleComponent:r}=y("uniqueId2"),e=f(!1);function t(){e.value=!e.value,e.value?r(R,{class:"c-red"}):r(M)}function p(){console.warn("已切换",n())}return q(()=>{t()}),(l,d)=>(c(),h("div",null,[s("button",{class:"btn mb-2 flex flex-col-reverse",onClick:t}," 切换组件 "),o(C(N),{"unique-id":"uniqueId2",onToggleComponent:p},{default:a(({Component:m,compRef:i})=>[(c(),F(S,null,[(c(),F(V(m),{ref:i},null,512))],1024))]),_:1})]))}}),H=`<script setup lang="tsx">\r
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';\r
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
`,U=B({__name:"use-hook",setup(u){const{getComponentRef:n,toggleComponent:r}=y("uniqueId1"),e=f(!1);function t(){e.value=!e.value,e.value?r(R,{class:"c-red"},{count:l=>T("div",`我是Count插槽，点击+1：${l==null?void 0:l.value}`)}):r(M,{},{text:l=>T("div",`我是Text插槽，输出：${l==null?void 0:l.value}`)})}function p(){console.warn("已切换",n())}return q(()=>{t()}),(l,d)=>(c(),h("div",null,[s("button",{class:"btn mb-2 flex flex-col-reverse",onClick:t}," 切换组件 "),o(C(N),{"unique-id":"uniqueId1",onToggleComponent:p})]))}}),L=`<script setup lang="ts">\r
import { MtComponentNeo } from 'mortise-tenon-design';\r
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
`,J=B({__name:"base",setup(u){const n=T("div","Hollo"),r=T("div","World"),e=f(!0);function t(p,l){console.warn("已切换",l)}return(p,l)=>(c(),h("div",null,[s("button",{class:"btn mb-2",onClick:l[0]||(l[0]=d=>e.value=!e.value)}," 切换组件 "),o(C(N),{is:e.value?C(n):C(r),onToggleComponent:t},null,8,["is"])]))}}),te=JSON.parse('{"title":"ComponentNeo","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/component-neo.md","filePath":"zh/components/component-neo.md","lastUpdated":1741252669000}'),K={name:"zh/components/component-neo.md"},oe=Object.assign(K,{setup(u){const n=f(!0);return(r,e)=>{const t=G("ClientOnly");return c(),h("div",null,[e[4]||(e[4]=_("",5)),D(o(C(A),null,null,512),[[x,n.value]]),o(t,null,{default:a(()=>[o(C(k),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:C(L)},{vue:a(()=>[o(J)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=_("",11)),D(o(C(A),null,null,512),[[x,n.value]]),o(t,null,{default:a(()=>[o(C(k),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:C(H)},{vue:a(()=>[o(U)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=_("",3)),D(o(C(A),null,null,512),[[x,n.value]]),o(t,null,{default:a(()=>[o(C(k),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22keep-state.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fkeep-state.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20%7B%20MtComponentNeo%2C%20useComponentNeo%20%7D%20from%20'mortise-tenon-design'%3B%5Cr%5Cnimport%20%7B%20onMounted%2C%20ref%20%7D%20from%20'vue'%3B%5Cr%5Cnimport%20Count%20from%20'.%2Fcount.vue'%3B%5Cr%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cr%5Cn%5Cr%5Cnconst%20%7B%20getComponentRef%2C%20toggleComponent%20%7D%20%3D%20useComponentNeo('uniqueId2')%3B%5Cr%5Cn%5Cr%5Cnconst%20val%20%3D%20ref(false)%3B%5Cr%5Cnfunction%20handleClick()%20%7B%5Cr%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cr%5Cn%20%20if%20(val.value)%20%7B%5Cr%5Cn%20%20%20%20toggleComponent(Count%2C%20%7B%20class%3A%20'c-red'%20%7D)%3B%5Cr%5Cn%20%20%7D%5Cr%5Cn%20%20else%20%7B%5Cr%5Cn%20%20%20%20toggleComponent(Text)%3B%5Cr%5Cn%20%20%7D%5Cr%5Cn%7D%5Cr%5Cn%5Cr%5Cnfunction%20handleToggle()%20%7B%5Cr%5Cn%20%20console.warn('%E5%B7%B2%E5%88%87%E6%8D%A2'%2C%20getComponentRef())%3B%5Cr%5Cn%7D%5Cr%5Cn%5Cr%5CnonMounted(()%20%3D%3E%20%7B%5Cr%5Cn%20%20handleClick()%3B%5Cr%5Cn%7D)%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cdiv%3E%5Cr%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%20flex%20flex-col-reverse%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cr%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cr%5Cn%20%20%20%20%3CMtComponentNeo%20v-slot%3D%5C%22%7B%20Component%2C%20compRef%20%7D%5C%22%20unique-id%3D%5C%22uniqueId2%5C%22%20%40toggle-component%3D%5C%22handleToggle%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%3Ckeep-alive%3E%5Cr%5Cn%20%20%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%5C%22Component%5C%22%20%3Aref%3D%5C%22compRef%5C%22%20%2F%3E%5Cr%5Cn%20%20%20%20%20%20%3C%2Fkeep-alive%3E%5Cr%5Cn%20%20%20%20%3C%2FMtComponentNeo%3E%5Cr%5Cn%20%20%3C%2Fdiv%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%2C%22count.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fcount.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cr%5Cn%5Cr%5CndefineOptions(%7B%20name%3A%20'ExampleCount'%20%7D)%3B%5Cr%5Cn%5Cr%5Cnconst%20value%20%3D%20ref(0)%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cdiv%20class%3D%5C%22cursor-pointer%5C%22%20%40click%3D%5C%22value%2B%2B%5C%22%3E%5Cr%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22count%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%E7%82%B9%E5%87%BB%EF%BC%9A%7B%7B%20value%20%7D%7D%5Cr%5Cn%20%20%20%20%3C%2Fslot%3E%5Cr%5Cn%20%20%3C%2Fdiv%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cr%5Cn%5Cr%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cr%5Cn%5Cr%5Cnconst%20value%20%3D%20ref('')%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20rounded-md%20mr-1%20px-1%5C%22%3E%5Cr%5Cn%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cr%5Cn%20%20%20%20%7B%7B%20value%20%7D%7D%5Cr%5Cn%20%20%3C%2Fslot%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:C(X)},{vue:a(()=>[o(O)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=s("h2",{id:"传递插槽",tabindex:"-1"},[g("传递插槽 "),s("a",{class:"header-anchor",href:"#传递插槽","aria-label":'Permalink to "传递插槽"'},"​")],-1)),e[8]||(e[8]=s("p",null,[g("可以通过 "),s("code",null,"component"),g(" 的插槽传递内容给引入的组件，但这种方式会导致所有组件使用相同的插槽，并使 "),s("code",null,"toggleComponent"),g(" 中的插槽参数失效，需要谨慎使用。")],-1)),D(o(C(A),null,null,512),[[x,n.value]]),o(t,null,{default:a(()=>[o(C(k),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22custom-slot.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fcustom-slot.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20%7B%20MtComponentNeo%2C%20useComponentNeo%20%7D%20from%20'mortise-tenon-design'%3B%5Cr%5Cnimport%20%7B%20onMounted%2C%20ref%20%7D%20from%20'vue'%3B%5Cr%5Cnimport%20Count%20from%20'.%2Fcount.vue'%3B%5Cr%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cr%5Cn%5Cr%5Cnconst%20%7B%20toggleComponent%20%7D%20%3D%20useComponentNeo('uniqueId3')%3B%5Cr%5Cn%5Cr%5Cnconst%20val%20%3D%20ref(false)%3B%5Cr%5Cnfunction%20handleClick()%20%7B%5Cr%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cr%5Cn%20%20if%20(val.value)%20%7B%5Cr%5Cn%20%20%20%20toggleComponent(Count%2C%20%7B%20class%3A%20'c-green'%20%7D)%3B%5Cr%5Cn%20%20%7D%5Cr%5Cn%20%20else%20%7B%5Cr%5Cn%20%20%20%20toggleComponent(Text)%3B%5Cr%5Cn%20%20%7D%5Cr%5Cn%7D%5Cr%5Cn%5Cr%5CnonMounted(()%20%3D%3E%20%7B%5Cr%5Cn%20%20handleClick()%3B%5Cr%5Cn%7D)%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cdiv%3E%5Cr%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%20flex%20flex-col-reverse%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cr%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cr%5Cn%20%20%20%20%3CMtComponentNeo%20v-slot%3D%5C%22%7B%20Component%2C%20compRef%2C%20compName%20%7D%5C%22%20unique-id%3D%5C%22uniqueId3%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%5C%22Component%5C%22%20%3Aref%3D%5C%22compRef%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%20%20%3Ctemplate%20%23count%3D%5C%22%7B%20value%20%7D%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%7B%7B%20compName%20%7D%7D%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E6%A7%BD%EF%BC%8C%E7%82%B9%E5%87%BB%2B1%EF%BC%9A%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%5Cr%5Cn%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%5Cr%5Cn%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3D%5C%22%7B%20value%20%7D%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%7B%7B%20compName%20%7D%7D%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E6%A7%BD%EF%BC%8C%E8%BE%93%E5%87%BA%EF%BC%9A%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%5Cr%5Cn%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%5Cr%5Cn%20%20%20%20%20%20%3C%2Fcomponent%3E%5Cr%5Cn%20%20%20%20%3C%2FMtComponentNeo%3E%5Cr%5Cn%20%20%3C%2Fdiv%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%2C%22count.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fcount.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cr%5Cn%5Cr%5CndefineOptions(%7B%20name%3A%20'ExampleCount'%20%7D)%3B%5Cr%5Cn%5Cr%5Cnconst%20value%20%3D%20ref(0)%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cdiv%20class%3D%5C%22cursor-pointer%5C%22%20%40click%3D%5C%22value%2B%2B%5C%22%3E%5Cr%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22count%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cr%5Cn%20%20%20%20%20%20%E7%82%B9%E5%87%BB%EF%BC%9A%7B%7B%20value%20%7D%7D%5Cr%5Cn%20%20%20%20%3C%2Fslot%3E%5Cr%5Cn%20%20%3C%2Fdiv%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cr%5Cn%5Cr%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cr%5Cn%5Cr%5Cnconst%20value%20%3D%20ref('')%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20rounded-md%20mr-1%20px-1%5C%22%3E%5Cr%5Cn%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cr%5Cn%20%20%20%20%7B%7B%20value%20%7D%7D%5Cr%5Cn%20%20%3C%2Fslot%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),vueCode:C(z)},{vue:a(()=>[o(W)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=_("",10))])}}});export{te as __pageData,oe as default};
