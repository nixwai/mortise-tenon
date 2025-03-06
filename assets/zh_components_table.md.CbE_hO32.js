import{d as b,b as u,o as n,w as d,c as h,e as y,t as f,k as l,p as C,C as _,j as e,ae as g,G as r,ah as x,a as i,ai as X}from"./chunks/framework.BSVvnydI.js";import{a as S}from"./chunks/index.Bnuvy5Be.js";import{d as k,f as K}from"./chunks/index.CF5C30ZV.js";import"./chunks/index.CU7lAU4_.js";const T=`<script setup lang="ts">\r
import type { TableConfig } from 'mortise-tenon-design';\r
import { MtTable } from 'mortise-tenon-design';\r
\r
const tableConfig: TableConfig[] = [\r
  { columns: [{ title: '用户信息表' }] },\r
  {\r
    columns: [\r
      { title: '个人信息', head: { colSpan: 3 } },\r
      { title: '联系信息' },\r
    ],\r
  },\r
  {\r
    headStyle: { textAlign: 'left' },\r
    columns: [\r
      { title: '姓名', dataKey: 'name', cell: { style: { width: '40px' } } },\r
      { title: '年龄', dataKey: 'years', cell: { style: { width: '40px' } } },\r
      { title: '性别', dataKey: 'sex', cell: { style: { width: '40px' } } },\r
      { title: '省份', dataKey: 'address', cell: { colSpan: 2 } },\r
      { title: '地址' },\r
      { title: '电话', dataKey: 'tel', head: { colSpan: 2 } },\r
      { dataKey: 'phone', cell: { style: { width: '80px' } } },\r
      { title: '邮箱', dataKey: 'email', cell: { rowSpan: 2 } },\r
    ],\r
  },\r
  {\r
    columns: [\r
      { dataKey: 'nation', cell: { colSpan: 2 } },\r
      { dataKey: 'standing' },\r
    ],\r
  },\r
  {\r
    columns: [\r
      { dataKey: 'remark' },\r
    ],\r
  },\r
];\r
\r
const tableData = [{\r
  nation: '汉',\r
  standing: '群众',\r
  name: '小明',\r
  years: 18,\r
  sex: '男',\r
  address: '北京省XXXXXXXXXXXXXXX',\r
  tel: '666',\r
  phone: '123456789',\r
  email: '123456789@mt.com',\r
  remark: '备注信息',\r
}];\r
<\/script>\r
\r
<template>\r
  <MtTable :config="tableConfig" :data="tableData">\r
    <template #cell="{ column, record }">\r
      <span v-if="column.dataKey === 'remark'">\r
        查看：{{ record.remark }}\r
      </span>\r
    </template>\r
  </MtTable>\r
</template>\r
`,w={key:0},P=b({__name:"base",setup(c){const a=[{columns:[{title:"用户信息表"}]},{columns:[{title:"个人信息",head:{colSpan:3}},{title:"联系信息"}]},{headStyle:{textAlign:"left"},columns:[{title:"姓名",dataKey:"name",cell:{style:{width:"40px"}}},{title:"年龄",dataKey:"years",cell:{style:{width:"40px"}}},{title:"性别",dataKey:"sex",cell:{style:{width:"40px"}}},{title:"省份",dataKey:"address",cell:{colSpan:2}},{title:"地址"},{title:"电话",dataKey:"tel",head:{colSpan:2}},{dataKey:"phone",cell:{style:{width:"80px"}}},{title:"邮箱",dataKey:"email",cell:{rowSpan:2}}]},{columns:[{dataKey:"nation",cell:{colSpan:2}},{dataKey:"standing"}]},{columns:[{dataKey:"remark"}]}],o=[{nation:"汉",standing:"群众",name:"小明",years:18,sex:"男",address:"北京省XXXXXXXXXXXXXXX",tel:"666",phone:"123456789",email:"123456789@mt.com",remark:"备注信息"}];return(t,s)=>(n(),u(l(S),{config:a,data:o},{cell:d(({column:m,record:p})=>[m.dataKey==="remark"?(n(),h("span",w," 查看："+f(p.remark),1)):y("",!0)]),_:1}))}}),V=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/table.md","filePath":"zh/components/table.md","lastUpdated":1741252669000}'),v={name:"zh/components/table.md"},N=Object.assign(v,{setup(c){const a=C(!0);return(o,t)=>{const s=_("ClientOnly");return n(),h("div",null,[t[1]||(t[1]=e("h1",{id:"table",tabindex:"-1"},[i("Table "),e("a",{class:"header-anchor",href:"#table","aria-label":'Permalink to "Table"'},"​")],-1)),t[2]||(t[2]=e("p",null,"用于实现多行多列的表格",-1)),t[3]||(t[3]=e("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),g(r(l(k),null,null,512),[[X,a.value]]),r(s,null,{default:d(()=>[r(l(K),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(T)},{vue:d(()=>[r(P)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=x('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>表格数据</td><td>any[]</td><td>[]</td></tr><tr><td>config</td><td>表格配置</td><td>TableConfig[]</td><td>[]</td></tr></tbody></table><h3 id="tableconfig" tabindex="-1">TableConfig <a class="header-anchor" href="#tableconfig" aria-label="Permalink to &quot;TableConfig&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>rowStyle</td><td>行体样式</td><td>CSSProperties</td></tr><tr><td>headStyle</td><td>表头样式</td><td>CSSProperties</td></tr><tr><td>columns</td><td>列配置</td><td>Column[]</td></tr></tbody></table><h3 id="column" tabindex="-1">Column <a class="header-anchor" href="#column" aria-label="Permalink to &quot;Column&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>参数</th><th>类型</th></tr></thead><tbody><tr><td>key</td><td>唯一标识key</td><td>string</td></tr><tr><td>dataKey</td><td>单元格数据字段（配置了才会显示对应数据列）</td><td>string</td></tr><tr><td>title</td><td>表头名称（配置了才会显示对应列表头）</td><td>string</td></tr><tr><td>head</td><td>表头格配置</td><td>CellProps</td></tr><tr><td>cell</td><td>数据格配置</td><td>CellProps</td></tr></tbody></table><h3 id="cellprops" tabindex="-1">CellProps <a class="header-anchor" href="#cellprops" aria-label="Permalink to &quot;CellProps&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>style</td><td>样式</td><td>CSSProperties</td></tr><tr><td>colSpan</td><td>占用列数</td><td>CSSProperties</td></tr><tr><td>rowSpan</td><td>占用行数</td><td>Column</td></tr></tbody></table><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p><a href="https://github.com/nixwai/mortise-tenon/blob/main/packages/components/src/table/src/table.vue" target="_blank" rel="noreferrer">源代码</a></p>',10))])}}});export{V as __pageData,N as default};
