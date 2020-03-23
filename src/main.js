import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import '@/assets/css/reset.css' // 重置样式
import '@/assets/css/iconfont.css' 
 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
