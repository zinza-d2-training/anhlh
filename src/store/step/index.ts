import { StepState } from '@/store/step/type';
import { Module } from 'vuex';
import { getters } from './getters';
import { RootState } from '..';
import { mutations } from './mutations';
const state: StepState = {
  healthInsurance: ''
};

export const step: Module<StepState, RootState> = {
  state,
  getters,
  mutations
};
