<template>
  <div class="navbar-main">
    <div class="navbar-header">
      <div class="navbar-container">
        <p class="navbar-container-text">Tra cứu đăng ký tiêm</p>
      </div>
    </div>
    <div class="navbar-search">
      <div class="navbar-container">
        <div class="navbar-search__header">
          <v-stepper v-model="location" alt-labels light>
            <v-stepper-header>
              <v-stepper-step step="2" complete> Thông tin cá nhân </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3"> Phiếu đồng ý tiêm </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="4">Hoàn thành </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
      </div>
    </div>
    <ValidationObserver v-slot="{ invalid }">
      <form action="" @submit.prevent="onSubmit">
        <Step1 v-if="pace == 1"></Step1>
        <Step2 v-if="pace == 2" :checkbox="checkbox" @checkbox="onCheckbox"></Step2>
        <Step3 v-show="pace == 3"></Step3>
        <div class="frame-42" v-if="pace == 1">
          <div class="btn">
            <router-link to="/">
              <v-btn class="btn-refesh" outlined>
                <v-icon>mdi-arrow-left-thin</v-icon> HUỶ BỎ</v-btn
              ></router-link
            >
          </div>
          <div class="btn">
            <v-btn
              class="btn-send"
              type="submit"
              :disabled="invalid || disabled"
              outlined
              text
              color="white">
              TIẾP TỤC <v-icon color="white">mdi-arrow-right-thin</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="frame-42" v-show="pace == 2">
          <div class="btn" @click="decreaseStep">
            <v-btn class="btn-refesh" outlined><v-icon>mdi-arrow-left-thin</v-icon>QUAY LẠI</v-btn>
          </div>
          <div class="btn">
            <v-btn
              class="btn-send"
              type="submit"
              outlined
              text
              color="white"
              :disabled="!checkbox || invalid">
              TIẾP TỤC <v-icon color="white" depressed>mdi-arrow-right-thin</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="frame-42 step3" v-show="pace == 3">
          <div class="btn">
            <router-link to="/">
              <v-btn class="btn-refesh" outlined>
                <v-icon>mdi-arrow-left-thin</v-icon>TRANG CHỦ</v-btn
              >
            </router-link>
          </div>
          <div class="btn">
            <v-btn
              class="btn-send"
              type="submit"
              :disabled="disabled"
              outlined
              text
              color="white"
              ref="html2Pdf">
              XUẤT THÔNG TIN <v-icon color="white">mdi-arrow-right-thin</v-icon>
            </v-btn>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import Step3 from './Step3.vue';
// import VueHtml2pdf from 'vue-html2pdf'
@Component({
  components: {
    Step1,
    Step2,
    Step3
  }
})
export default class NavbarComponent extends Vue {
  @Prop({})
  selectShealthInsurance!: string;
  location: number = 2;
  pace: number = 1;
  complete: boolean = false;
  disabled: boolean = false;
  checkbox: boolean = false;
  onSubmit() {
    this.pace++;
    this.location++;
    // if (this.$refs) {
    //   this.$refs.html2Pdf.generatePdf();
    // }
  }
  decreaseStep() {
    this.pace--;
  }
  onCheckbox(value: boolean) {
    this.checkbox = value;
  }
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
.frame-42.step3 .btn-refesh {
  width: 149px;
  height: 36px;

  border: 1px solid #303f9f;
  border-radius: 8px 8px 8px 0px;
  color: #303f9f;
}
.frame-42.step3 .btn-send {
  width: 218px;
  height: 36px;

  background: #303f9f;
  border-radius: 8px 8px 8px 0px;
}
.frame-42 a {
  text-decoration: none;
}
.v-stepper__step {
  padding: 24px 0px !important;
}
.frame-42 .btn-send.v-btn--disabled {
  pointer-events: none;
  background: #bdbdbd;
}
</style>
