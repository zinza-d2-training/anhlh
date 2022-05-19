import { GetterTree } from 'vuex';
import { StepState } from './type';

export const getters: GetterTree<StepState, any> = {
  getHealthInsurance(state): string {
    return state.healthInsurance;
  }
};
