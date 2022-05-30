import { GetterTree } from 'vuex';
import { UserState } from './type';

export const getters: GetterTree<UserState, any> = {
  getEmail(state): string {
    return state.email;
  },
  getPassword(state): string {
    return state.password;
  },
  getToken(state): string {
    return state.token;
  }
};
