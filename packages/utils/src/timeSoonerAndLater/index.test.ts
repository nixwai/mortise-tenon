import { describe, expect, it } from 'vitest';
import { timeSoonerAndLater } from '.';

describe('test timeSoonerAndLater', () => {
  it('base use', () => {
    const result = ['1733155200000', '1733241599999'];
    expect(timeSoonerAndLater('2024-12-03')).toStrictEqual(result);
  });
  it('array use', () => {
    const result = ['1733068800000', '1733241599999'];
    expect(timeSoonerAndLater(['2024-12-02', '2024-12-03'])).toStrictEqual(result);
  });
  it('format use', () => {
    const result = ['2024/12/02 00:00:00', '2024/12/03 23:59:59'];
    expect(timeSoonerAndLater(['2024-12-02', '2024-12-03'], 'yyyy/MM/dd HH:mm:ss')).toStrictEqual(result);
  });
  it('options use', () => {
    const result = ['337', '338'];
    expect(timeSoonerAndLater(
      ['2024-12-02', '2024-12-03'],
      'DD',
      { useAdditionalDayOfYearTokens: true },
    )).toStrictEqual(result);
  });
});
