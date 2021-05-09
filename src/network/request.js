import axios from 'axios'
export function instance1(config) {
  // axios.create方法创建实例
  const instance = new axios.create({
    // 设置baseURL作用是之后输入路径地址即可 省略了前面的重复书写
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });
  // 拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err =>
    console.log(err))
  // axios本身就是用promise包裹起来的 直接进行返回即可
  return instance(config)
}
export function instance2(config) {
  const instance = new axios.create({
    // 设置baseURL作用是之后输入路径地址即可 省略了前面的重复书写
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });
  return instance(config)
}