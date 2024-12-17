import type { PluginOption } from 'vite';
import copy from 'rollup-plugin-copy';

/** copy 插件配置 */
export function copyPlugin(outputPath: string) {
  return copy({
    verbose: true,
    hook: 'buildStart',
    targets: [
      {
        src: 'README.md',
        dest: outputPath,
      },
      {
        src: 'package.json',
        dest: outputPath,
      },
    ],
  }) as PluginOption;
}
