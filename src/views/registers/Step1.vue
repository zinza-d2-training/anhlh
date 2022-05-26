<template>
  <div class="navbar-result">
    <div class="navbar-container">
      <div class="form">
        <div class="frame-35">
          <p>1. Thông tin người đăng ký tiêm</p>
        </div>
        <div class="frame-36 frame-width">
          <div class="row">
            <ValidationProvider name="groupPrioritize" rules="required" v-slot="{ errors }">
              <div class="mt">
                <label for="groupPrioritize" class="subtitle-1 font-weight-regular"
                  >Nhóm ưu tiên
                </label>
                <v-col class="d-flex" cols="12" sm="6" name="groupPrioritize">
                  <v-select
                    dense
                    :items="groupPrioritize"
                    placeholder="Nhóm ưu tiên"
                    outlined
                    data-name="selectGroupPrioritize"
                    :error-messages="errors"></v-select>
                </v-col>
              </div>
            </ValidationProvider>
            <ValidationProvider
              name="selectHealthInsurance"
              rules="required|numeric|requiredHealthInsurance"
              v-slot="{ errors }">
              <div class="mt">
                <label for="selectHealthInsurance" class="subtitle-1 font-weight-regular"
                  >Số thẻ BHYT
                </label>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    name="selectHealthInsurance"
                    dense
                    placeholder="Số thẻ BHYT"
                    outlined
                    v-model="selectHealthInsurance"
                    :error-messages="errors"></v-text-field>
                </v-col>
              </div>
            </ValidationProvider>
          </div>
        </div>
        <div class="frame-37 frame-width">
          <div class="row">
            <ValidationProvider name="job" rules="required" v-slot="{ errors }">
              <div class="mt">
                <label for="job" class="subtitle-1 font-weight-regular">Nghề nghiệp </label>
                <v-col class="d-flex" cols="12" sm="6" name="job">
                  <v-text-field
                    dense
                    placeholder="Nghề nghiệp"
                    outlined
                    data-name="job"
                    v-model="job"
                    :error-messages="errors"></v-text-field>
                </v-col>
              </div>
            </ValidationProvider>
            <ValidationProvider name="workUnit" rules="required" v-slot="{ errors }">
              <div class="mt">
                <label for="workUnit" class="subtitle-1 font-weight-regular"
                  >Đơn vị công tác
                </label>
                <v-col class="d-flex" cols="12" sm="6" name="workUnit">
                  <v-text-field
                    dense
                    placeholder="Đơn vị công tác"
                    outlined
                    data-name="workUnit"
                    v-model="workUnit"
                    :error-messages="errors"></v-text-field>
                </v-col>
              </div>
            </ValidationProvider>
            <ValidationProvider name="address" rules="required" v-slot="{ errors }">
              <div class="mt">
                <label for="address" class="subtitle-1 font-weight-regular"
                  >Địa chỉ hiện tại
                </label>
                <v-col class="d-flex" cols="12" sm="6" name="address">
                  <v-text-field
                    dense
                    placeholder="Địa chỉ hiện tại"
                    outlined
                    data-name="address"
                    v-model="selectAddress"
                    :error-messages="errors"></v-text-field>
                </v-col>
              </div>
            </ValidationProvider>
          </div>
        </div>
        <div class="frame-38">
          <p>2. Thông tin đăng ký tiêm chủng</p>
        </div>
        <div class="frame-39 frame-width">
          <div class="row">
            <ValidationProvider name="birthday" rules="required" v-slot="{ errors }">
              <div class="mt">
                <label for="birthday" class="subtitle-1 font-weight-regular"
                  >Ngày muốn được tiêm (dự kiến) <span class="start">(*)</span></label
                >
                <v-menu
                  dense
                  name="birthday"
                  ref="menu"
                  :rules="[(v) => !!v || 'Required']"
                  :close-on-content-click="false"
                  :return-value.sync="birthday"
                  transition="scale-transition"
                  offset-y
                  min-width="auto">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      dense
                      name="birthday"
                      v-model="birthday"
                      placeholder="ngày/tháng/năm"
                      append-icon="mdi-calendar"
                      outlined
                      v-on="on"
                      readonly
                      :rules="[(v) => !!v || 'đây là trường bắt buộc']"
                      :error-messages="errors[0]"></v-text-field>
                  </template>
                  <v-date-picker v-model="birthday" data-vv-as="birthday" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(birthday)"> OK </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </ValidationProvider>
            <ValidationProvider name="injections" rules="required" v-slot="{ errors }">
              <div class="mt">
                <label for="injections" class="subtitle-1 font-weight-regular"
                  >Buổi tiêm mong muốn
                </label>
                <v-col class="d-flex" cols="12" sm="6" name="injections">
                  <v-select
                    dense
                    :items="injections"
                    placeholder="Buổi tiêm mong muốn"
                    outlined
                    data-name="injections"
                    v-model="selectInjections"
                    :error-messages="errors"></v-select>
                </v-col>
              </div>
            </ValidationProvider>
          </div>
        </div>
        <div class="frame-40">
          <p class="text-color">Lưu ý:</p>
        </div>
        <div class="frame-41">
          <ul class="step1">
            <li class="text-color">
              Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch tiêm chủng Vắc xin
              COVID - 19
            </li>
            <li class="text-color">
              Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và tên, Ngày tháng năm sinh, Số
              điện thoại, Số CMND/CCCD/Mã định danh công dân/HC ...)
            </li>
            <li class="text-color">
              Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các
              thông tin đã cung cấp.
            </li>
            <li class="text-color">
              Cá nhân/Tổ chức đăng ký thành công trên hệ thống sẽ được đưa vào danh sách đặt tiêm.
              Cơ sở y tế sẽ thông báo lịch tiêm khi có vắc xin và kế hoạch tiêm được phê duyệt. Trân
              trọng cảm ơn!
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { StepState } from '../../store/step/type';
import { StepMutation } from '../../store/step/mutations';
import { mapState, mapMutations } from 'vuex';
import { extend } from 'vee-validate';
import { numeric } from 'vee-validate/dist/rules';
extend('requiredHealthInsurance', {
  message: (field) => `${field}` + ' ' + 'phải 9 hoặc 12 số',
  validate: (value) => {
    if (value.length == 9 || value.length == 12) {
      return true;
    }
    return false;
  }
});
extend('numeric', {
  ...numeric,
  message: 'bắt buộc phải là số'
});
@Component({
  computed: {
    ...mapState({ step: (state) => state })
  },
  methods: {
    ...mapMutations([StepMutation.SET_STEP])
  }
})
export default class NavbarComponent extends Vue {
  step!: StepState;
  // eslint-disable-next-line no-unused-vars
  [StepMutation.SET_STEP]: (step: StepState) => void;
  selectHealthInsurance: string = '';
  groupPrioritize: string[] = [
    '1. Người nghèo',
    '2. Người nghèo',
    '3. Người nghèo',
    '4. Người nghèo'
  ];
  injections: string[] = ['Buổi sáng', 'Buổi chiều', 'Buổi tối'];
  selectInjections: string = '';
  selectGroupPrioritize: string = '';
  job: string = '';
  workUnit: string = '';
  selectAddress: string = '';
  birthday = '';
  selectGroup: string = '';
  @Watch('selectHealthInsurance')
  onSelectShealthInsurance() {
    this[StepMutation.SET_STEP](this.step);

    this.step.healthInsurance = this.selectHealthInsurance;
  }
}
</script>
<style>
.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: none;
}
.navbar-result {
  width: 100%;
}
.navbar-result .form .v-text-field.v-text-field--enclosed {
  width: 386px;
}
.navbar-result .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.navbar-result .form .start {
  color: red;
}
.navbar-result ul.step1 {
  display: flex;
  padding-left: 0;
  flex-direction: column;
  gap: 0;
}
.navbar-result .frame-41 ul.step1 {
  list-style: disc outside;
}
.navbar-result .frame-width {
  width: 100%;
}
.navbar-result .form .navbar-result .navbar-container .form {
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 16px;
}
.navbar-result .row {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 0 !important;
}
.navbar-result .text-color {
  color: red;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
.frame-42 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 24px 0px 0px;
  height: 60px;
  gap: 16px;
}
.frame-42 .btn-refesh {
  width: 117px;
  height: 36px;

  border: 1px solid #303f9f;
  border-radius: 8px 8px 8px 0px;
  color: #303f9f;
}
.frame-42 .btn-send {
  width: 160px;
  height: 36px;

  background: #303f9f;
  border-radius: 8px 8px 8px 0px;
}
.form .v-input__control {
  height: 52px;
}
.theme--light.v-btn.v-btn--disabled,
.theme--light.v-btn.v-btn--disabled .v-btn__loading,
.theme--light.v-btn.v-btn--disabled .v-icon {
  color: #ffffff !important;
}
</style>
