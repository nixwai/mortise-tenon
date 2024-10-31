import { onBeforeUnmount, ref } from 'vue';

type AnyFn = (...args: any[]) => any;

/**
 * 节流控制
 * @param ms 节流时间(ms)
 * @param fn 节流函数
 */
export function useThrottleControl<Fn extends AnyFn>(ms: number = 200, fn?: Fn) {
  /** 节流状态 */
  const throttleOpen = ref(false);
  /** 当前执行的定时器 */
  let runningTimer: NodeJS.Timeout | undefined;

  /** 开启节流，已在执行的会被覆盖 */
  function openThrottle() {
    closeThrottle();
    throttleOpen.value = true;
    runningTimer = setTimeout(() => {
      closeThrottle();
    }, ms);
    return runningTimer;
  }

  /** 关闭节流定时器 */
  function closeThrottle(timer?: NodeJS.Timeout) {
    // 如果有传入timer时，会判断是否为当前执行开启的定时器
    if (!timer || timer === runningTimer) {
      throttleOpen.value = false;
      if (runningTimer) {
        clearTimeout(runningTimer);
        runningTimer = undefined;
      }
    }
  }

  /** 节流控制方法 */
  const throttleFn = ((...args: any[]) => {
    // 节流状态开启中，不可重复执行
    if (throttleOpen.value) {
      return;
    }
    openThrottle();
    return fn?.(...args);
  }) as Fn;

  /** 移除时销毁定时器 */
  onBeforeUnmount(() => {
    closeThrottle();
  });

  return {
    throttleOpen,
    throttleFn,
    openThrottle,
    closeThrottle,
  };
}

export type UseThrottleControlReturn = ReturnType<typeof useThrottleControl>;
