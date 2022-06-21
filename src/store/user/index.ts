import { UserState } from '@/store/user/type';
import { Module } from 'vuex';
import { RootState } from '..';
import { getters } from './getters';
import { mutations } from './mutations';
const state: UserState = {
  id: null,
  email: '',
  access_token: ''
};

export const user: Module<UserState, RootState> = {
  state,
  getters,
  mutations
};
