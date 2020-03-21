import Vue from 'vue'
import '@/assets/css/reset.css' // 重置样式
import App from './App.vue'
import './plugins/element.js'
import router from './router'
 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
