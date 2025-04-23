import type { FormatOptions } from 'date-fns';
import { endOfDay, format, startOfDay } from 'date-fns';

type TimeDate = Date | string | number | null | undefined;

/**
 * 获取对应时间从00:00:00开始到23:59:59结束的范围
 * @param times 时间
 * @param formatValue 时间格式，默认为时间戳，注意大小写(https://date-fns.org/v4.1.0/docs/format)
 * @param options 时间格式选项(https://github.com/date-fns/date-fns/blob/main/docs/unicodeTokens.md)
 * @returns [开始时间, 结束时间]
 */
export function timeSoonerAndLater(times?: TimeDate[] | TimeDate, formatValue = 'T', options?: FormatOptions) {
  if (!times) {
    return undefined;
  }
  if (!Array.isArray(times)) {
    times = [times, times];
  }
  const startTime = times[0] ? format(startOfDay(times[0]), formatValue, options) : '';
  const endTime = times[1] ? format(endOfDay(times[1]), formatValue, options) : '';
  return startTime || endTime ? [startTime, endTime] : undefined;
}
