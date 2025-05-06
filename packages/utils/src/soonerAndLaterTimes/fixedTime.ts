import type { FormatOptions } from 'date-fns';
import { endOfToday, endOfTomorrow, endOfYesterday, format, startOfToday, startOfTomorrow, startOfYesterday } from 'date-fns';

/**
 * 函数的参数
 * @param_0 时间
 * @param_1 时间格式，默认为时间戳，注意大小写(https://date-fns.org/v4.1.0/docs/format)
 * @param_2 时间格式选项(https://date-fns.org/v4.1.0/docs/format#types/FormatOptions/630)
 */
type SoonerAndLaterParams = [string?, FormatOptions?];

/**
 * 根据时间起始结束函数转化时间
 * @param timesParams 时间参数
 * @param fns 开始时间与结束时间的传化函数
 */
function formatOfTimeFn(
  timesParams: SoonerAndLaterParams,
  fns: ((options?: FormatOptions) => Date)[],
) {
  const [formatValue = 'T', options] = timesParams;
  const [startFn, endFn] = fns;
  const fnOptions = { ...options, in: undefined };
  const startTime = format(startFn(fnOptions), formatValue, options);
  const endTime = format(endFn(fnOptions), formatValue, options);
  return startTime || endTime ? [startTime, endTime] : undefined;
}

/**
 * 获取日期的今天最早一刻到最晚一刻
 * @params 参数：(时间格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterToday(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfToday, endOfToday]);
}

/**
 * 获取日期的昨天最早一刻到最晚一刻
 * @params 参数：(时间格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterYesterday(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfYesterday, endOfYesterday]);
}

/**
 * 获取日期的明天最早一刻到最晚一刻
 * @params 参数：(时间格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterTomorrow(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfTomorrow, endOfTomorrow]);
}
