import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
