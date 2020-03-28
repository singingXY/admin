import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/axios.js'
import '@/assets/css/reset.css' // 重置样式
// import '@/assets/css/element-variables.scss'
import '@/assets/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
