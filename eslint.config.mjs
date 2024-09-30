import path from 'node:path';
import antfu from '@antfu/eslint-config';
import { includeIgnoreFile } from '@eslint/compat';

const gitignorePath = path.resolve('.gitignore');

export default antfu(
  {
    formatters: true,
    unocss: true,
    vue: true,
  },
  includeIgnoreFile(gitignorePath),
  {
    files: ['**/*.vue'],
    rules: {},
  },
  {
    rules: {
      'style/semi': ['error', 'always'], // 末尾带分号
      'object-curly-newline': ['error', { multiline: true }], // 花括号内换行规则
    },
  },
);
