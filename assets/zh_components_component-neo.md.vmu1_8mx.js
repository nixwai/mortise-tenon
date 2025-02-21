const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/count.CZRHFbh0.js","assets/chunks/framework.cvzX9Zjb.js","assets/chunks/text.CWUeRe3i.js"])))=>i.map(i=>d[i]);
import{P as B,d as N,p as T,c as v,o as h,j as r,G as n,k as a,w as i,b as A,t as b,H as V,ae as _,af as W,ad as k,C as w,ag as x,a as g}from"./chunks/framework.cvzX9Zjb.js";import{u as y,M as q}from"./chunks/index.C7Dumq_T.js";import{Q as C}from"./chunks/index.DHUEn3aV.js";const z=`<script setup lang="ts">\r
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';\r
import { ref } from 'vue';\r
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
handleClick();\r
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
`;function R(d=""){const{setComponent:c,getComponent:e}=y();async function t(o,p){var s;try{const m=typeof o=="function"?(await o()).default:o,u={};for(let l in p){const f=p[l];l.startsWith("vModel:")?(l=l.replace("vModel:",""),u[l]=f,u[`onUpdate:${l}`]=D=>{"value"in f&&(f.value=D)}):u[l]=f}return c(d,m,u),await B(),(s=e(d))==null?void 0:s.Instance.value}catch(m){console.error(m)}}return{getComponentRef:()=>{var o;return(o=e(d))==null?void 0:o.Instance.value},toggleComponent:t}}const L=N({__name:"custom-slot",setup(d){const{toggleComponent:c}=R("uniqueId3"),e=T(!1);function t(){e.value=!e.value,e.value?c(()=>_(()=>import("./chunks/count.CZRHFbh0.js"),__vite__mapDeps([0,1])),{class:"c-green"}):c(()=>_(()=>import("./chunks/text.CWUeRe3i.js"),__vite__mapDeps([2,1])))}return t(),(o,p)=>(h(),v("div",null,[r("button",{class:"btn mb-2 flex flex-col-reverse",onClick:t}," 切换组件 "),n(a(q),{"unique-id":"uniqueId3"},{default:i(({Component:s,compRef:m,compName:u})=>[(h(),A(V(s),{ref:m},{count:i(({value:l})=>[r("div",null,"我是"+b(u)+"的自定义插槽，点击+1："+b(l),1)]),text:i(({value:l})=>[r("div",null,"我是"+b(u)+"的自定义插槽，输出："+b(l),1)]),_:2},1536))]),_:1})]))}}),P=`<script setup lang="ts">\r
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';\r
import { ref } from 'vue';\r
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
handleClick();\r
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
`,I=N({__name:"keep-state",setup(d){const{getComponentRef:c,toggleComponent:e}=R("uniqueId2"),t=T(!1);function o(){t.value=!t.value,t.value?e(()=>_(()=>import("./chunks/count.CZRHFbh0.js"),__vite__mapDeps([0,1])),{class:"c-red"}):e(()=>_(()=>import("./chunks/text.CWUeRe3i.js"),__vite__mapDeps([2,1])))}function p(){console.warn("已切换",c())}return o(),(s,m)=>(h(),v("div",null,[r("button",{class:"btn mb-2 flex flex-col-reverse",onClick:o}," 切换组件 "),n(a(q),{"unique-id":"uniqueId2",onToggleComponent:p},{default:i(({Component:u,compRef:l})=>[(h(),A(W,null,[(h(),A(V(u),{ref:l},null,512))],1024))]),_:1})]))}}),E=`<script setup lang="ts">\r
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';\r
import { h, ref } from 'vue';\r
\r
const comp1 = h('div', 'Hollo');\r
const comp2 = h('div', 'World');\r
\r
const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId1');\r
\r
const val = ref(false);\r
function handleClick() {\r
  val.value = !val.value;\r
  if (val.value) {\r
    toggleComponent(comp1, { class: 'c-red' });\r
  }\r
  else {\r
    toggleComponent(comp2, { class: 'c-blue' });\r
  }\r
}\r
\r
function handleToggle() {\r
  console.warn('已切换', getComponentRef());\r
}\r
\r
handleClick();\r
<\/script>\r
\r
<template>\r
  <div>\r
    <button class="btn mb-2" @click="handleClick">\r
      切换组件\r
    </button>\r
    <MtComponentNeo unique-id="uniqueId1" @toggle-component="handleToggle" />\r
  </div>\r
</template>\r
`,Z=N({__name:"use-hook",setup(d){const c=k("div","Hollo"),e=k("div","World"),{getComponentRef:t,toggleComponent:o}=R("uniqueId1"),p=T(!1);function s(){p.value=!p.value,p.value?o(c,{class:"c-red"}):o(e,{class:"c-blue"})}function m(){console.warn("已切换",t())}return s(),(u,l)=>(h(),v("div",null,[r("button",{class:"btn mb-2",onClick:s}," 切换组件 "),n(a(q),{"unique-id":"uniqueId1",onToggleComponent:m})]))}}),G=`<script setup lang="ts">\r
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
`,j=N({__name:"base",setup(d){const c=k("div","Hollo"),e=k("div","World"),t=T(!0);function o(p,s){console.warn("已切换",s)}return(p,s)=>(h(),v("div",null,[r("button",{class:"btn mb-2",onClick:s[0]||(s[0]=m=>t.value=!t.value)}," 切换组件 "),n(a(q),{is:t.value?a(c):a(e),onToggleComponent:o},null,8,["is"])]))}}),X=JSON.parse('{"title":"Component Neo","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/component-neo.md","filePath":"zh/components/component-neo.md","lastUpdated":1740134569000}'),M={name:"zh/components/component-neo.md"},H=Object.assign(M,{setup(d){return(c,e)=>{const t=w("ClientOnly");return h(),v("div",null,[e[0]||(e[0]=x('<h1 id="component-neo" tabindex="-1">Component Neo <a class="header-anchor" href="#component-neo" aria-label="Permalink to &quot;Component Neo&quot;">​</a></h1><p>vue内置组件component的扩展，提供了更丰富的切换方式，切换的方式更加灵活。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基础用法与vue的<a href="https://cn.vuejs.org/api/built-in-special-elements.html#component" target="_blank" rel="noreferrer">component</a>一致，同时扩展了切换完成时触发的事件：toggleComponent。</p>',4)),n(t,null,{default:i(()=>[n(a(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(G)},{vue:i(()=>[n(j)]),_:1},8,["vueCode"])]),_:1}),e[1]||(e[1]=r("h2",{id:"usecomponentneo",tabindex:"-1"},[g("useComponentNeo "),r("a",{class:"header-anchor",href:"#usecomponentneo","aria-label":'Permalink to "useComponentNeo"'},"​")],-1)),e[2]||(e[2]=r("p",null,"核心扩展功能，通过调用函数的方式的进行切换组件，并且切换函数的调用与组件实例可以在不同的文件下，使调用更加灵活。",-1)),e[3]||(e[3]=r("p",null,"当页面内存在多个ComponentNeo时，可通过uniqueId参数进行区分，以防切换组件时同时修改多个ComponentNeo。",-1)),n(t,null,{default:i(()=>[n(a(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(E)},{vue:i(()=>[n(Z)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=x('<h3 id="togglecomponent" tabindex="-1">toggleComponent <a class="header-anchor" href="#togglecomponent" aria-label="Permalink to &quot;toggleComponent&quot;">​</a></h3><p>切换ComponentNeo的引入组件。</p><ul><li><p><strong>参数</strong></p><ol><li>需要显示的组件，可以是VNode类型，也支持 ()=&gt;import(&quot;组件路径&quot;) 的动态加载方式。</li><li>组件的属性，为对象类型，支持ref传入动态控制，事件可以通过“on事件名”方式传入，双向绑定可使用“vModel:属性”方式进行绑定。</li></ol></li><li><p><strong>返回值</strong></p><p>Promise&lt;compoentRef&gt;，切换后的组件引用，用于调用所切换后组件的<a href="https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose" target="_blank" rel="noreferrer">暴露内容</a>。</p></li></ul><hr><h3 id="getcomponentref" tabindex="-1">getComponentRef <a class="header-anchor" href="#getcomponentref" aria-label="Permalink to &quot;getComponentRef&quot;">​</a></h3><p>获取当前ComponentNeo的组件引用。</p><ul><li><p><strong>参数</strong></p><p>无</p></li><li><p><strong>返回值</strong></p><p>compoentRef，当前组件的引用，可用于调用当前引用组件的<a href="https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose" target="_blank" rel="noreferrer">暴露内容</a>。</p></li></ul><h2 id="使用keepalive" tabindex="-1">使用KeepAlive <a class="header-anchor" href="#使用keepalive" aria-label="Permalink to &quot;使用KeepAlive&quot;">​</a></h2><p>组件并不能对直接通过<a href="https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive" target="_blank" rel="noreferrer">KeepAlive</a>包裹方式进行缓存，为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内，<a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank" rel="noreferrer">Transition</a>的实现也是同理</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>插槽内component除了传入is属性外，必须将compRef赋值给ref，否则将获取不到组件的引用实例。</p></div>',10)),n(t,null,{default:i(()=>[n(a(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(P)},{vue:i(()=>[n(I)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=r("h2",{id:"传递插槽",tabindex:"-1"},[g("传递插槽 "),r("a",{class:"header-anchor",href:"#传递插槽","aria-label":'Permalink to "传递插槽"'},"​")],-1)),e[6]||(e[6]=r("p",null,[g("使用component插槽给引入的组件传递插槽。实践中通常不会这么做，因为这样会导致所有组件"),r("strong",null,"都使用相同的插槽"),g("。")],-1)),n(t,null,{default:i(()=>[n(a(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(z)},{vue:i(()=>[n(L)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=x('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>is</td><td>引用的组件</td><td>string | Component</td><td>-</td></tr><tr><td>uniqueId</td><td>唯一标识</td><td>string</td><td>&#39;&#39;</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>toggleComponent</td><td>组件切换后触发</td><td>(compName?:string, compRef?:any)=&gt;void</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th><th>作用域</th></tr></thead><tbody><tr><td>default</td><td>自定义组件内容</td><td>Component:VNodal (节点)<br>compRef:Function (引用)<br>attrs:Record&lt;string,any&gt; (属性)<br>compName?:string (组件名)<br></td></tr></tbody></table><h2 id="暴露" tabindex="-1">暴露 <a class="header-anchor" href="#暴露" aria-label="Permalink to &quot;暴露&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>componentRef</td><td>当前ComponentNeo的组件引用</td><td>-</td></tr></tbody></table>',8))])}}});export{X as __pageData,H as default};
