import 'babel-polyfill' /* 解决IE兼容性问题 */
import Vue from 'vue'
import router from './router';
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css'; 
Vue.use(ElementUI);
import 'normalize.css' /*引入全局样式*/ //样式reset，处理浏览器起始样式兼容

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
