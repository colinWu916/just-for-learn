import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './assets/css/default.css'
import store from './store'
import '../src/api/mock'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu',router);
  }
}).$mount('#app')
