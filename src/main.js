import Vue from 'vue'
import App from './App.vue'
import cscroll from './components/public/c-scroll.vue'
import cbox from './components/public/c-box.vue'
// import echarts from 'echarts'  //引入echarts
const echarts = require('echarts');

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('c-scroll',cscroll)
Vue.component('c-box',cbox)
new Vue({
  render: h => h(App),
}).$mount('#app')
