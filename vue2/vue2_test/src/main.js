import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'
Vue.config.productionTip = false

//调用插件
Vue.use(plugins)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //挂载事件总线
  }
}).$mount('#app')
