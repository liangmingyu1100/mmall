let obj = {};
import Toast from './Toast'
// 安装插件->执行对象的install方法
obj.install = function (Vue) {

  // 1.创建toast组件构造器
  let toastConstructor = Vue.extend(Toast);
  // 2.根据组件构造器new出组件对象
  let toast = new toastConstructor();
  // 3.将组件对象手动挂载到一个元素上
  toast.$mount(document.createElement('div'));
  // 4.将挂载后的组件对象追加到页面中
  document.body.appendChild(toast.$el);
  // 5.将改组件对象复制到Vue中的prototype中
  Vue.prototype.$toast = toast

}


export default obj