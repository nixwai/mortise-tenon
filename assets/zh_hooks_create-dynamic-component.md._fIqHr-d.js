const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/text.DkL1fbGe.js","assets/chunks/framework.D6wgcOBA.js","assets/chunks/index.CQfrTCPU.js","assets/chunks/index.CdgJ9okS.js"])))=>i.map(i=>d[i]);
import{am as S,d as D,h as T,k as i,ad as B,P as L,an as N,p as E,c as v,o as u,G as a,r as w,a as d,t as b,ao as G,ae as f,ap as P,j as p,w as m,b as M,H as X,aq as Y,F as J,B as O,ar as Z,C as $,af as V,ag as A}from"./chunks/framework.D6wgcOBA.js";import{c as j}from"./chunks/index.CQfrTCPU.js";import{O as g,E as y}from"./chunks/index.CdgJ9okS.js";const U=`<script setup lang="ts">\r
import GlobalChild from './global-child.vue';\r
import { globalDynamicComponent } from './use-global';\r
\r
const { DynamicComponent } = globalDynamicComponent();\r
<\/script>\r
\r
<template>\r
  <div>\r
    <GlobalChild />\r
    <DynamicComponent />\r
  </div>\r
</template>\r
`;function x(){const s=S({});async function o(e,n,C){var r;try{return s.component=typeof e=="function"?(await e()).default:e,s.attributes=l(n),s.slots=C||{},await L(),(r=s.onRendered)==null||r.call(s),s.domRef}catch(t){console.error(t)}}function l(e){const n={};for(const C in e){const r=e[C];if(C.startsWith("vModel:")||C==="vModel"){const t=C.replace(/^(vModel):?/,"")||"modelValue";n[t]=r,N(r)&&(n[`onUpdate:${t}`]=c=>r.value=c)}else n[C]=r}return n}return{DynamicComponent:D({name:"DynamicComponent",inheritAttrs:!1,props:{is:{type:[String,Object,Function],default:void 0}},emits:{rendered:e=>!0},setup(e,{slots:n,attrs:C,emit:r}){const t=k=>s.domRef=k,c=T(()=>s.component||e.is||Symbol.for("v-cmt")),h=T(()=>typeof c.value=="object"&&"name"in c.value?c.value.name:void 0),_=T(()=>{const k={};for(const R in s.attributes)typeof s.attributes[R]<"u"&&(k[R]=i(s.attributes[R]));return Object.assign(k,C)});return s.onRendered=()=>{r("rendered",{name:h.value,domRef:s.domRef,attributes:_.value})},n.default?()=>{var k;return(k=n.default)==null?void 0:k.call(n,{Component:B(c.value,{..._.value,ref:t},s.slots),attrs:_.value,compName:h.value})}:()=>B(c.value,{..._.value,ref:t},s.slots)}}),renderComponent:o,getDomRef:()=>s.domRef}}const W=j(x),z=D({__name:"global-child",setup(s){const o=B("div","Hollo"),l=B("div","World"),e=E(!0),{renderComponent:n}=W();function C(){e.value=!e.value,e.value?n(o):n(l)}return C(),(r,t)=>(u(),v("button",{class:"btn mb-2",onClick:C}," 切换组件 "))}}),H=D({__name:"global-parent",setup(s){const{DynamicComponent:o}=W();return(l,e)=>(u(),v("div",null,[a(z),a(i(o))]))}}),I=`<script setup lang="ts">
import { createDynamicComponent } from 'mortise-tenon-use';
import { ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { DynamicComponent, renderComponent } = createDynamicComponent();

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    renderComponent(Count, { class: 'c-green' });
  }
  else {
    renderComponent(Text);
  }
}

handleClick();
<\/script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <DynamicComponent v-slot="{ Component, compName }" unique-id="uniqueId3">
      <component :is="Component">
        <template #count="{ value }">
          <div>我是{{ compName }}的自定义插槽，点击+1：{{ value }}</div>
        </template>
        <template #text="{ value }">
          <div>我是{{ compName }}的自定义插槽，输出：{{ value }}</div>
        </template>
      </component>
    </DynamicComponent>
  </div>
</template>
`,q=D({name:"ExampleCount",__name:"count",setup(s,{expose:o}){const l=E(0);return o({value:l}),(e,n)=>(u(),v("div",{class:"cursor-pointer",onClick:n[0]||(n[0]=C=>l.value++)},[w(e.$slots,"count",{value:l.value},()=>[d(" 点击："+b(l.value),1)])]))}}),F=D({name:"ExampleText",__name:"text",props:{modelValue:{type:String,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(s,{expose:o}){const l=G(s,"modelValue");return o({value:l}),(e,n)=>(u(),v("div",null,[w(e.$slots,"text",{value:l.value}),f(p("input",{"onUpdate:modelValue":n[0]||(n[0]=C=>l.value=C),type:"text",class:"b-1 b-gray b-solid rounded-md mr-1 px-1"},null,512),[[P,l.value]])]))}}),K=D({__name:"custom-slot",setup(s){const{DynamicComponent:o,renderComponent:l}=x(),e=E(!1);function n(){e.value=!e.value,e.value?l(q,{class:"c-green"}):l(F)}return n(),(C,r)=>(u(),v("div",null,[p("button",{class:"btn mb-2 flex flex-col-reverse",onClick:n}," 切换组件 "),a(i(o),{"unique-id":"uniqueId3"},{default:m(({Component:t,compName:c})=>[(u(),M(X(t),null,{count:m(({value:h})=>[p("div",null,"我是"+b(c)+"的自定义插槽，点击+1："+b(h),1)]),text:m(({value:h})=>[p("div",null,"我是"+b(c)+"的自定义插槽，输出："+b(h),1)]),_:2},1024))]),_:1})]))}}),Q=`<script setup lang="ts">
import { createDynamicComponent } from 'mortise-tenon-use';
import { ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { DynamicComponent, renderComponent, getDomRef } = createDynamicComponent();

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    renderComponent(Count, { class: 'c-red' });
  }
  else {
    renderComponent(Text);
  }
}

function handleRendered() {
  console.warn('已切换', getDomRef()?.value);
}

handleClick();
<\/script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <DynamicComponent v-slot="{ Component }" @rendered="handleRendered">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </DynamicComponent>
  </div>
</template>
`,e2=D({__name:"keep-state",setup(s){const{DynamicComponent:o,renderComponent:l,getDomRef:e}=x(),n=E(!1);function C(){n.value=!n.value,n.value?l(q,{class:"c-red"}):l(F)}function r(){var t;console.warn("已切换",(t=e())==null?void 0:t.value)}return C(),(t,c)=>(u(),v("div",null,[p("button",{class:"btn mb-2 flex flex-col-reverse",onClick:C}," 切换组件 "),a(i(o),{onRendered:r},{default:m(({Component:h})=>[(u(),M(Y,null,[(u(),M(X(h)))],1024))]),_:1})]))}}),n2=`<script setup lang="tsx">
import type { RenderedOptions } from 'mortise-tenon-use';
import { createDynamicComponent } from 'mortise-tenon-use';
import { h, ref } from 'vue';
import Text from './text.vue';

const { DynamicComponent, renderComponent } = createDynamicComponent();
const inputValue = ref('');

function handleClick(index = 1) {
  switch (index) {
    case 1:
      renderComponent(
        Text,
        { key: 'input1', vModel: inputValue },
        {
          text: (slotData: { value: string }) =>
            h('div', \`输入框1：\${slotData?.value}\`),
        },
      );
      break;
    case 2:
      renderComponent(
        () => import('./text.vue'),
        { 'key': 'input2', 'vModel:modelValue': inputValue },
        {
          text: (slotData: { value: string }) => (
            <div>
              输入框2：
              { slotData?.value }
            </div>
          ),
        },
      );
      break;
    case 3:
      renderComponent(
        h(() => (
          <Text
            key="input3"
            v-model={inputValue.value}
          >
            {{
              text: (slotData: { value: string }) => (
                <div>
                  输入框3：
                  { slotData?.value }
                </div>
              ),
            }}
          </Text>
        )),
      );
      break;
  }
}

function handleRendered({ name, domRef }: RenderedOptions) {
  console.warn('已切换', name, domRef);
}

handleClick();
<\/script>

<template>
  <div>
    <Text v-model="inputValue" class="mb-2" />
    <button
      v-for="i in 3"
      :key="i"
      class="mb-2 btn"
      @click="handleClick(i)"
    >
      组件{{ i }}
    </button>
    <DynamicComponent @rendered="handleRendered" />
  </div>
</template>
`,t2=["onClick"],a2=D({__name:"use-hook",setup(s){const{DynamicComponent:o,renderComponent:l}=x(),e=E("");function n(r=1){switch(r){case 1:l(F,{key:"input1",vModel:e},{text:t=>B("div",`输入框1：${t==null?void 0:t.value}`)});break;case 2:l(()=>Z(()=>import("./chunks/text.DkL1fbGe.js"),__vite__mapDeps([0,1,2,3])),{key:"input2","vModel:modelValue":e},{text:t=>a("div",null,[d("输入框2："),t==null?void 0:t.value])});break;case 3:l(B(()=>a(F,{key:"input3",modelValue:e.value,"onUpdate:modelValue":t=>e.value=t},{text:t=>a("div",null,[d("输入框3："),t==null?void 0:t.value])})));break}}function C({name:r,domRef:t}){console.warn("已切换",r,t)}return n(),(r,t)=>(u(),v("div",null,[a(F,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=c=>e.value=c),class:"mb-2"},null,8,["modelValue"]),(u(),v(J,null,O(3,c=>p("button",{key:c,class:"mb-2 btn",onClick:h=>n(c)}," 组件"+b(c),9,t2)),64)),a(i(o),{onRendered:C})]))}}),o2=`<script setup lang="ts">
import { createDynamicComponent } from 'mortise-tenon-use';
import { h, ref } from 'vue';

const comp1 = h('div', 'Hollo');
const comp2 = h('div', 'World');

const val = ref(true);

const { DynamicComponent } = createDynamicComponent();
<\/script>

<template>
  <div>
    <button class="btn mb-2" @click="val = !val">
      切换默认内容
    </button>
    <DynamicComponent :is="val ? comp1 : comp2" class="c-blue" />
  </div>
</template>
`,l2=D({__name:"base",setup(s){const o=B("div","Hollo"),l=B("div","World"),e=E(!0),{DynamicComponent:n}=x();return(C,r)=>(u(),v("div",null,[p("button",{class:"btn mb-2",onClick:r[0]||(r[0]=t=>e.value=!e.value)}," 切换默认内容 "),a(i(n),{is:e.value?i(o):i(l),class:"c-blue"},null,8,["is"])]))}}),p2=JSON.parse('{"title":"createDynamicComponent","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/create-dynamic-component.md","filePath":"zh/hooks/create-dynamic-component.md","lastUpdated":1747297309000}'),s2={name:"zh/hooks/create-dynamic-component.md"},c2=Object.assign(s2,{setup(s){const o=E(!0);return(l,e)=>{const n=$("ClientOnly");return u(),v("div",null,[e[5]||(e[5]=V(`<h1 id="createdynamiccomponent" tabindex="-1">createDynamicComponent <a class="header-anchor" href="#createdynamiccomponent" aria-label="Permalink to &quot;createDynamicComponent&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>该函数仅支持vue3使用</p></div><p>创建动态组件，作用与 Vue 的 <a href="https://cn.vuejs.org/api/built-in-special-elements.html#component" target="_blank" rel="noreferrer">component</a> 类似，但希望通过更好的方法进行切换组件，可以单独传入切换后组件、参数、插槽。</p><h2 id="dynamiccomponent" tabindex="-1">DynamicComponent <a class="header-anchor" href="#dynamiccomponent" aria-label="Permalink to &quot;DynamicComponent&quot;">​</a></h2><p>动态组件，在未通过<code>renderComponent</code>进行渲染时的组件默认显示为<code>is</code>属性指定的组件。</p><h4 id="属性-is" tabindex="-1">属性: is <a class="header-anchor" href="#属性-is" aria-label="Permalink to &quot;属性: is&quot;">​</a></h4><p>默认渲染的组件，当<code>renderComponent</code>未调用或渲染的内容为空时，将显示该属性传入的组件。</p><h4 id="事件-rendered" tabindex="-1">事件: rendered <a class="header-anchor" href="#事件-rendered" aria-label="Permalink to &quot;事件: rendered&quot;">​</a></h4><p>调用<code>renderComponent</code>方法渲染组件后触发。返回的参数类型为：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RenderedOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 组件名称 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 属性 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  attributes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /** 实例引用 */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  domRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,10)),f(a(i(g),null,null,512),[[A,o.value]]),a(n,null,{default:m(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:i(o2)},{vue:m(()=>[a(l2)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=V(`<h2 id="rendercomponent" tabindex="-1">renderComponent <a class="header-anchor" href="#rendercomponent" aria-label="Permalink to &quot;renderComponent&quot;">​</a></h2><p>动态更改<code>DynamicComponent</code>渲染的内容。</p><ul><li><p><strong>参数</strong></p><ol><li><strong>component</strong> (可选): 需要显示的组件，可支持 VNode 类型或<code>import</code>导入方式（如 <code>()=&gt;import(&quot;组件路径&quot;)</code>）。</li><li><strong>props</strong> (可选): 组件的属性对象，可支持事件绑定和双向绑定（如 <code>onEventName</code> 和 <code>vModel:property</code>）。</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> inputValues</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  input1: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  input2: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  input3: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// renderComponent上的vModel仅能绑定ref类型，对于reactive可使用toRef或toRefs进行绑定</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> valueAsRefs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> toRefs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inputValues);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">renderComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Text, { vModel: valueAsRefs.input1 });</span></span></code></pre></div><ol start="3"><li><strong>slots</strong> (可选): 插槽定义，参考 <a href="https://cn.vuejs.org/api/render-function.html#h" target="_blank" rel="noreferrer">h 函数</a> 中的插槽定义，不可与传递插槽方式同时使用。</li></ol></li><li><p><strong>返回值</strong></p><p>返回当前渲染的组件实例，可用于调用组件的 <a href="https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose" target="_blank" rel="noreferrer">暴露内容</a>。</p></li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>当切换的组件是同一个组件时，添加 <code>key</code> 属性进行区分，确保每个组件实例独立渲染。</p></div>`,4)),f(a(i(g),null,null,512),[[A,o.value]]),a(n,null,{default:m(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22use-hook.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fuse-hook.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22tsx%5C%22%3E%5Cnimport%20type%20%7B%20RenderedOptions%20%7D%20from%20'mortise-tenon-use'%3B%5Cnimport%20%7B%20createDynamicComponent%20%7D%20from%20'mortise-tenon-use'%3B%5Cnimport%20%7B%20h%2C%20ref%20%7D%20from%20'vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20DynamicComponent%2C%20renderComponent%20%7D%20%3D%20createDynamicComponent()%3B%5Cnconst%20inputValue%20%3D%20ref('')%3B%5Cn%5Cnfunction%20handleClick(index%20%3D%201)%20%7B%5Cn%20%20switch%20(index)%20%7B%5Cn%20%20%20%20case%201%3A%5Cn%20%20%20%20%20%20renderComponent(%5Cn%20%20%20%20%20%20%20%20Text%2C%5Cn%20%20%20%20%20%20%20%20%7B%20key%3A%20'input1'%2C%20vModel%3A%20inputValue%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20h('div'%2C%20%60%E8%BE%93%E5%85%A5%E6%A1%861%EF%BC%9A%24%7BslotData%3F.value%7D%60)%2C%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%20%20case%202%3A%5Cn%20%20%20%20%20%20renderComponent(%5Cn%20%20%20%20%20%20%20%20()%20%3D%3E%20import('.%2Ftext.vue')%2C%5Cn%20%20%20%20%20%20%20%20%7B%20'key'%3A%20'input2'%2C%20'vModel%3AmodelValue'%3A%20inputValue%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E8%BE%93%E5%85%A5%E6%A1%862%EF%BC%9A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20slotData%3F.value%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%20%20case%203%3A%5Cn%20%20%20%20%20%20renderComponent(%5Cn%20%20%20%20%20%20%20%20h(()%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20key%3D%5C%22input3%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%7BinputValue.value%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E8%BE%93%E5%85%A5%E6%A1%863%EF%BC%9A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20slotData%3F.value%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20))%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20handleRendered(%7B%20name%2C%20domRef%20%7D%3A%20RenderedOptions)%20%7B%5Cn%20%20console.warn('%E5%B7%B2%E5%88%87%E6%8D%A2'%2C%20name%2C%20domRef)%3B%5Cn%7D%5Cn%5CnhandleClick()%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3CText%20v-model%3D%5C%22inputValue%5C%22%20class%3D%5C%22mb-2%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cbutton%5Cn%20%20%20%20%20%20v-for%3D%5C%22i%20in%203%5C%22%5Cn%20%20%20%20%20%20%3Akey%3D%5C%22i%5C%22%5Cn%20%20%20%20%20%20class%3D%5C%22mb-2%20btn%5C%22%5Cn%20%20%20%20%20%20%40click%3D%5C%22handleClick(i)%5C%22%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%E7%BB%84%E4%BB%B6%7B%7B%20i%20%7D%7D%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CDynamicComponent%20%40rendered%3D%5C%22handleRendered%5C%22%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20rounded-md%20mr-1%20px-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:i(n2)},{vue:m(()=>[a(a2)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=V('<h2 id="getdomref" tabindex="-1">getDomRef <a class="header-anchor" href="#getdomref" aria-label="Permalink to &quot;getDomRef&quot;">​</a></h2><p>获取当前渲染的组件实例。</p><h2 id="使用-keepalive" tabindex="-1">使用 KeepAlive <a class="header-anchor" href="#使用-keepalive" aria-label="Permalink to &quot;使用 KeepAlive&quot;">​</a></h2><p>组件并不能对直接通过<a href="https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive" target="_blank" rel="noreferrer">KeepAlive</a>包裹方式进行缓存，为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内，<a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank" rel="noreferrer">Transition</a>的实现也是同理。</p>',4)),f(a(i(g),null,null,512),[[A,o.value]]),a(n,null,{default:m(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22keep-state.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fkeep-state.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20createDynamicComponent%20%7D%20from%20'mortise-tenon-use'%3B%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cnimport%20Count%20from%20'.%2Fcount.vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20DynamicComponent%2C%20renderComponent%2C%20getDomRef%20%7D%20%3D%20createDynamicComponent()%3B%5Cn%5Cnconst%20val%20%3D%20ref(false)%3B%5Cnfunction%20handleClick()%20%7B%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cn%20%20if%20(val.value)%20%7B%5Cn%20%20%20%20renderComponent(Count%2C%20%7B%20class%3A%20'c-red'%20%7D)%3B%5Cn%20%20%7D%5Cn%20%20else%20%7B%5Cn%20%20%20%20renderComponent(Text)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20handleRendered()%20%7B%5Cn%20%20console.warn('%E5%B7%B2%E5%88%87%E6%8D%A2'%2C%20getDomRef()%3F.value)%3B%5Cn%7D%5Cn%5CnhandleClick()%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%20flex%20flex-col-reverse%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cn%20%20%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CDynamicComponent%20v-slot%3D%5C%22%7B%20Component%20%7D%5C%22%20%40rendered%3D%5C%22handleRendered%5C%22%3E%5Cn%20%20%20%20%20%20%3Ckeep-alive%3E%5Cn%20%20%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%5C%22Component%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2Fkeep-alive%3E%5Cn%20%20%20%20%3C%2FDynamicComponent%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22count.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fcount.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cn%5CndefineOptions(%7B%20name%3A%20'ExampleCount'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20ref(0)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22cursor-pointer%5C%22%20%40click%3D%5C%22value%2B%2B%5C%22%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22count%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cn%20%20%20%20%20%20%E7%82%B9%E5%87%BB%EF%BC%9A%7B%7B%20value%20%7D%7D%5Cn%20%20%20%20%3C%2Fslot%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20rounded-md%20mr-1%20px-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:i(Q)},{vue:m(()=>[a(e2)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=p("h2",{id:"传递插槽",tabindex:"-1"},[d("传递插槽 "),p("a",{class:"header-anchor",href:"#传递插槽","aria-label":'Permalink to "传递插槽"'},"​")],-1)),e[9]||(e[9]=p("p",null,[d("可以通过 "),p("code",null,"component"),d(" 的插槽传递内容给引入的组件，但这种方式会导致所有组件使用相同的插槽，并使 "),p("code",null,"renderComponent"),d(" 中的插槽参数失效，需要谨慎使用。")],-1)),f(a(i(g),null,null,512),[[A,o.value]]),a(n,null,{default:m(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22custom-slot.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fcustom-slot.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20createDynamicComponent%20%7D%20from%20'mortise-tenon-use'%3B%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cnimport%20Count%20from%20'.%2Fcount.vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20DynamicComponent%2C%20renderComponent%20%7D%20%3D%20createDynamicComponent()%3B%5Cn%5Cnconst%20val%20%3D%20ref(false)%3B%5Cnfunction%20handleClick()%20%7B%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cn%20%20if%20(val.value)%20%7B%5Cn%20%20%20%20renderComponent(Count%2C%20%7B%20class%3A%20'c-green'%20%7D)%3B%5Cn%20%20%7D%5Cn%20%20else%20%7B%5Cn%20%20%20%20renderComponent(Text)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5CnhandleClick()%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%20flex%20flex-col-reverse%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cn%20%20%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CDynamicComponent%20v-slot%3D%5C%22%7B%20Component%2C%20compName%20%7D%5C%22%20unique-id%3D%5C%22uniqueId3%5C%22%3E%5Cn%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%5C%22Component%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%3Ctemplate%20%23count%3D%5C%22%7B%20value%20%7D%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%7B%7B%20compName%20%7D%7D%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E6%A7%BD%EF%BC%8C%E7%82%B9%E5%87%BB%2B1%EF%BC%9A%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%5Cn%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3D%5C%22%7B%20value%20%7D%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%7B%7B%20compName%20%7D%7D%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E6%A7%BD%EF%BC%8C%E8%BE%93%E5%87%BA%EF%BC%9A%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%5Cn%20%20%20%20%20%20%3C%2Fcomponent%3E%5Cn%20%20%20%20%3C%2FDynamicComponent%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22count.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fcount.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cn%5CndefineOptions(%7B%20name%3A%20'ExampleCount'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20ref(0)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22cursor-pointer%5C%22%20%40click%3D%5C%22value%2B%2B%5C%22%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22count%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cn%20%20%20%20%20%20%E7%82%B9%E5%87%BB%EF%BC%9A%7B%7B%20value%20%7D%7D%5Cn%20%20%20%20%3C%2Fslot%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20rounded-md%20mr-1%20px-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:i(I)},{vue:m(()=>[a(K)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=p("h2",{id:"全局组件",tabindex:"-1"},[d("全局组件 "),p("a",{class:"header-anchor",href:"#全局组件","aria-label":'Permalink to "全局组件"'},"​")],-1)),e[11]||(e[11]=p("p",null,[d("可以通过"),p("code",null,"createGlobalState"),d("方法创建全局组件，调用时便可以让组件在不同文件下修改更改。")],-1)),f(a(i(g),null,null,512),[[A,o.value]]),a(n,null,{default:m(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22global-parent.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fglobal-parent.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20GlobalChild%20from%20'.%2Fglobal-child.vue'%3B%5Cr%5Cnimport%20%7B%20globalDynamicComponent%20%7D%20from%20'.%2Fuse-global'%3B%5Cr%5Cn%5Cr%5Cnconst%20%7B%20DynamicComponent%20%7D%20%3D%20globalDynamicComponent()%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cdiv%3E%5Cr%5Cn%20%20%20%20%3CGlobalChild%20%2F%3E%5Cr%5Cn%20%20%20%20%3CDynamicComponent%20%2F%3E%5Cr%5Cn%20%20%3C%2Fdiv%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%2C%22global-child.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fglobal-child.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20%7B%20h%2C%20ref%20%7D%20from%20'vue'%3B%5Cr%5Cnimport%20%7B%20globalDynamicComponent%20%7D%20from%20'.%2Fuse-global'%3B%5Cr%5Cn%5Cr%5Cnconst%20comp1%20%3D%20h('div'%2C%20'Hollo')%3B%5Cr%5Cnconst%20comp2%20%3D%20h('div'%2C%20'World')%3B%5Cr%5Cn%5Cr%5Cnconst%20val%20%3D%20ref(true)%3B%5Cr%5Cn%5Cr%5Cnconst%20%7B%20renderComponent%20%7D%20%3D%20globalDynamicComponent()%3B%5Cr%5Cn%5Cr%5Cnfunction%20handleClick()%20%7B%5Cr%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cr%5Cn%20%20if%20(val.value)%20%7B%5Cr%5Cn%20%20%20%20renderComponent(comp1)%3B%5Cr%5Cn%20%20%7D%5Cr%5Cn%20%20else%20%7B%5Cr%5Cn%20%20%20%20renderComponent(comp2)%3B%5Cr%5Cn%20%20%7D%5Cr%5Cn%7D%5Cr%5Cn%5Cr%5CnhandleClick()%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cr%5Cn%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cr%5Cn%20%20%3C%2Fbutton%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%2C%22use-global.ts%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fuse-global.ts%22%2C%22code%22%3A%22import%20%7B%20createGlobalState%20%7D%20from%20'%40vueuse%2Fcore'%3B%5Cr%5Cnimport%20%7B%20createDynamicComponent%20%7D%20from%20'mortise-tenon-use'%3B%5Cr%5Cn%5Cr%5Cnexport%20const%20globalDynamicComponent%20%3D%20createGlobalState(createDynamicComponent)%3B%5Cr%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{o.value=!1}),vueCode:i(U)},{vue:m(()=>[a(H)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=p("h2",{id:"源码",tabindex:"-1"},[d("源码 "),p("a",{class:"header-anchor",href:"#源码","aria-label":'Permalink to "源码"'},"​")],-1)),e[13]||(e[13]=p("p",null,[p("a",{href:"https://github.com/nixwai/mortise-tenon/blob/main/packages/hooks/src/createDynamicComponent/index.ts",target:"_blank",rel:"noreferrer"},"源代码")],-1))])}}});export{F as _,p2 as __pageData,c2 as default};
