import { MutationTree } from 'vuex';
import { UserState } from './type';
export enum userMutation {
  SET_USER = 'SET_USER',
  SET_TOKEN = 'SET_TOKEN'
}
export const mutations: MutationTree<UserState> = {
  [userMutation.SET_USER](state: UserState, payload: UserState): void {
    state.email = payload.email;
    state.id = payload.id;
  },
  [userMutation.SET_TOKEN](state: UserState, payload: UserState): void {
    state.token = payload.token;
  }
};
