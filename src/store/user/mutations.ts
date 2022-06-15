import { MutationTree } from 'vuex';
import { UserState } from './type';
export enum userMutation {
  SET_EMAIL = 'SET_EMAIL',
  SET_TOKEN = 'SET_TOKEN'
}
export const mutations: MutationTree<UserState> = {
  [userMutation.SET_EMAIL](state: UserState, payload: string): void {
    state.email = payload;
  },
  [userMutation.SET_TOKEN](state: UserState, payload: string): void {
    state.token = payload;
  }
};
