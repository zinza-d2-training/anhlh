import { GetterTree } from 'vuex';
import { UserState } from './type';

export const getters: GetterTree<UserState, any> = {
  getCmnd(state): string {
    return state.email;
  },
  getPassword(state): string {
    return state.password;
  }
};
