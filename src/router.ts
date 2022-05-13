import Vue, { ComponentOptions } from 'vue';
import VueRouter from 'vue-router';
import ForgotPassword from './components/ForgotPassword.vue';
import LoginComponent from './components/LoginComponent.vue';
import UserComponent from './components/UserComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: LoginComponent as ComponentOptions<Vue>
    },
    {
      path: '/user',
      component: UserComponent as ComponentOptions<Vue>
    },
    {
      path: '/forgot-password',
      component: ForgotPassword as ComponentOptions<Vue>
    },
    {
      path: '/register',
      component: RegisterComponent as ComponentOptions<Vue>
    }
  ]
});
