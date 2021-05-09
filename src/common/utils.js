// 封装简单的防抖函数
export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    // 清除上次生成还未执行的定时器
    clearTimeout(timer);
    setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}