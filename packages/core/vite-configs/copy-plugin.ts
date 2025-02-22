import type { PluginOption } from 'vite';
import copy from 'rollup-plugin-copy';

/** copy 插件配置 */
export function copyPlugin(outputPath: string, copyFiles = ['README.md', 'package.json']) {
  return copy({
    verbose: true,
    hook: 'buildStart',
    targets: copyFiles.map(file => ({
      src: file,
      dest: outputPath,
    })),
  }) as PluginOption;
}
