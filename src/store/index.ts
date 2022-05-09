import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { user } from '@/store/user/index';
Vue.use(Vuex);

export interface RootState {}

const store: StoreOptions<RootState> = {
  modules: {
    user
  }
};

export default new Vuex.Store<any>(store);
