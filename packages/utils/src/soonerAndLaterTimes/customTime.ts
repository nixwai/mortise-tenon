import type { FormatOptions } from 'date-fns';
import {
  endOfDay,
  endOfDecade,
  endOfHour,
  endOfISOWeek,
  endOfISOWeekYear,
  endOfMinute,
  endOfMonth,
  endOfQuarter,
  endOfSecond,
  endOfWeek,
  endOfYear,
  format,
  startOfDay,
  startOfDecade,
  startOfHour,
  startOfISOWeek,
  startOfISOWeekYear,
  startOfMinute,
  startOfMonth,
  startOfQuarter,
  startOfSecond,
  startOfWeek,
  startOfYear,
} from 'date-fns';

/** 时间类型 */
export type TimeDate = Date | string | number | null | undefined;

/** 传入的时间参数 */
export type TimeParam = TimeDate[] | TimeDate;

/**
 * 函数的参数
 * @param_0 时间
 * @param_1 时间格式，默认为时间戳，注意大小写(https://date-fns.org/v4.1.0/docs/format)
 * @param_2 时间格式选项(https://github.com/date-fns/date-fns/blob/main/docs/unicodeTokens.md)
 */
type SoonerAndLaterParams = [TimeParam?, string?, FormatOptions?];

/**
 * 根据时间起始结束函数转化时间
 * @param timesParams 时间参数
 * @param fns 开始时间与结束时间的传化函数
 */
function formatOfTimeFn(
  timesParams: SoonerAndLaterParams,
  fns: ((time: string | number | Date, options?: FormatOptions) => Date)[],
) {
  let [times, formatValue = 'T', options] = timesParams;
  const [startFn, endFn] = fns;
  if (!times) {
    return undefined;
  }
  if (!Array.isArray(times)) {
    times = [times, times];
  }
  const startTime = times[0] ? format(startFn(times[0], options), formatValue, options) : '';
  const endTime = times[1] ? format(endFn(times[1], options), formatValue, options) : '';
  return startTime || endTime ? [startTime, endTime] : undefined;
}

/**
 * 获取日期的一天最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterDay(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfDay, endOfDay]);
}

/**
 * 获取日期的一小时最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterHour(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfHour, endOfHour]);
}

/**
 * 获取日期的一分钟最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterMinute(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfMinute, endOfMinute]);
}

/**
 * 获取日期的一秒钟最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterSecond(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfSecond, endOfSecond]);
}

/**
 * 获取日期的一个月最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterMonth(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfMonth, endOfMonth]);
}

/**
 * 获取对应的一年最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterYear(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfYear, endOfYear]);
}

/**
 * 获取对应的一周最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterWeek(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfWeek, endOfWeek]);
}

/**
 * 获取对应的十年最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterDecade(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfDecade, endOfDecade]);
}

/**
 * 获取对应的季度最早一刻到最晚一刻
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterQuarter(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfQuarter, endOfQuarter]);
}

/**
 * 获取对应的一ISO周最早一刻到最晚一刻
 * @see ISO: https://zh.wikipedia.org/wiki/ISO%E9%80%B1%E6%97%A5%E6%9B%86
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterISOWeek(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfISOWeek, endOfISOWeek]);
}

/**
 * 获取对应的一ISO周年最早一刻到最晚一刻
 * @see ISO: https://zh.wikipedia.org/wiki/ISO%E9%80%B1%E6%97%A5%E6%9B%86
 * @params 参数：(时间，格式，格式选项) - {@link SoonerAndLaterParams}
 * @returns [开始时间, 结束时间]
 */
export function soonerAndLaterISOWeekYear(...params: SoonerAndLaterParams) {
  return formatOfTimeFn(params, [startOfISOWeekYear, endOfISOWeekYear]);
}
