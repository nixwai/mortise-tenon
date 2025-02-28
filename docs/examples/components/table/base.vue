<script setup lang="ts">
import type { TableConfig } from 'mortise-tenon-design';
import { MtTable } from 'mortise-tenon-design';

const tableConfig: TableConfig[] = [
  { columns: [{ title: '用户信息表' }] },
  {
    columns: [
      { title: '个人信息', head: { colSpan: 3 } },
      { title: '联系信息' },
    ],
  },
  {
    headStyle: { textAlign: 'left' },
    columns: [
      { title: '姓名', dataKey: 'name', cell: { style: { width: '40px' } } },
      { title: '年龄', dataKey: 'years', cell: { style: { width: '40px' } } },
      { title: '性别', dataKey: 'sex', cell: { style: { width: '40px' } } },
      { title: '省份', dataKey: 'address', cell: { colSpan: 2 } },
      { title: '地址' },
      { title: '电话', dataKey: 'tel', head: { colSpan: 2 } },
      { dataKey: 'phone', cell: { style: { width: '80px' } } },
      { title: '邮箱', dataKey: 'email', cell: { rowSpan: 2 } },
    ],
  },
  {
    columns: [
      { dataKey: 'nation', cell: { colSpan: 2 } },
      { dataKey: 'standing' },
    ],
  },
  {
    columns: [
      { dataKey: 'remark' },
    ],
  },
];

const tableData = [{
  nation: '汉',
  standing: '群众',
  name: '小明',
  years: 18,
  sex: '男',
  address: '北京省XXXXXXXXXXXXXXX',
  tel: '666',
  phone: '123456789',
  email: '123456789@mt.com',
  remark: '备注信息',
}];
</script>

<template>
  <MtTable :config="tableConfig" :data="tableData">
    <template #cell="{ column, record }">
      <span v-if="column.dataKey === 'remark'">
        查看：{{ record.remark }}
      </span>
    </template>
  </MtTable>
</template>
