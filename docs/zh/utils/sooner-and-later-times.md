# soonerAndLater[times]

获取对应时间最早一刻与最晚一刻

## 函数

| 函数名                    | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| soonerAndLaterToday       | 今天最早一刻到最晚一刻                                       |
| soonerAndLaterYesterday   | 昨天最早一刻到最晚一刻                                       |
| soonerAndLaterTomorrow    | 明天最早一刻到最晚一刻                                       |
| soonerAndLaterDay         | 一天最早一刻到最晚一刻                                       |
| soonerAndLaterHour        | 一小时最早一刻到最晚一刻                                     |
| soonerAndLaterMinute      | 一分钟最早一刻到最晚一刻                                     |
| soonerAndLaterSecond      | 一秒钟最早一刻到最晚一刻                                     |
| soonerAndLaterMonth       | 一个月最早一刻到最晚一刻                                     |
| soonerAndLaterYear        | 一年最早一刻到最晚一刻                                       |
| soonerAndLaterISOWeekYear | 一[ISO周](https://zh.wikipedia.org/wiki/ISO%E9%80%B1%E6%97%A5%E6%9B%86)年最早一刻到最晚一刻 |
| soonerAndLaterWeek        | 一周最早一刻到最晚一刻                                       |
| soonerAndLaterISOWeek     | 一[ISO周](https://zh.wikipedia.org/wiki/ISO%E9%80%B1%E6%97%A5%E6%9B%86)最早一刻到最晚一刻 |
| soonerAndLaterDecade      | 十年最早一刻到最晚一刻                                       |
| soonerAndLaterQuarter     | 一季度最早一刻到最晚一刻                                     |

## 用法

<<< @/examples/utils/sooner-and-later-times/base.ts

## 日期格式

仅展示部分常用格式，在 [这里](https://date-fns.org/v4.1.0/docs/format) 可查看更多 date-fns 支持的日期格式。

:::warning
请注意大小写
:::

| 格式   | 含义       | 备注              | 举例          |
| ------ | ---------- | ----------------- | ------------- |
| `yyyy` | 年         |                   | 2017          |
| `M`    | 月         | 不补 0            | 1             |
| `MM`   | 月         |                   | 01            |
| `W`    | 周         | 不补 0            | 1             |
| `WW`   | 周         |                   | 01            |
| `d`    | 日         | 不补 0            | 2             |
| `dd`   | 日         |                   | 02            |
| `H`    | 小时       | 24 小时制；不补 0 | 3             |
| `HH`   | 小时       | 24 小时制         | 03            |
| `h`    | 小时       | 12 小时制；不补 0 | 3             |
| `hh`   | 小时       | 12 小时制         | 03            |
| `m`    | 分钟       | 不补 0            | 4             |
| `mm`   | 分钟       |                   | 04            |
| `s`    | 秒         | 不补 0            | 5             |
| `ss`   | 秒         |                   | 05            |
| `a`    | AM、PM     |                   | AM            |
| `aaa`  | am、pm     |                   | am            |
| `T`    | 毫秒时间戳 |                   | 1483326245000 |
| `t`    | 秒时间戳   |                   | 1483326245    |

## 特殊日期格式

部分特殊日期格式，如'Y'与'D'的含义与'y'与'd'的含义是不同的，启用的话需要额外配置options，详情请查看[format](https://date-fns.org/v4.1.0/docs/format)

<<< @/examples/utils/sooner-and-later-times/use-options.ts

## 参数类型

<<< @/../packages/utils/dist/types/soonerAndLaterTimes/fixedTime.d.ts

<<< @/../packages/utils/dist/types/soonerAndLaterTimes/customTime.d.ts

## 源码

[源代码](https://github.com/nixwai/mortise-tenon/blob/main/packages/utils/src/soonerAndLaterTimes/index.ts)
