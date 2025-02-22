const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/count.Dne6lAGF.js","assets/chunks/framework.DpLEMRIP.js","assets/chunks/index.BL8YCZup.js","assets/chunks/index.C8XiTzS9.js","assets/chunks/text.BSy0CH3v.js"])))=>i.map(i=>d[i]);
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
`;function y(i=""){const{setComponent:n,getComponent:e}=L();async function t(o,p,l){var v;try{const m=typeof o=="function"?(await o()).default:o,u={};for(let h in p){const k=p[h];h.startsWith("vModel:")?(h=h.replace("vModel:",""),u[h]=k,u[`onUpdate:${h}`]=w=>{"value"in k&&(k.value=w)}):u[h]=k}return n(i,{comp:m,attrs:u,slots:l||{}}),await W(),(v=e(i))==null?void 0:v.Instance.value}catch(m){console.error(m)}}return{getComponentRef:()=>{var o;return(o=e(i))==null?void 0:o.Instance.value},toggleComponent:t}}const S=C({__name:"custom-slot",setup(i){const{toggleComponent:n}=y("uniqueId3"),e=_(!1);function t(){e.value=!e.value,e.value?n(()=>T(()=>import("./chunks/count.Dne6lAGF.js"),__vite__mapDeps([0,1,2,3])),{class:"c-green"}):n(()=>T(()=>import("./chunks/text.BSy0CH3v.js"),__vite__mapDeps([4,1,2,3])))}return R(()=>{t()}),(o,p)=>(d(),f("div",null,[c("button",{class:"btn mb-2 flex flex-col-reverse",onClick:t}," 切换组件 "),r(a(A),{"unique-id":"uniqueId3"},{default:s(({Component:l,compRef:v,compName:m})=>[(d(),V(B(l),{ref:v},{count:s(({value:u})=>[c("div",null,"我是"+b(m)+"的自定义插槽，点击+1："+b(u),1)]),text:s(({value:u})=>[c("div",null,"我是"+b(m)+"的自定义插槽，输出："+b(u),1)]),_:2},1536))]),_:1})]))}}),j=`<script setup lang="ts">\r
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
`,G=C({__name:"keep-state",setup(i){const{getComponentRef:n,toggleComponent:e}=y("uniqueId2"),t=_(!1);function o(){t.value=!t.value,t.value?e(()=>T(()=>import("./chunks/count.Dne6lAGF.js"),__vite__mapDeps([0,1,2,3])),{class:"c-red"}):e(()=>T(()=>import("./chunks/text.BSy0CH3v.js"),__vite__mapDeps([4,1,2,3])))}function p(){console.warn("已切换",n())}return R(()=>{o()}),(l,v)=>(d(),f("div",null,[c("button",{class:"btn mb-2 flex flex-col-reverse",onClick:o}," 切换组件 "),r(a(A),{"unique-id":"uniqueId2",onToggleComponent:p},{default:s(({Component:m,compRef:u})=>[(d(),V(P,null,[(d(),V(B(m),{ref:u},null,512))],1024))]),_:1})]))}}),Q=`<script setup lang="tsx">\r
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
`,O=C({__name:"base",setup(i){const n=q("div","Hollo"),e=q("div","World"),t=_(!0);function o(p,l){console.warn("已切换",l)}return(p,l)=>(d(),f("div",null,[c("button",{class:"btn mb-2",onClick:l[0]||(l[0]=v=>t.value=!t.value)}," 切换组件 "),r(a(A),{is:t.value?a(n):a(e),onToggleComponent:o},null,8,["is"])]))}}),ee=JSON.parse('{"title":"ComponentNeo","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/component-neo.md","filePath":"zh/components/component-neo.md","lastUpdated":1740212683000}'),H={name:"zh/components/component-neo.md"},te=Object.assign(H,{setup(i){return(n,e)=>{const t=E("ClientOnly");return d(),f("div",null,[e[0]||(e[0]=x('<h1 id="componentneo" tabindex="-1">ComponentNeo <a class="header-anchor" href="#componentneo" aria-label="Permalink to &quot;ComponentNeo&quot;">​</a></h1><p><code>ComponentNeo</code> 是 Vue 内置 <code>component</code> 组件的扩展版本，提供了更丰富的切换方式，使组件切换更加灵活，适用于更多场景。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p><code>ComponentNeo</code> 的基础用法与 Vue 的 <a href="https://cn.vuejs.org/api/built-in-special-elements.html#component" target="_blank" rel="noreferrer">component</a> 一致。它额外提供了一个 <code>toggleComponent</code> 事件，在组件切换完成后触发。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>当切换的组件是同一个组件时，建议添加 <code>key</code> 属性进行区分，确保每个组件实例独立渲染。</p></div>',5)),r(t,null,{default:s(()=>[r(a(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(F)},{vue:s(()=>[r(O)]),_:1},8,["vueCode"])]),_:1}),e[1]||(e[1]=x('<h2 id="核心功能-usecomponentneo" tabindex="-1">核心功能：useComponentNeo <a class="header-anchor" href="#核心功能-usecomponentneo" aria-label="Permalink to &quot;核心功能：useComponentNeo&quot;">​</a></h2><p><code>useComponentNeo</code> 是 <code>ComponentNeo</code> 的核心扩展功能，允许通过函数调用来切换组件，并且可以在不同文件中调用该函数，增强了组件切换的灵活性。</p><h3 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h3><ul><li><strong>uniqueId</strong> (可选): 当页面内存在多个 <code>ComponentNeo</code> 实例时，可以通过 <code>uniqueId</code> 参数来区分不同的实例，避免同时修改多个组件。</li></ul><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><h4 id="togglecomponent" tabindex="-1">toggleComponent <a class="header-anchor" href="#togglecomponent" aria-label="Permalink to &quot;toggleComponent&quot;">​</a></h4><p>用于切换 <code>ComponentNeo</code> 的引用组件。</p><ul><li><p><strong>参数</strong></p><ol><li><strong>component</strong> (可选): 需要显示的组件，可支持 VNode 类型或动态加载方式（如 <code>()=&gt;import(&quot;组件路径&quot;)</code>）。</li><li><strong>attrs</strong> (可选): 组件的属性对象，可支持事件绑定和双向绑定（如 <code>onEventName</code> 和 <code>vModel:property</code>）。</li><li><strong>slots</strong> (可选): 插槽定义，参考 <a href="https://cn.vuejs.org/api/render-function.html#h" target="_blank" rel="noreferrer">h 函数</a> 中的插槽定义，不可与传递插槽方式同时使用。</li></ol></li><li><p><strong>返回值</strong></p><p>返回一个 <code>Promise&lt;componentRef&gt;</code>，即切换后组件的引用，可用于调用组件的 <a href="https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose" target="_blank" rel="noreferrer">暴露内容</a>。</p></li></ul><h4 id="getcomponentref" tabindex="-1">getComponentRef <a class="header-anchor" href="#getcomponentref" aria-label="Permalink to &quot;getComponentRef&quot;">​</a></h4><p>获取当前 <code>ComponentNeo</code> 的组件引用。</p><ul><li><p><strong>返回值</strong></p><p>返回当前组件的引用 <code>componentRef</code>，可用于调用组件的 <a href="https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose" target="_blank" rel="noreferrer">暴露内容</a>。</p></li></ul>',11)),r(t,null,{default:s(()=>[r(a(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(Q)},{vue:s(()=>[r(X)]),_:1},8,["vueCode"])]),_:1}),e[2]||(e[2]=x('<h2 id="使用-keepalive" tabindex="-1">使用 KeepAlive <a class="header-anchor" href="#使用-keepalive" aria-label="Permalink to &quot;使用 KeepAlive&quot;">​</a></h2><p>组件并不能对直接通过<a href="https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive" target="_blank" rel="noreferrer">KeepAlive</a>包裹方式进行缓存，为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内，<a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank" rel="noreferrer">Transition</a>的实现也是同理</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>插槽内 <code>component</code> 必须将 <code>compRef</code> 赋值给 <code>ref</code>，否则无法获取组件引用实例<code>componentRef</code>。</p></div>',3)),r(t,null,{default:s(()=>[r(a(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(j)},{vue:s(()=>[r(G)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=c("h2",{id:"传递插槽",tabindex:"-1"},[g("传递插槽 "),c("a",{class:"header-anchor",href:"#传递插槽","aria-label":'Permalink to "传递插槽"'},"​")],-1)),e[4]||(e[4]=c("p",null,[g("可以通过 "),c("code",null,"component"),g(" 的插槽传递内容给引入的组件，但这种方式会导致所有组件使用相同的插槽，并使 "),c("code",null,"toggleComponent"),g(" 中的插槽参数失效，需要谨慎使用。")],-1)),r(t,null,{default:s(()=>[r(a(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(Z)},{vue:s(()=>[r(S)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=x('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>is</td><td>引用的组件</td><td>string | Component</td><td>-</td></tr><tr><td>uniqueId</td><td>唯一标识</td><td>string</td><td>&#39;&#39;</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>toggleComponent</td><td>组件切换后触发</td><td>(compName?:string, compRef?:any)=&gt;void</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th><th>作用域</th></tr></thead><tbody><tr><td>default</td><td>自定义组件内容</td><td>Component:VNode (引用节点)<br>compRef:Function (引用)<br>attrs:Record&lt;string,any&gt; (属性)<br>compName?:string (组件名)</td></tr></tbody></table><h2 id="暴露" tabindex="-1">暴露 <a class="header-anchor" href="#暴露" aria-label="Permalink to &quot;暴露&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>componentRef</td><td>当前 <code>ComponentNeo</code> 的组件引用</td><td>any</td></tr></tbody></table>',8))])}}});export{U as _,ee as __pageData,$ as a,te as default};
