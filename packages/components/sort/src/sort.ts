import type { PropType, VNode } from 'vue';
import { computed, defineComponent } from 'vue';

export interface SortSpaceProps {
  /** 排序配置 */
  sortList?: (string | number)[]
  /** 排序key名 */
  keyName?: string
}

export default defineComponent({
  name: 'MtSort',
  props: {
    /** 排序配置 */
    sortList: {
      type: Array as PropType<(string | number)[]>,
      default: () => [],
    },
    /** 排序key名 */
    keyName: {
      type: String,
      default: 'sort-key',
    },
  },
  setup(props, { slots }) {
    const renderVNodes = computed(() => {
      const vNodeList = slots.default?.() || [];
      const sortVNodeMap = getVNodeMap(props.keyName, vNodeList);
      const sortVNodeList = Array.from(new Set(props.sortList)).map(key => sortVNodeMap[key]).filter(Boolean);
      return sortDefaultVNodes(props.keyName, vNodeList, props.sortList, sortVNodeList);
    });

    return () => renderVNodes.value;
  },
});

/** 获取插槽中需要排序的节点 */
function getVNodeMap(keyName: string, vNodeList: VNode[], vNodeMap: Record<(string | number), VNode> = {}) {
  vNodeList.forEach((item) => {
    const sortKey = item.props?.[keyName];
    if (sortKey) {
      if (vNodeMap[sortKey]) {
        console.warn(`<mt-sort-space> ${keyName}: ${sortKey} repeat`);
      }
      else {
        vNodeMap[sortKey] = item;
      }
      return;
    }
    if (Array.isArray(item.children)) {
      getVNodeMap(keyName, item.children as VNode[], vNodeMap);
    }
  });
  return vNodeMap;
}

/** 根据排序后的节点跟换位置 */
function sortDefaultVNodes(keyName: string, vNodeList: VNode[], sortList: (string | number)[], sortVNodeList: VNode[]) {
  const newList: VNode[] = [];
  vNodeList.forEach((vNode) => {
    const sortKey = vNode.props?.[keyName];
    if (sortKey && sortList.includes(sortKey)) {
      const sortVNode = sortVNodeList.shift();
      if (sortVNode) {
        newList.push(sortVNode);
        return;
      }
    }
    if (Array.isArray(vNode.children)) {
      vNode = { ...vNode }; // 避免修改原节点数据
      vNode.children = sortDefaultVNodes(keyName, vNode.children as VNode[], sortList, sortVNodeList);
    }
    newList.push(vNode);
  });
  return newList;
}
