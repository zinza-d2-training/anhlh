import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from '@/store/user/index';
import { step } from '@/store/step/index';
Vue.use(Vuex);

export interface RootState {}

const store: StoreOptions<RootState> = {
  modules: {
    user,
    step
  }
};

export default new Vuex.Store<any>(store);
