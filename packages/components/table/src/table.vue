<script lang="ts" setup>
import type { TableProps } from './table';
import { computed } from 'vue';

defineOptions({ name: 'MtTable' });

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  config: () => [],
});

/** 表头配置 */
const headConfig = computed(() => {
  return props.config.map(rowItem => ({ ...rowItem, columns: rowItem.columns.filter(column => column.title) }));
});

/** 数据配置 */
const dataConfig = computed(() => {
  return props.config.map(rowItem => ({ ...rowItem, columns: rowItem.columns.filter(column => column.dataKey) }));
});

/** 最大列数 */
const maxColSpan = computed(() => {
  const handReduce = headConfig.value.map(item => item.columns.reduce((pre, cur) => pre + (cur.head?.colSpan || 1), 0));
  const cellReduce = dataConfig.value.map(item => item.columns.reduce((pre, cur) => pre + (cur.cell?.colSpan || 1), 0));
  return Math.max(...handReduce, ...cellReduce);
});

/** 表头列合并 */
const headColSpan = computed(() => {
  const colSpanList = headConfig.value.map(item => item.columns.map(column => column.head?.colSpan || 0));
  return getColSpanData(colSpanList);
});

/** 数据列合并 */
const dataColSpan = computed(() => {
  const colSpanList = dataConfig.value.map(item => item.columns.map(column => column.cell?.colSpan || 0));
  return getColSpanData(colSpanList);
});

/** 获取合并列数组 */
function getColSpanData(colSpanList: number[][]) {
  return colSpanList.map((columns) => {
    const colSpanColumns = columns.filter(Boolean); // 已分配colSpan的列
    const beenColSpan = colSpanColumns.reduce((pur, cur) => pur + cur, 0); // 总colSpan
    let remainCount = columns.length - colSpanColumns.length; // 剩余未配置colSpan的列数
    let remainColSpan = maxColSpan.value - beenColSpan; // 剩余可分配的colSpan
    return columns.map((colSpan) => {
      if (!colSpan && remainColSpan > 0) {
        colSpan = Math.ceil(remainColSpan / remainCount); // 每列平均分配colSpan
        remainCount--;
        remainColSpan -= colSpan;
      }
      return colSpan;
    });
  });
}
</script>

<template>
  <table class="mt-table">
    <!-- 表头 -->
    <thead>
      <tr
        v-for="(row, rowIndex) in headConfig"
        :key="rowIndex"
        :style="row.headStyle"
      >
        <template v-for="(column, columnIndex) in row.columns" :key="`${column.title}-${columnIndex}`">
          <th
            :colspan="headColSpan[rowIndex][columnIndex]"
            :rowspan="column.head?.rowSpan"
            :style="column.head?.style"
          >
            <slot
              :column="column"
              :column-index="columnIndex"
              :row="row"
              :row-index="rowIndex"
              name="header"
            >
              {{ column.title }}
            </slot>
          </th>
        </template>
      </tr>
    </thead>
    <!-- 表体 -->
    <tbody>
      <template
        v-for="(record, dataIndex) in data"
        :key="dataIndex"
      >
        <tr
          v-for="(row, rowIndex) in dataConfig"
          :key="rowIndex"
          :style="row.rowStyle"
        >
          <template v-for="(column, columnIndex) in row.columns" :key="`${column.dataKey}-${columnIndex}`">
            <td
              :colspan="dataColSpan[rowIndex][columnIndex]"
              :rowspan="column.cell?.rowSpan"
              :style="column.cell?.style"
            >
              <slot
                :column="column"
                :column-index="columnIndex"
                :data-index="dataIndex"
                name="cell"
                :record="record"
                :row="row"
                :row-index="rowIndex"
              >
                {{ record[column.dataKey!] }}
              </slot>
            </td>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.mt-table {
  width: 100%;
  max-width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  thead {
    tr {
      th {
        padding: 8px 16px;
        border: 1px #f0f0f0 solid;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 16px;
        border: 1px #f0f0f0 solid;
      }
    }
  }
}
</style>
