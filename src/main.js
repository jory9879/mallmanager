import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/css/reset.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
//使用element插件
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
