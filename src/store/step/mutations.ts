import { MutationTree } from 'vuex';
import { StepState } from './type';
export enum StepMutation {
  SET_STEP = 'SET_STEP'
}
export const mutations: MutationTree<StepState> = {
  [StepMutation.SET_STEP](state: StepState, payload: StepState): void {
    state.healthInsurance = payload.healthInsurance;
  }
};
