const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/dynamic-theme.552ZNhXB.js","assets/chunks/framework.D6Nbw8HZ.js","assets/chunks/more-scene.CUGPM_oH.js"])))=>i.map(i=>d[i]);
import{D as o,v as d,ae as E,p as v,C as b,c as F,o as f,ag as C,af as c,G as i,j as n,ah as g,k as a,w as l,ai as y,a as k}from"./chunks/framework.D6Nbw8HZ.js";import{R as u,k as m}from"./chunks/index.DlEwPQCg.js";const _=`<script setup lang="ts">
import { updateThemeColor } from 'mortise-tenon-preset/helper';
import { ref } from 'vue';

const demo = ref<HTMLElement>();
function setTheme(color: string) {
  updateThemeColor({ name: 'primary', color, dom: demo.value });
}
<\/script>

<template>
  <div class="flex">
    <div>点击切换：</div>
    <button class="c-blue mx-1" @click="setTheme('blue')">
      蓝色
    </button>
    <button class="c-green" @click="setTheme('green')">
      绿色
    </button>
  </div>
  <div ref="demo" class="flex items-center">
    <button class="btn btn-deep mr-2">
      按钮
    </button>
  </div>
</template>
`,B=`<template>
  <div class="c-primary">
    默认主题
  </div>
  <div class="c-warning">
    警告
  </div>
  <div class="c-danger">
    危险
  </div>
</template>
`,X=JSON.parse('{"title":"主题颜色","description":"","frontmatter":{},"headers":[],"relativePath":"zh/presets/theme-color.md","filePath":"zh/presets/theme-color.md","lastUpdated":1740739063000}'),D={name:"zh/presets/theme-color.md"},V=Object.assign(D,{setup(A){const h=o();d(async()=>{h.value=(await E(async()=>{const{default:t}=await import("./chunks/dynamic-theme.552ZNhXB.js");return{default:t}},__vite__mapDeps([0,1]))).default});const e=v(!0),p=o();return d(async()=>{p.value=(await E(async()=>{const{default:t}=await import("./chunks/more-scene.CUGPM_oH.js");return{default:t}},__vite__mapDeps([2,1]))).default}),(t,s)=>{const r=b("ClientOnly");return f(),F("div",null,[s[2]||(s[2]=C(`<h1 id="主题颜色" tabindex="-1">主题颜色 <a class="header-anchor" href="#主题颜色" aria-label="Permalink to &quot;主题颜色&quot;">​</a></h1><p>Mortise Tenon提供了UI的主题颜色（默认为蓝色#3451b2），能够更好的统一项目中的主题样式。在项目您也可以使用&#39;primary&#39;作为主题颜色使用，后缀可添加[50，100，200，300，400，500，600，700，800，900，950]内的数字控制颜色明亮。</p><p>可以在参数<code>color</code>中传入颜色来修改主题颜色，颜色是通过<a href="https://color.zyob.top/" target="_blank" rel="noreferrer">magic-color</a>生成，您可以在<a href="https://color.zyob.top/" target="_blank" rel="noreferrer">官方文档</a>中预览和调试。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { presetMortiseTenon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mortise-tenon-preset&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig, presetWind3 } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unocss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ presets: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetWind3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetMortiseTenon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#3451b2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })], });</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b-primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c-primary-700&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Span</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;div-style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Div</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.div-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --at-apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bg-primary&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="更多颜色" tabindex="-1">更多颜色 <a class="header-anchor" href="#更多颜色" aria-label="Permalink to &quot;更多颜色&quot;">​</a></h2><p>您可以在uno.config.ts中修改配置更多颜色类型，mortise-tenon-preset已经集成了<a href="https://nixwai.github.io/unocss-preset-ctx/zh/custom-color.html" target="_blank" rel="noreferrer">unocss-preset-ctx</a>中的<code>themeColors</code>与<code>updateThemeColor</code>方法，用于生成更多主题颜色和动态修改颜色。例如：&#39;warning&#39;、&#39;danger&#39;、&#39;success&#39;...</p><h4 id="themecolors" tabindex="-1">themeColors <a class="header-anchor" href="#themecolors" aria-label="Permalink to &quot;themeColors&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { presetMortiseTenon, themeColors } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mortise-tenon-preset&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig, presetWind3 } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unocss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  presets: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetWind3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetMortiseTenon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  theme: { colors: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">themeColors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ warning: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#ffb300&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, danger: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#e53935&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,9)),c(i(a(u),null,null,512),[[g,e.value]]),i(r,null,{default:l(()=>[i(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:a(B)},y({_:2},[p.value?{name:"vue",fn:l(()=>[i(a(p))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[3]||(s[3]=n("h4",{id:"updatethemecolor",tabindex:"-1"},[k("updateThemeColor "),n("a",{class:"header-anchor",href:"#updatethemecolor","aria-label":'Permalink to "updateThemeColor"'},"​")],-1)),s[4]||(s[4]=n("p",null,[k("dom来指定覆盖的范围，传入"),n("code",null,"document.documentElement"),k("时即可覆盖整个页面的颜色。")],-1)),c(i(a(u),null,null,512),[[g,e.value]]),i(r,null,{default:l(()=>[i(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[1]||(s[1]=()=>{e.value=!1}),vueCode:a(_)},y({_:2},[h.value?{name:"vue",fn:l(()=>[i(a(h))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{X as __pageData,V as default};
