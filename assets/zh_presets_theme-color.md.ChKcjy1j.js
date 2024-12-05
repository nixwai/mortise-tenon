import{_ as k,o as l,c as p,j as i,F as o,a0 as d,G as a,w as e,k as n,B as E}from"./chunks/framework.D6w4zQ8K.js";import{R as c}from"./chunks/index.CP7nzNwI.js";const g=`<template>\r
  <div class="c-primary">\r
    默认主题\r
  </div>\r
  <div class="c-warning">\r
    警告\r
  </div>\r
  <div class="c-danger">\r
    危险\r
  </div>\r
</template>\r
`,y={};function m(r,s){return l(),p(o,null,[s[0]||(s[0]=i("div",{class:"c-primary"}," 默认主题 ",-1)),s[1]||(s[1]=i("div",{class:"c-warning"}," 警告 ",-1)),s[2]||(s[2]=i("div",{class:"c-danger"}," 危险 ",-1))],64)}const u=k(y,[["render",m]]),b=JSON.parse('{"title":"主题颜色","description":"","frontmatter":{},"headers":[],"relativePath":"zh/presets/theme-color.md","filePath":"zh/presets/theme-color.md"}'),F={name:"zh/presets/theme-color.md"},f=Object.assign(F,{setup(r){return(s,t)=>{const h=E("ClientOnly");return l(),p("div",null,[t[0]||(t[0]=d(`<h1 id="主题颜色" tabindex="-1">主题颜色 <a class="header-anchor" href="#主题颜色" aria-label="Permalink to &quot;主题颜色&quot;">​</a></h1><p>Mortise Tenon提供了UI的主题颜色（默认为蓝色#3451b2），可单独将&#39;primary&#39;作为颜色属性使用，能够更好的统一项目中的主题样式。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bg-primary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Button&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> c-primary-700</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Span&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>您可以在uno.config.ts中修改配置主题颜色，mortise-tenon-preset提供了<code>themeColors</code>方法，用于生成主题颜色。</p><p>除了主题颜色，该方法也支持您自定义一些特殊的场景颜色，例如：&#39;warning&#39;、&#39;danger&#39;、&#39;success&#39;...</p><p>颜色是通过<a href="https://color.zyob.top/" target="_blank" rel="noreferrer">magic-color</a>生成，您可以在<a href="https://color.zyob.top/" target="_blank" rel="noreferrer">官方文档</a>中预览和调试。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { presetMortiseTenon, themeColors } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mortise-tenon-preset&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig, presetUno } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unocss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  presets: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetUno</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetMortiseTenon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  theme: { colors: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">themeColors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ primary: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#3451b2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, warning: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#ffb300&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, danger: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#e53935&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,7)),a(h,null,{default:e(()=>[a(n(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(g)},{vue:e(()=>[a(u)]),_:1},8,["vueCode"])]),_:1})])}}});export{b as __pageData,f as default};
