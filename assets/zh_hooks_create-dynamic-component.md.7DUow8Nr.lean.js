const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/global-parent.jx8TrSh0.js","assets/chunks/index.CQDLX3Yv.js","assets/chunks/framework.D6Nbw8HZ.js","assets/chunks/index.BYQncKqd.js","assets/chunks/custom-slot.B1FfBYEN.js","assets/chunks/count.vue_vue_type_script_setup_true_lang.B_dFQ7Zx.js","assets/chunks/text.vue_vue_type_script_setup_true_lang.BECmYE8l.js","assets/chunks/keep-state.6qgrKKc6.js","assets/chunks/use-hook.CEs1cj0v.js","assets/chunks/base.Dj42LSp7.js"])))=>i.map(i=>d[i]);
import{D as r,v as p,ae as m,p as A,C as y,c as g,o as F,ag as b,af as d,G as n,j as a,ah as c,k as t,w as i,ai as u,a as s}from"./chunks/framework.D6Nbw8HZ.js";import{R as v,k as h}from"./chunks/index.DlEwPQCg.js";const x=`<script setup lang="ts">\r
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
`,_=`<script setup lang="ts">
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
`,R=`<script setup lang="ts">
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
    <button class="flex btn mb-2 flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <DynamicComponent v-slot="{ Component }" @rendered="handleRendered">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </DynamicComponent>
  </div>
</template>
`,T=`<script setup lang="tsx">
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
`,X=`<script setup lang="ts">
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
`,L=JSON.parse('{"title":"createDynamicComponent","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/create-dynamic-component.md","filePath":"zh/hooks/create-dynamic-component.md","lastUpdated":1747297309000}'),W={name:"zh/hooks/create-dynamic-component.md"},Y=Object.assign(W,{setup(M){const D=r();p(async()=>{D.value=(await m(async()=>{const{default:o}=await import("./chunks/global-parent.jx8TrSh0.js");return{default:o}},__vite__mapDeps([0,1,2,3]))).default});const B=r();p(async()=>{B.value=(await m(async()=>{const{default:o}=await import("./chunks/custom-slot.B1FfBYEN.js");return{default:o}},__vite__mapDeps([4,1,2,5,6]))).default});const E=r();p(async()=>{E.value=(await m(async()=>{const{default:o}=await import("./chunks/keep-state.6qgrKKc6.js");return{default:o}},__vite__mapDeps([7,1,2,5,6]))).default});const k=r();p(async()=>{k.value=(await m(async()=>{const{default:o}=await import("./chunks/use-hook.CEs1cj0v.js");return{default:o}},__vite__mapDeps([8,2,1,6]))).default});const l=A(!0),f=r();return p(async()=>{f.value=(await m(async()=>{const{default:o}=await import("./chunks/base.Dj42LSp7.js");return{default:o}},__vite__mapDeps([9,1,2]))).default}),(o,e)=>{const C=y("ClientOnly");return F(),g("div",null,[e[5]||(e[5]=b("",10)),d(n(t(v),null,null,512),[[c,l.value]]),n(C,null,{default:i(()=>[n(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:t(X)},u({_:2},[f.value?{name:"vue",fn:i(()=>[n(t(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=b("",4)),d(n(t(v),null,null,512),[[c,l.value]]),n(C,null,{default:i(()=>[n(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22use-hook.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fuse-hook.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22tsx%5C%22%3E%5Cnimport%20type%20%7B%20RenderedOptions%20%7D%20from%20'mortise-tenon-use'%3B%5Cnimport%20%7B%20createDynamicComponent%20%7D%20from%20'mortise-tenon-use'%3B%5Cnimport%20%7B%20h%2C%20ref%20%7D%20from%20'vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20DynamicComponent%2C%20renderComponent%20%7D%20%3D%20createDynamicComponent()%3B%5Cnconst%20inputValue%20%3D%20ref('')%3B%5Cn%5Cnfunction%20handleClick(index%20%3D%201)%20%7B%5Cn%20%20switch%20(index)%20%7B%5Cn%20%20%20%20case%201%3A%5Cn%20%20%20%20%20%20renderComponent(%5Cn%20%20%20%20%20%20%20%20Text%2C%5Cn%20%20%20%20%20%20%20%20%7B%20key%3A%20'input1'%2C%20vModel%3A%20inputValue%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20h('div'%2C%20%60%E8%BE%93%E5%85%A5%E6%A1%861%EF%BC%9A%24%7BslotData%3F.value%7D%60)%2C%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%20%20case%202%3A%5Cn%20%20%20%20%20%20renderComponent(%5Cn%20%20%20%20%20%20%20%20()%20%3D%3E%20import('.%2Ftext.vue')%2C%5Cn%20%20%20%20%20%20%20%20%7B%20'key'%3A%20'input2'%2C%20'vModel%3AmodelValue'%3A%20inputValue%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E8%BE%93%E5%85%A5%E6%A1%862%EF%BC%9A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20slotData%3F.value%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%20%20case%203%3A%5Cn%20%20%20%20%20%20renderComponent(%5Cn%20%20%20%20%20%20%20%20h(()%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20key%3D%5C%22input3%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%7BinputValue.value%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E8%BE%93%E5%85%A5%E6%A1%863%EF%BC%9A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20slotData%3F.value%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20))%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20handleRendered(%7B%20name%2C%20domRef%20%7D%3A%20RenderedOptions)%20%7B%5Cn%20%20console.warn('%E5%B7%B2%E5%88%87%E6%8D%A2'%2C%20name%2C%20domRef)%3B%5Cn%7D%5Cn%5CnhandleClick()%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3CText%20v-model%3D%5C%22inputValue%5C%22%20class%3D%5C%22mb-2%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cbutton%5Cn%20%20%20%20%20%20v-for%3D%5C%22i%20in%203%5C%22%5Cn%20%20%20%20%20%20%3Akey%3D%5C%22i%5C%22%5Cn%20%20%20%20%20%20class%3D%5C%22mb-2%20btn%5C%22%5Cn%20%20%20%20%20%20%40click%3D%5C%22handleClick(i)%5C%22%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%E7%BB%84%E4%BB%B6%7B%7B%20i%20%7D%7D%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CDynamicComponent%20%40rendered%3D%5C%22handleRendered%5C%22%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20px-1%20rounded-md%20mr-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:t(T)},u({_:2},[k.value?{name:"vue",fn:i(()=>[n(t(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=b("",4)),d(n(t(v),null,null,512),[[c,l.value]]),n(C,null,{default:i(()=>[n(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22keep-state.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fkeep-state.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20createDynamicComponent%20%7D%20from%20'mortise-tenon-use'%3B%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cnimport%20Count%20from%20'.%2Fcount.vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20DynamicComponent%2C%20renderComponent%2C%20getDomRef%20%7D%20%3D%20createDynamicComponent()%3B%5Cn%5Cnconst%20val%20%3D%20ref(false)%3B%5Cnfunction%20handleClick()%20%7B%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cn%20%20if%20(val.value)%20%7B%5Cn%20%20%20%20renderComponent(Count%2C%20%7B%20class%3A%20'c-red'%20%7D)%3B%5Cn%20%20%7D%5Cn%20%20else%20%7B%5Cn%20%20%20%20renderComponent(Text)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20handleRendered()%20%7B%5Cn%20%20console.warn('%E5%B7%B2%E5%88%87%E6%8D%A2'%2C%20getDomRef()%3F.value)%3B%5Cn%7D%5Cn%5CnhandleClick()%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22flex%20btn%20mb-2%20flex-col-reverse%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cn%20%20%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CDynamicComponent%20v-slot%3D%5C%22%7B%20Component%20%7D%5C%22%20%40rendered%3D%5C%22handleRendered%5C%22%3E%5Cn%20%20%20%20%20%20%3Ckeep-alive%3E%5Cn%20%20%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%5C%22Component%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2Fkeep-alive%3E%5Cn%20%20%20%20%3C%2FDynamicComponent%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22count.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fcount.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cn%5CndefineOptions(%7B%20name%3A%20'ExampleCount'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20ref(0)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22cursor-pointer%5C%22%20%40click%3D%5C%22value%2B%2B%5C%22%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22count%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cn%20%20%20%20%20%20%E7%82%B9%E5%87%BB%EF%BC%9A%7B%7B%20value%20%7D%7D%5Cn%20%20%20%20%3C%2Fslot%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20px-1%20rounded-md%20mr-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:t(R)},u({_:2},[E.value?{name:"vue",fn:i(()=>[n(t(E))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=a("h2",{id:"传递插槽",tabindex:"-1"},[s("传递插槽 "),a("a",{class:"header-anchor",href:"#传递插槽","aria-label":'Permalink to "传递插槽"'},"​")],-1)),e[9]||(e[9]=a("p",null,[s("可以通过 "),a("code",null,"component"),s(" 的插槽传递内容给引入的组件，但这种方式会导致所有组件使用相同的插槽，并使 "),a("code",null,"renderComponent"),s(" 中的插槽参数失效，需要谨慎使用。")],-1)),d(n(t(v),null,null,512),[[c,l.value]]),n(C,null,{default:i(()=>[n(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22custom-slot.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fcustom-slot.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20createDynamicComponent%20%7D%20from%20'mortise-tenon-use'%3B%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cnimport%20Count%20from%20'.%2Fcount.vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20DynamicComponent%2C%20renderComponent%20%7D%20%3D%20createDynamicComponent()%3B%5Cn%5Cnconst%20val%20%3D%20ref(false)%3B%5Cnfunction%20handleClick()%20%7B%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cn%20%20if%20(val.value)%20%7B%5Cn%20%20%20%20renderComponent(Count%2C%20%7B%20class%3A%20'c-green'%20%7D)%3B%5Cn%20%20%7D%5Cn%20%20else%20%7B%5Cn%20%20%20%20renderComponent(Text)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5CnhandleClick()%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%20flex%20flex-col-reverse%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cn%20%20%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CDynamicComponent%20v-slot%3D%5C%22%7B%20Component%2C%20compName%20%7D%5C%22%20unique-id%3D%5C%22uniqueId3%5C%22%3E%5Cn%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%5C%22Component%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%3Ctemplate%20%23count%3D%5C%22%7B%20value%20%7D%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%7B%7B%20compName%20%7D%7D%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E6%A7%BD%EF%BC%8C%E7%82%B9%E5%87%BB%2B1%EF%BC%9A%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%5Cn%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3D%5C%22%7B%20value%20%7D%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%7B%7B%20compName%20%7D%7D%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E6%A7%BD%EF%BC%8C%E8%BE%93%E5%87%BA%EF%BC%9A%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%5Cn%20%20%20%20%20%20%3C%2Fcomponent%3E%5Cn%20%20%20%20%3C%2FDynamicComponent%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22count.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fcount.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cn%5CndefineOptions(%7B%20name%3A%20'ExampleCount'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20ref(0)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22cursor-pointer%5C%22%20%40click%3D%5C%22value%2B%2B%5C%22%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22count%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cn%20%20%20%20%20%20%E7%82%B9%E5%87%BB%EF%BC%9A%7B%7B%20value%20%7D%7D%5Cn%20%20%20%20%3C%2Fslot%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%5CndefineExpose(%7B%20value%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20px-1%20rounded-md%20mr-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:t(_)},u({_:2},[B.value?{name:"vue",fn:i(()=>[n(t(B))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=a("h2",{id:"全局组件",tabindex:"-1"},[s("全局组件 "),a("a",{class:"header-anchor",href:"#全局组件","aria-label":'Permalink to "全局组件"'},"​")],-1)),e[11]||(e[11]=a("p",null,[s("可以通过"),a("code",null,"createGlobalState"),s("方法创建全局组件，调用时便可以让组件在不同文件下修改更改。")],-1)),d(n(t(v),null,null,512),[[c,l.value]]),n(C,null,{default:i(()=>[n(t(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22global-parent.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fglobal-parent.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20GlobalChild%20from%20'.%2Fglobal-child.vue'%3B%5Cr%5Cnimport%20%7B%20globalDynamicComponent%20%7D%20from%20'.%2Fuse-global'%3B%5Cr%5Cn%5Cr%5Cnconst%20%7B%20DynamicComponent%20%7D%20%3D%20globalDynamicComponent()%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cdiv%3E%5Cr%5Cn%20%20%20%20%3CGlobalChild%20%2F%3E%5Cr%5Cn%20%20%20%20%3CDynamicComponent%20%2F%3E%5Cr%5Cn%20%20%3C%2Fdiv%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%2C%22global-child.vue%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fglobal-child.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cr%5Cnimport%20%7B%20h%2C%20ref%20%7D%20from%20'vue'%3B%5Cr%5Cnimport%20%7B%20globalDynamicComponent%20%7D%20from%20'.%2Fuse-global'%3B%5Cr%5Cn%5Cr%5Cnconst%20comp1%20%3D%20h('div'%2C%20'Hollo')%3B%5Cr%5Cnconst%20comp2%20%3D%20h('div'%2C%20'World')%3B%5Cr%5Cn%5Cr%5Cnconst%20val%20%3D%20ref(true)%3B%5Cr%5Cn%5Cr%5Cnconst%20%7B%20renderComponent%20%7D%20%3D%20globalDynamicComponent()%3B%5Cr%5Cn%5Cr%5Cnfunction%20handleClick()%20%7B%5Cr%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cr%5Cn%20%20if%20(val.value)%20%7B%5Cr%5Cn%20%20%20%20renderComponent(comp1)%3B%5Cr%5Cn%20%20%7D%5Cr%5Cn%20%20else%20%7B%5Cr%5Cn%20%20%20%20renderComponent(comp2)%3B%5Cr%5Cn%20%20%7D%5Cr%5Cn%7D%5Cr%5Cn%5Cr%5CnhandleClick()%3B%5Cr%5Cn%3C%2Fscript%3E%5Cr%5Cn%5Cr%5Cn%3Ctemplate%3E%5Cr%5Cn%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cr%5Cn%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cr%5Cn%20%20%3C%2Fbutton%3E%5Cr%5Cn%3C%2Ftemplate%3E%5Cr%5Cn%22%7D%2C%22use-global.ts%22%3A%7B%22filename%22%3A%22hooks%2Fcreate-dynamic-component%2Fuse-global.ts%22%2C%22code%22%3A%22import%20%7B%20createGlobalState%20%7D%20from%20'%40vueuse%2Fcore'%3B%5Cr%5Cnimport%20%7B%20createDynamicComponent%20%7D%20from%20'mortise-tenon-use'%3B%5Cr%5Cn%5Cr%5Cnexport%20const%20globalDynamicComponent%20%3D%20createGlobalState(createDynamicComponent)%3B%5Cr%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[4]||(e[4]=()=>{l.value=!1}),vueCode:t(x)},u({_:2},[D.value?{name:"vue",fn:i(()=>[n(t(D))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[12]||(e[12]=a("h2",{id:"源码",tabindex:"-1"},[s("源码 "),a("a",{class:"header-anchor",href:"#源码","aria-label":'Permalink to "源码"'},"​")],-1)),e[13]||(e[13]=a("p",null,[a("a",{href:"https://github.com/nixwai/mortise-tenon/blob/main/packages/hooks/src/createDynamicComponent/index.ts",target:"_blank",rel:"noreferrer"},"源代码")],-1))])}}});export{L as __pageData,Y as default};
