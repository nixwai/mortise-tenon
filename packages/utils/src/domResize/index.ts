import type { DomResizeOptions } from './types';
import { initResize } from './helper';
import { resizeByPointer } from './pointer-resize';

/**
 * 调整容器
 * @param options 配置项 - {@link DomResizeOptions}
 */
export function domResize(options: DomResizeOptions) {
  if (!options.target) { return; }
  const resizeData = initResize(options);
  if (options.event) {
    resizeByPointer(resizeData);
  }
}

export * from './types';
