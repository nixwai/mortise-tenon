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
const maxColspan = computed(() => {
  const handReduce = headConfig.value.map(item => item.columns.reduce((pre, cur) => pre + (cur.head?.colspan || 1), 0));
  const cellReduce = dataConfig.value.map(item => item.columns.reduce((pre, cur) => pre + (cur.cell?.colspan || 1), 0));
  return Math.max(...handReduce, ...cellReduce);
});

/** 表头列合并 */
const headColspan = computed(() => {
  const colspanList = headConfig.value.map(item => item.columns.map(column => column.head?.colspan || 0));
  return getColspanData(colspanList);
});

/** 数据列合并 */
const dataColspan = computed(() => {
  const colspanList = dataConfig.value.map(item => item.columns.map(column => column.cell?.colspan || 0));
  return getColspanData(colspanList);
});

/** 获取合并列数组 */
function getColspanData(colspanList: number[][]) {
  return colspanList.map((columns) => {
    const colspanColumns = columns.filter(Boolean); // 已分配colspan的列
    const beenColspan = colspanColumns.reduce((pur, cur) => pur + cur, 0); // 总colspan
    let remainCount = columns.length - colspanColumns.length; // 剩余未配置colspan的列数
    let remainColspan = maxColspan.value - beenColspan; // 剩余可分配的colspan
    return columns.map((colspan) => {
      if (!colspan && remainColspan > 0) {
        colspan = Math.ceil(remainColspan / remainCount); // 每列平均分配colspan
        remainCount--;
        remainColspan -= colspan;
      }
      return colspan;
    });
  });
}
</script>

<template>
  <div class="mt-table">
    <table>
      <!-- 表头 -->
      <thead>
        <tr
          v-for="(row, rowIndex) in headConfig"
          :key="rowIndex"
          :style="row.headStyle"
        >
          <template v-for="(column, columnIndex) in row.columns" :key="`${column.title}-${columnIndex}`">
            <th
              :colspan="headColspan[rowIndex][columnIndex]"
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
                :colspan="dataColspan[rowIndex][columnIndex]"
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
  </div>
</template>

<style lang="scss" scoped>
.mt-table {
  position: relative;

  table {
    width: 100%;
    max-width: 100%;
  }

  thead {
    position: sticky;
    top: 0;

    th {
      position: relative;
      padding: 8px 16px;
      text-align: left;

      &:not(:last-child)::before {
        position: absolute;
        inset-inline-end: 0;
        top: 50%;
        width: 1px;
        height: 1.6em;
        content: '';
        background-color: #f0f0f0;
        transform: translateY(-50%);
      }
    }
  }

  tbody {
    td {
      padding: 16px;
      vertical-align: top;
      border-collapse: collapse;
      border: 1px solid #f0f0f0;
    }
  }
}
</style>
