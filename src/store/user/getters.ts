import { GetterTree } from 'vuex';
import { UserState } from './type';

export const getters: GetterTree<UserState, any> = {
  getEmail(state): string {
    console.log(state.email);
    return state.email;
  },
  getToken(state): string | undefined {
    return state.access_token;
  }
};
