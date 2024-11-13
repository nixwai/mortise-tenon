# 开始使用

mortise-tenon-tool提供了前端开发的工具函数，拥有更多丰富的数据操作方法，不限任何框架使用。

# 安装

#### 使用 npm

```shell
npm install mortise-tenon-tool
```

#### 使用 yarn

```shell
yarn add mortise-tenon-tool
```

#### 使用 pnpm

```shell
pnpm add mortise-tenon-tool
```

#### 使用示例

只需从mortise-tenon-tool导入你需要的函数

```js
import { objectFormatKey } from 'mortise-tenon-tool';

objectFormatKey({ oldKey: 1 }, ['oldKey', 'newKey']);
```
