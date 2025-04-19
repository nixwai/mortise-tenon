const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/text.BH0_FtBI.js","assets/zh_components_component-neo.md.caolBRM_.js","assets/chunks/framework.BqQ-1jS-.js","assets/chunks/index.BwxL97aX.js","assets/chunks/index.Wxu1pIBX.js"])))=>i.map(i=>d[i]);
import{ae as P,P as S,d as E,p as D,c as h,o as c,r as q,a as g,t as f,af as X,ag as B,ah as j,j as u,v as R,G as l,k as s,w as C,b as N,H as V,ai as L,aj as W,ak as Z,F as $,B as O,ad as _,al as J,C as U,am as k,an as A}from"./chunks/framework.BqQ-1jS-.js";import{M as z,n as y}from"./chunks/index.BwxL97aX.js";import{O as x,E as F}from"./chunks/index.Wxu1pIBX.js";const Y=`<script setup lang="ts">
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';
import { onMounted, ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { toggleComponent } = useComponentNeo('uniqueId3');

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    toggleComponent(Count, { class: 'c-green' });
  }
  else {
    toggleComponent(Text);
  }
}

onMounted(() => {
  handleClick();
});
<\/script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <MtComponentNeo v-slot="{ Component, compRef, compName }" unique-id="uniqueId3">
      <component :is="Component" :ref="compRef">
        <template #count="{ value }">
          <div>我是{{ compName }}的自定义插槽，点击+1：{{ value }}</div>
        </template>
        <template #text="{ value }">
          <div>我是{{ compName }}的自定义插槽，输出：{{ value }}</div>
        </template>
      </component>
    </MtComponentNeo>
  </div>
</template>
`;function M(p=""){const{setComponent:n,getComponent:a}=z();async function e(t,d,r){var m;try{const o=typeof t=="function"?(await t()).default:t,i={};for(let v in d){const b=d[v];v.startsWith("vModel:")||v==="vModel"?(v=v.replace(/^(vModel):?/,"")||"modelValue",i[v]=b,P(b)&&(i[`onUpdate:${v}`]=I=>b.value=I)):i[v]=b}return n(p,{comp:o,attrs:i,slots:r||{}}),await S(),(m=a(p))==null?void 0:m.Instance.value}catch(o){console.error(o)}}return{getComponentRef:()=>{var t;return(t=a(p))==null?void 0:t.Instance.value},toggleComponent:e}}const w=E({name:"ExampleCount",__name:"count",setup(p){const n=D(0);return(a,e)=>(c(),h("div",{class:"cursor-pointer",onClick:e[0]||(e[0]=t=>n.value++)},[q(a.$slots,"count",{value:n.value},()=>[g(" 点击："+f(n.value),1)])]))}}),T=E({name:"ExampleText",__name:"text",props:{modelValue:{type:String,default:""},modelModifiers:{}},emits:["update:modelValue"],setup(p){const n=X(p,"modelValue");return(a,e)=>(c(),h("div",null,[q(a.$slots,"text",{value:n.value}),B(u("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),type:"text",class:"b-1 b-gray b-solid rounded-md mr-1 px-1"},null,512),[[j,n.value]])]))}}),G=E({__name:"custom-slot",setup(p){const{toggleComponent:n}=M("uniqueId3"),a=D(!1);function e(){a.value=!a.value,a.value?n(w,{class:"c-green"}):n(T)}return R(()=>{e()}),(t,d)=>(c(),h("div",null,[u("button",{class:"btn mb-2 flex flex-col-reverse",onClick:e}," 切换组件 "),l(s(y),{"unique-id":"uniqueId3"},{default:C(({Component:r,compRef:m,compName:o})=>[(c(),N(V(r),{ref:m},{count:C(({value:i})=>[u("div",null,"我是"+f(o)+"的自定义插槽，点击+1："+f(i),1)]),text:C(({value:i})=>[u("div",null,"我是"+f(o)+"的自定义插槽，输出："+f(i),1)]),_:2},1536))]),_:1})]))}}),H=`<script setup lang="ts">
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';
import { onMounted, ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId2');

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    toggleComponent(Count, { class: 'c-red' });
  }
  else {
    toggleComponent(Text);
  }
}

function handleToggle() {
  console.warn('已切换', getComponentRef());
}

onMounted(() => {
  handleClick();
});
<\/script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <MtComponentNeo v-slot="{ Component, compRef }" unique-id="uniqueId2" @toggle-component="handleToggle">
      <keep-alive>
        <component :is="Component" :ref="compRef" />
      </keep-alive>
    </MtComponentNeo>
  </div>
</template>
`,K=E({__name:"keep-state",setup(p){const{getComponentRef:n,toggleComponent:a}=M("uniqueId2"),e=D(!1);function t(){e.value=!e.value,e.value?a(w,{class:"c-red"}):a(T)}function d(){console.warn("已切换",n())}return R(()=>{t()}),(r,m)=>(c(),h("div",null,[u("button",{class:"btn mb-2 flex flex-col-reverse",onClick:t}," 切换组件 "),l(s(y),{"unique-id":"uniqueId2",onToggleComponent:d},{default:C(({Component:o,compRef:i})=>[(c(),N(L,null,[(c(),N(V(o),{ref:i},null,512))],1024))]),_:1})]))}}),Q=`<script setup lang="tsx">
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';
import { h, onMounted, reactive, toRefs } from 'vue';
import Text from './text.vue';

const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId1');

const inputValues = reactive({
  input1: '',
  input2: '',
  input3: '',
});

const valueAsRefs = toRefs(inputValues);

function handleClick(index = 1) {
  switch (index) {
    case 1:
      toggleComponent(
        Text,
        { key: 'input1', vModel: valueAsRefs.input1 },
        {
          text: (slotData: { value: string }) =>
            h('div', \`输入框1：\${slotData?.value}\`),
        },
      );
      break;
    case 2:
      toggleComponent(
        () => import('./text.vue'),
        { 'key': 'input2', 'vModel:modelValue': valueAsRefs.input2 },
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
      toggleComponent(
        h(() => (
          <Text
            key="input3"
            v-model={valueAsRefs.input3.value}
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

function handleToggle() {
  console.warn('已切换', getComponentRef());
}

onMounted(() => {
  handleClick();
});
<\/script>

<template>
  <div>
    <!-- <Text v-model="inputValue" class="mb-2" /> -->
    <button
      v-for="i in 3"
      :key="i"
      class="mb-2 btn"
      @click="handleClick(i)"
    >
      组件{{ i }}
    </button>
    <MtComponentNeo unique-id="uniqueId1" @toggle-component="handleToggle" />
  </div>
</template>
`,e2=["onClick"],n2=E({__name:"use-hook",setup(p){const{getComponentRef:n,toggleComponent:a}=M("uniqueId1"),e=W({input1:"",input2:"",input3:""}),t=Z(e);function d(m=1){switch(m){case 1:a(T,{key:"input1",vModel:t.input1},{text:o=>_("div",`输入框1：${o==null?void 0:o.value}`)});break;case 2:a(()=>J(()=>import("./chunks/text.BH0_FtBI.js"),__vite__mapDeps([0,1,2,3,4])),{key:"input2","vModel:modelValue":t.input2},{text:o=>l("div",null,[g("输入框2："),o==null?void 0:o.value])});break;case 3:a(_(()=>l(T,{key:"input3",modelValue:t.input3.value,"onUpdate:modelValue":o=>t.input3.value=o},{text:o=>l("div",null,[g("输入框3："),o==null?void 0:o.value])})));break}}function r(){console.warn("已切换",n())}return R(()=>{d()}),(m,o)=>(c(),h("div",null,[(c(),h($,null,O(3,i=>u("button",{key:i,class:"mb-2 btn",onClick:v=>d(i)}," 组件"+f(i),9,e2)),64)),l(s(y),{"unique-id":"uniqueId1",onToggleComponent:r})]))}}),t2=`<script setup lang="ts">
import { MtComponentNeo } from 'mortise-tenon-design';
import { h, ref } from 'vue';

const comp1 = h('div', 'Hollo');
const comp2 = h('div', 'World');

const val = ref(true);

function handleToggle(_name?: string, componentRef?: any) {
  console.warn('已切换', componentRef);
}
<\/script>

<template>
  <div>
    <button class="btn mb-2" @click="val = !val">
      切换组件
    </button>
    <MtComponentNeo :is="val ? comp1 : comp2" @toggle-component="handleToggle" />
  </div>
</template>
`,o2=E({__name:"base",setup(p){const n=_("div","Hollo"),a=_("div","World"),e=D(!0);function t(d,r){console.warn("已切换",r)}return(d,r)=>(c(),h("div",null,[u("button",{class:"btn mb-2",onClick:r[0]||(r[0]=m=>e.value=!e.value)}," 切换组件 "),l(s(y),{is:e.value?s(n):s(a),onToggleComponent:t},null,8,["is"])]))}}),C2=JSON.parse('{"title":"ComponentNeo","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/component-neo.md","filePath":"zh/components/component-neo.md","lastUpdated":1745059359000}'),l2={name:"zh/components/component-neo.md"},u2=Object.assign(l2,{setup(p){const n=D(!0);return(a,e)=>{const t=U("ClientOnly");return c(),h("div",null,[e[4]||(e[4]=k("",5)),B(l(s(x),null,null,512),[[A,n.value]]),l(t,null,{default:C(()=>[l(s(F),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:s(t2)},{vue:C(()=>[l(o2)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=k("",11)),B(l(s(x),null,null,512),[[A,n.value]]),l(t,null,{default:C(()=>[l(s(F),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22use-hook.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fuse-hook.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22tsx%5C%22%3E%5Cnimport%20%7B%20MtComponentNeo%2C%20useComponentNeo%20%7D%20from%20'mortise-tenon-design'%3B%5Cnimport%20%7B%20h%2C%20onMounted%2C%20reactive%2C%20toRefs%20%7D%20from%20'vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20getComponentRef%2C%20toggleComponent%20%7D%20%3D%20useComponentNeo('uniqueId1')%3B%5Cn%5Cnconst%20inputValues%20%3D%20reactive(%7B%5Cn%20%20input1%3A%20''%2C%5Cn%20%20input2%3A%20''%2C%5Cn%20%20input3%3A%20''%2C%5Cn%7D)%3B%5Cn%5Cnconst%20valueAsRefs%20%3D%20toRefs(inputValues)%3B%5Cn%5Cnfunction%20handleClick(index%20%3D%201)%20%7B%5Cn%20%20switch%20(index)%20%7B%5Cn%20%20%20%20case%201%3A%5Cn%20%20%20%20%20%20toggleComponent(%5Cn%20%20%20%20%20%20%20%20Text%2C%5Cn%20%20%20%20%20%20%20%20%7B%20key%3A%20'input1'%2C%20vModel%3A%20valueAsRefs.input1%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20h('div'%2C%20%60%E8%BE%93%E5%85%A5%E6%A1%861%EF%BC%9A%24%7BslotData%3F.value%7D%60)%2C%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%20%20case%202%3A%5Cn%20%20%20%20%20%20toggleComponent(%5Cn%20%20%20%20%20%20%20%20()%20%3D%3E%20import('.%2Ftext.vue')%2C%5Cn%20%20%20%20%20%20%20%20%7B%20'key'%3A%20'input2'%2C%20'vModel%3AmodelValue'%3A%20valueAsRefs.input2%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E8%BE%93%E5%85%A5%E6%A1%862%EF%BC%9A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20slotData%3F.value%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%20%20case%203%3A%5Cn%20%20%20%20%20%20toggleComponent(%5Cn%20%20%20%20%20%20%20%20h(()%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%5Cn%20%20%20%20%20%20%20%20%20%20%20%20key%3D%5C%22input3%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20v-model%3D%7BvalueAsRefs.input3.value%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20(slotData%3A%20%7B%20value%3A%20string%20%7D)%20%3D%3E%20(%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E8%BE%93%E5%85%A5%E6%A1%863%EF%BC%9A%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20slotData%3F.value%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20))%2C%5Cn%20%20%20%20%20%20)%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20handleToggle()%20%7B%5Cn%20%20console.warn('%E5%B7%B2%E5%88%87%E6%8D%A2'%2C%20getComponentRef())%3B%5Cn%7D%5Cn%5CnonMounted(()%20%3D%3E%20%7B%5Cn%20%20handleClick()%3B%5Cn%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3C!--%20%3CText%20v-model%3D%5C%22inputValue%5C%22%20class%3D%5C%22mb-2%5C%22%20%2F%3E%20--%3E%5Cn%20%20%20%20%3Cbutton%5Cn%20%20%20%20%20%20v-for%3D%5C%22i%20in%203%5C%22%5Cn%20%20%20%20%20%20%3Akey%3D%5C%22i%5C%22%5Cn%20%20%20%20%20%20class%3D%5C%22mb-2%20btn%5C%22%5Cn%20%20%20%20%20%20%40click%3D%5C%22handleClick(i)%5C%22%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%E7%BB%84%E4%BB%B6%7B%7B%20i%20%7D%7D%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CMtComponentNeo%20unique-id%3D%5C%22uniqueId1%5C%22%20%40toggle-component%3D%5C%22handleToggle%5C%22%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20rounded-md%20mr-1%20px-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:s(Q)},{vue:C(()=>[l(n2)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=k("",3)),B(l(s(x),null,null,512),[[A,n.value]]),l(t,null,{default:C(()=>[l(s(F),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22keep-state.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fkeep-state.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20MtComponentNeo%2C%20useComponentNeo%20%7D%20from%20'mortise-tenon-design'%3B%5Cnimport%20%7B%20onMounted%2C%20ref%20%7D%20from%20'vue'%3B%5Cnimport%20Count%20from%20'.%2Fcount.vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20getComponentRef%2C%20toggleComponent%20%7D%20%3D%20useComponentNeo('uniqueId2')%3B%5Cn%5Cnconst%20val%20%3D%20ref(false)%3B%5Cnfunction%20handleClick()%20%7B%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cn%20%20if%20(val.value)%20%7B%5Cn%20%20%20%20toggleComponent(Count%2C%20%7B%20class%3A%20'c-red'%20%7D)%3B%5Cn%20%20%7D%5Cn%20%20else%20%7B%5Cn%20%20%20%20toggleComponent(Text)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnfunction%20handleToggle()%20%7B%5Cn%20%20console.warn('%E5%B7%B2%E5%88%87%E6%8D%A2'%2C%20getComponentRef())%3B%5Cn%7D%5Cn%5CnonMounted(()%20%3D%3E%20%7B%5Cn%20%20handleClick()%3B%5Cn%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%20flex%20flex-col-reverse%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cn%20%20%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CMtComponentNeo%20v-slot%3D%5C%22%7B%20Component%2C%20compRef%20%7D%5C%22%20unique-id%3D%5C%22uniqueId2%5C%22%20%40toggle-component%3D%5C%22handleToggle%5C%22%3E%5Cn%20%20%20%20%20%20%3Ckeep-alive%3E%5Cn%20%20%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%5C%22Component%5C%22%20%3Aref%3D%5C%22compRef%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2Fkeep-alive%3E%5Cn%20%20%20%20%3C%2FMtComponentNeo%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22count.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fcount.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cn%5CndefineOptions(%7B%20name%3A%20'ExampleCount'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20ref(0)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22cursor-pointer%5C%22%20%40click%3D%5C%22value%2B%2B%5C%22%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22count%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cn%20%20%20%20%20%20%E7%82%B9%E5%87%BB%EF%BC%9A%7B%7B%20value%20%7D%7D%5Cn%20%20%20%20%3C%2Fslot%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20rounded-md%20mr-1%20px-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:s(H)},{vue:C(()=>[l(K)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=u("h2",{id:"传递插槽",tabindex:"-1"},[g("传递插槽 "),u("a",{class:"header-anchor",href:"#传递插槽","aria-label":'Permalink to "传递插槽"'},"​")],-1)),e[8]||(e[8]=u("p",null,[g("可以通过 "),u("code",null,"component"),g(" 的插槽传递内容给引入的组件，但这种方式会导致所有组件使用相同的插槽，并使 "),u("code",null,"toggleComponent"),g(" 中的插槽参数失效，需要谨慎使用。")],-1)),B(l(s(x),null,null,512),[[A,n.value]]),l(t,null,{default:C(()=>[l(s(F),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%22custom-slot.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fcustom-slot.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20MtComponentNeo%2C%20useComponentNeo%20%7D%20from%20'mortise-tenon-design'%3B%5Cnimport%20%7B%20onMounted%2C%20ref%20%7D%20from%20'vue'%3B%5Cnimport%20Count%20from%20'.%2Fcount.vue'%3B%5Cnimport%20Text%20from%20'.%2Ftext.vue'%3B%5Cn%5Cnconst%20%7B%20toggleComponent%20%7D%20%3D%20useComponentNeo('uniqueId3')%3B%5Cn%5Cnconst%20val%20%3D%20ref(false)%3B%5Cnfunction%20handleClick()%20%7B%5Cn%20%20val.value%20%3D%20!val.value%3B%5Cn%20%20if%20(val.value)%20%7B%5Cn%20%20%20%20toggleComponent(Count%2C%20%7B%20class%3A%20'c-green'%20%7D)%3B%5Cn%20%20%7D%5Cn%20%20else%20%7B%5Cn%20%20%20%20toggleComponent(Text)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5CnonMounted(()%20%3D%3E%20%7B%5Cn%20%20handleClick()%3B%5Cn%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cbutton%20class%3D%5C%22btn%20mb-2%20flex%20flex-col-reverse%5C%22%20%40click%3D%5C%22handleClick%5C%22%3E%5Cn%20%20%20%20%20%20%E5%88%87%E6%8D%A2%E7%BB%84%E4%BB%B6%5Cn%20%20%20%20%3C%2Fbutton%3E%5Cn%20%20%20%20%3CMtComponentNeo%20v-slot%3D%5C%22%7B%20Component%2C%20compRef%2C%20compName%20%7D%5C%22%20unique-id%3D%5C%22uniqueId3%5C%22%3E%5Cn%20%20%20%20%20%20%3Ccomponent%20%3Ais%3D%5C%22Component%5C%22%20%3Aref%3D%5C%22compRef%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%3Ctemplate%20%23count%3D%5C%22%7B%20value%20%7D%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%7B%7B%20compName%20%7D%7D%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E6%A7%BD%EF%BC%8C%E7%82%B9%E5%87%BB%2B1%EF%BC%9A%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%5Cn%20%20%20%20%20%20%20%20%3Ctemplate%20%23text%3D%5C%22%7B%20value%20%7D%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E6%88%91%E6%98%AF%7B%7B%20compName%20%7D%7D%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E6%A7%BD%EF%BC%8C%E8%BE%93%E5%87%BA%EF%BC%9A%7B%7B%20value%20%7D%7D%3C%2Fdiv%3E%5Cn%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%5Cn%20%20%20%20%20%20%3C%2Fcomponent%3E%5Cn%20%20%20%20%3C%2FMtComponentNeo%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22count.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Fcount.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%3B%5Cn%5CndefineOptions(%7B%20name%3A%20'ExampleCount'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20ref(0)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22cursor-pointer%5C%22%20%40click%3D%5C%22value%2B%2B%5C%22%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22count%5C%22%20%3Avalue%3D%5C%22value%5C%22%3E%5Cn%20%20%20%20%20%20%E7%82%B9%E5%87%BB%EF%BC%9A%7B%7B%20value%20%7D%7D%5Cn%20%20%20%20%3C%2Fslot%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%2C%22text.vue%22%3A%7B%22filename%22%3A%22components%2Fcomponent-neo%2Ftext.vue%22%2C%22code%22%3A%22%3Cscript%20setup%20lang%3D%5C%22ts%5C%22%3E%5CndefineOptions(%7B%20name%3A%20'ExampleText'%20%7D)%3B%5Cn%5Cnconst%20value%20%3D%20defineModel%3Cstring%3E(%7B%20type%3A%20String%2C%20default%3A%20''%20%7D)%3B%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20%3Cslot%20name%3D%5C%22text%5C%22%20%3Avalue%3D%5C%22value%5C%22%20%2F%3E%5Cn%20%20%20%20%3Cinput%20v-model%3D%5C%22value%5C%22%20type%3D%5C%22text%5C%22%20class%3D%5C%22b-1%20b-gray%20b-solid%20rounded-md%20mr-1%20px-1%5C%22%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%7D%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),vueCode:s(Y)},{vue:C(()=>[l(G)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=k("",10))])}}});export{T as _,C2 as __pageData,u2 as default};
