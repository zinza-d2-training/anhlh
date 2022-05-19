<template>
  <div>
    <div class="navbar-header">
      <div class="navbar-container">
        <p class="navbar-container-text">Tra cứu đăng ký tiêm</p>
      </div>
    </div>
    <div class="navbar-search">
      <div class="navbar-container">
        <div class="navbar-search__header">
          <v-stepper v-model="e1" alt-labels light>
            <v-stepper-header>
              <v-stepper-step step="2"> Thông tin cá nhân </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3"> Phiếu đồng ý tiêm </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="4">Hoàn thành </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
      </div>
    </div>
    <Step2></Step2>
    <Step1></Step1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
@Component({
  components: {
    Step1,
    Step2
  }
})
export default class UserComponent extends Vue {
  e1 = 2;
  // groupPrioritize: string[] = [
  //   '1. Người nghèo',
  //   '2. Người nghèo',
  //   '3. Người nghèo',
  //   '4. Người nghèo'
  // ];
  // injections: string[] = ['Buổi sáng', 'Buổi chiều', 'Buổi tối'];
  // healthInsurance: string = '';
  // job: string = '';
  // workUnit: string = '';
  // address: string = '';
  // birthday = '';
  // disabled: boolean = false;
  // onSubmit() {
  //   this.e1++;
  // }
}
</script>
<style>
.navbar-header {
  width: 100%;
  background: #f5f5f5;
  margin-top: 34px;
  height: 64px;
  display: flex;
  align-items: center;
}
.navbar-container {
  width: 1368px;
  margin: 0 auto;
}
.navbar-header .navbar-container p {
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 133.4%;
  color: rgba(0, 0, 0, 0.87);
}
.navbar-search {
  width: 100%;
  margin-top: 34px;
  margin-bottom: 100px;
}
.navbar-search .navbar-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.navbar-search .navbar-container .navbar-search__header {
  width: 604px;
  height: 24px;
  margin: 0 auto;
}
</style>
