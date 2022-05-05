import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
// import VueEllipseProgress from 'vue-ellipse-progress';

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// Vue.use(VueEllipseProgress);
Vue.config.productionTip = false;
new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
