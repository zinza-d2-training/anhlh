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
              <v-stepper-step step="2" :complete="complete1"> Thông tin cá nhân </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3" :complete="complete2"> Phiếu đồng ý tiêm </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="4" :complete="complete3">Hoàn thành </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </div>
      </div>
    </div>
    <ValidationObserver v-slot="{ invalid }">
      <form action="" @submit.prevent="onSubmit">
        <Step1 v-show="pace == 1"></Step1>
        <Step2 v-show="pace == 2" :checkbox="checkbox" @checkbox="onCheckbox"></Step2>
        <vue-html2pdf
          :show-layout="false"
          :float-layout="false"
          :enable-download="true"
          :preview-modal="false"
          :paginate-elements-by-height="1400"
          filename="file register injection"
          :pdf-quality="2"
          :manual-pagination="false"
          pdf-format="a3"
          pdf-orientation="landscape"
          pdf-content-width="100%"
          @progress="onProgress($event)"
          @hasStartedGeneration="hasStartedGeneration()"
          @hasGenerated="hasGenerated($event)"
          ref="html2Pdf">
          <Step3 v-show="pace == 3" slot="pdf-content"></Step3>
        </vue-html2pdf>
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
            <v-btn class="btn-send" type="submit" :disabled="disabled" outlined text color="white">
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
import VueHtml2pdf from 'vue-html2pdf';

@Component({
  components: {
    Step1,
    Step2,
    Step3,
    VueHtml2pdf
  }
})
export default class NavbarComponent extends Vue {
  @Prop({})
  selectShealthInsurance!: string;
  location: number = 2;
  pace: number = 1;
  complete1: boolean = true;
  complete2: boolean = false;
  complete3: boolean = false;
  disabled: boolean = false;
  checkbox: boolean = false;
  onSubmit() {
    if (this.pace == 3) {
      (this.$refs.html2Pdf as any).generatePdf();
      return;
    } else {
      this.pace++;
      this.location++;
    }
    if (this.pace == 2) {
      this.complete1 = false;
      this.complete2 = true;
    } else if (this.pace == 3) {
      this.complete2 = false;
      this.complete1 = false;
      this.complete3 = true;
    }
  }
  decreaseStep() {
    this.pace--;
    this.complete2 = false;
    this.complete1 = true;
    this.complete3 = false;
  }
  onCheckbox(value: boolean) {
    this.checkbox = value;
  }
}
</script>
<style>
.navbar-main {
  margin-bottom: 675px;
}
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
