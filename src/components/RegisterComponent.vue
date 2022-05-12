<template>
  <div id="container " class="d-flex flex-row">
    <div class="container__left css-register">
      <img src="@/assets/image1.png" alt="" />
    </div>
    <div class="container__right css-register">
      <div class="container css-register d-flex align-start flex-column">
        <div class="container__header css-register">
          <p class="container__header-text css-register">Đăng ký tài khoản</p>
        </div>
        <div class="container__gird">
          <ValidationObserver ref="form" v-slot="{ invalid }" @submit.prevent="onSubmit()">
            <form>
              <ValidationProvider
                name="cmnd"
                rules="required|numeric|requiredCmnd"
                v-slot="{ errors }">
                <v-col cols="12" class="form__email css-form">
                  <label for="password" class="subtitle-1 font-weight-regular"
                    >Số CMND/CCCD <span class="start">(*)</span></label
                  >
                  <v-text-field
                    name="cmnd"
                    class="input input-cmnd"
                    type="text"
                    v-model="cmnd"
                    outlined
                    :error-messages="errors"
                    placeholder="Số CMND/CCCD"
                    hide-details="false"
                    hint="false"></v-text-field>
                  <span class="messageError">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>
              <ValidationProvider name="email" rules="requiredEmail|email" v-slot="{ errors }">
                <v-col cols="12" class="form__email css-form">
                  <label for="password" class="subtitle-1 font-weight-regular"
                    >Email <span class="start">(*)</span></label
                  >
                  <v-text-field
                    name="email"
                    class="input input-cmnd"
                    type="email"
                    outlined
                    :error-messages="errors"
                    v-model="email"
                    placeholder="Email"
                    hide-details="false"
                    hint="false"></v-text-field>
                  <span class="messageError">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>
              <ValidationProvider
                name="password"
                rules="requiredPw|alphaSpaces|min:8"
                v-slot="{ errors }">
                <v-col cols="12" class="form__email css-form">
                  <label for="password" class="subtitle-1 font-weight-regular"
                    >Mật khẩu <span class="start">(*)</span></label
                  >
                  <v-text-field
                    name="password"
                    class="input input-cmnd"
                    type="password"
                    outlined
                    :error-messages="errors"
                    v-model="password"
                    placeholder="********"
                    hide-details="false"
                    hint="false"></v-text-field>
                  <span class="messageError">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>
              <ValidationProvider name="fullname" rules="required" v-slot="{ errors }">
                <v-col cols="12" class="form__email css-form">
                  <label for="password" class="subtitle-1 font-weight-regular"
                    >Họ và tên <span class="start">(*)</span></label
                  >
                  <v-text-field
                    name="fullname"
                    class="input input-cmnd"
                    type="text"
                    outlined
                    :error-messages="errors"
                    v-model="fullname"
                    placeholder="Họ và tên"
                    hide-details="false"
                    hint="false"></v-text-field>
                  <span class="messageError">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>
              <ValidationProvider name="date" :rules="'required'" v-slot="{ errors }" slim>
                <v-col cols="12" class="form__email css-form">
                  <label for="birthday" class="subtitle-1 font-weight-regular"
                    >Ngày sinh <span class="start">(*)</span></label
                  >
                  <v-menu
                    name="birthday"
                    ref="menu"
                    :rules="[(v) => !!v || 'Required']"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="birthday"
                    transition="scale-transition"
                    offset-y
                    min-width="auto">
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        name="birthday"
                        v-model="birthday"
                        label="ngày/tháng/năm"
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
                </v-col>
              </ValidationProvider>
              <ValidationProvider name="gender" rules="required" v-slot="{ errors }">
                <v-col cols="12" class="form__email css-form">
                  <label for="gender" class="subtitle-1 font-weight-regular"
                    >Giới tính <span class="start">(*)</span></label
                  >
                  <v-radio-group v-model="gender" row>
                    <v-radio label="nam" value="radio-1"></v-radio>
                    <v-radio label="nữ" value="radio-2"></v-radio>
                  </v-radio-group>
                  <span class="messageError">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>
              <ValidationProvider name="selectProvincial" rules="required" v-slot="{ errors }">
                <div class="mt">
                  <label for="password" class="subtitle-1 font-weight-regular"
                    >Tỉnh/Thành phố <span class="start">(*)</span></label
                  >
                  <v-col class="d-flex" cols="12" sm="6" name="selectProvincial">
                    <v-select
                      :items="items"
                      label="Tỉnh/Thành phố"
                      outlined
                      hide-details="auto"
                      data-name="selectProvincial"
                      v-model="selectProvincial"
                      :error-messages="errors"
                      return-object
                      item-text="name"
                      item-value="id">
                    </v-select>
                  </v-col>
                </div>
              </ValidationProvider>
              <ValidationProvider name="selectDistricts" rules="required" v-slot="{ errors }">
                <div class="mt">
                  <label for="password" class="subtitle-1 font-weight-regular"
                    >Quận/Huyện <span class="start">(*)</span></label
                  >
                  <v-col class="d-flex" cols="12" sm="6" name="selectDistricts">
                    <v-select
                      :items="districts"
                      label="Quận/Huyện"
                      outlined
                      data-name="selectDistricts"
                      v-model="selectDistricts"
                      :error-messages="errors"
                      item-text="name"
                      item-value="id"></v-select>
                  </v-col>
                </div>
              </ValidationProvider>
              <ValidationProvider name="selectWards" rules="required" v-slot="{ errors }">
                <div class="mt">
                  <label for="password" class="subtitle-1 font-weight-regular"
                    >Xã/Phường <span class="start">(*)</span></label
                  >
                  <v-col class="d-flex" cols="12" sm="6" name="selectWards">
                    <v-select
                      :items="wards"
                      label="Xã/Phường"
                      outlined
                      data-name="selectWards"
                      v-model="selectWards"
                      hide-details="auto"
                      item-text="name"
                      item-value="id"
                      :error-messages="errors"></v-select>
                  </v-col>
                </div>
              </ValidationProvider>
              <div class="container__dialogactions css-register">
                <v-btn :disabled="invalid" type="submit">
                  TIẾP TỤC
                  <i class="bx bx-right-arrow-alt"></i>
                </v-btn>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import { required, min, email, numeric } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';
import { WardSetInput, DistrictsSetInput, ProvincialSetInput } from '../components/type';
extend('numeric', {
  ...numeric,
  message: 'bắt buộc phải là số'
});
extend('requiredEmail', {
  ...required,
  message: 'Bắt buộc phải nhập email!'
});
extend('required', {
  ...required,
  message: 'bắt buộc phải nhập'
});
extend('requiredPw', {
  ...required,
  message: 'Bắt buộc password!'
});
extend('email', {
  ...email,
  message: 'bắt buộc phải là email'
});
extend('min', {
  ...min,
  message: 'bắt buộc 8 kí tự'
});
extend('alphaSpaces', {
  message: (field) => `${field}` + ' ' + 'không được nhập dấu cách',
  validate: (value) => {
    for (let i = 0; i < value.length - 1; i++) {
      let input = value.charAt(i);
      if (input == ' ') {
        return false;
      }
    }
    return true;
  }
});
extend('requiredCmnd', {
  message: (field) => `${field}` + ' ' + 'phải 9 hoặc 12 số',
  validate: (value) => {
    if (value.length == 9 || value.length == 12) {
      return true;
    }
    return false;
  }
});

@Component({})
export default class UserComponent extends Vue {
  $router: any;
  menu = false;
  cmnd = '';
  email = '';
  password = '';
  fullname = '';
  birthday = '';
  gender = 'radio-1';
  selectWards = '';
  selectProvincial = '';
  selectDistricts = '';
  wards: WardSetInput[] = [];
  districts: DistrictsSetInput[] = [];
  items: ProvincialSetInput[] = [
    {
      id: 1,
      name: 'thaibinh',
      districts: [
        {
          id: 1,
          name: 'thaithuy',
          wards: [
            {
              id: 1,
              name: 'diem dien'
            },
            {
              id: 2,
              name: 'thuy truong'
            }
          ]
        },
        {
          id: 2,
          name: 'kienxuong',
          wards: [
            {
              id: 1,
              name: 'diem dien1'
            },
            {
              id: 2,
              name: 'thuy truong1'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'hanoi',
      districts: [
        {
          id: 1,
          name: 'hk',
          wards: [
            {
              id: 1,
              name: 'truong dinh'
            },
            {
              id: 2,
              name: 'traica'
            }
          ]
        },
        {
          id: 2,
          name: 'caugiay',
          wards: [
            {
              id: 1,
              name: 'truong dinh1'
            },
            {
              id: 2,
              name: 'traica1'
            }
          ]
        }
      ]
    }
  ];
  @Watch('selectProvincial')
  onchangeProvincials() {
    if (this.selectProvincial) {
      let nameProvincial = this.items.find((e) => e.name == this.selectProvincial['name']);
      if (!nameProvincial) {
        return;
      }
      this.districts = nameProvincial.districts;
    }
  }
  @Watch('selectDistricts')
  onchangeDistricts() {
    if (this.selectDistricts) {
      let nameDistricts = this.districts.find((e) => e.name);
      if (!nameDistricts) {
        return;
      }
      this.wards = nameDistricts.wards;
    }
  }
  requiredRules = [(v: any) => !!v || 'This field is required'];
  delay(time: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
  async onSubmit() {
    await this.delay(2000);
    this.$router.push('/user');
  }
}
</script>
<style>
.container__left.css-register {
  position: fixed;
  width: 50%;
}
.container__right.css-register {
  width: 100%;
  margin-left: 50%;
  z-index: 1;
}
.container.css-register {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
}
.container.css-register .container__header.css-register {
  width: 400px;
  height: 42px;
}
.container.css-register .container__header-text.css-register {
  font-size: 34px;
  font-weight: bold;
  text-align: center;

  margin-top: 12px;
}
.container__right.css-register .messageError {
  color: red;
  font-size: 12px;
  padding: 0 0 12px;
}
.v-application p {
  margin-bottom: 0px !important;
}
.container.css-register .container__gird {
  width: 400px;
}

.container.css-register .container__gird .col {
  padding: 16px 0 0 0;
  position: relative;
}
.container.css-register .container__gird .bxs-down-arrow {
  position: absolute;
  left: 95%;
  top: 7%;
  font-size: 10px;
  color: #000000;
}
.container.css-register .container__gird .v-input {
  padding-top: 5px;
}
.container.css-register .container__gird .start {
  color: red;
}
.v-text-field--outlined .v-label {
  top: 15px !important;
}
.v-text-field--enclosed .v-input__append-inner,
.v-text-field--enclosed .v-input__append-outer,
.v-text-field--enclosed .v-input__prepend-inner,
.v-text-field--enclosed .v-input__prepend-outer,
.v-text-field--full-width .v-input__append-inner,
.v-text-field--full-width .v-input__append-outer,
.v-text-field--full-width .v-input__prepend-inner,
.v-text-field--full-width .v-input__prepend-outer {
  margin-top: 13.5px !important;
}
.v-input--radio-group__input {
  border: none;
  cursor: default;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.v-input--selection-controls {
  margin-top: 0 !important;
}
.v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 50px !important;
}
.container__right .container__dialogactions.css-register {
  width: 400px;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}
.container__right.css-register .theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background: none !important;
}
.container__right.css-register .v-btn__content {
  padding-top: 4px;
  color: #3f51b5 !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 !important;
}

.container a {
  text-decoration: none;
  font-size: 14px;
  font-weight: medium;
}
.container__right .container__dialogactions.css-register .bx-right-arrow-alt {
  color: #3f51b5;
  margin-left: 8px;

  font-size: 15px;
}
.container__right.css-register .mt {
  margin-top: 16px;
}
.col-sm-6 {
  max-width: 100% !important;
  padding: 0px !important;
}
.v-input__slot {
  margin-bottom: 0px !important;
}
.v-text-field__details {
  min-height: 0px !important;
}
.v-messages {
  min-height: 0 !important;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0 !important;
  padding-top: 0;
}
</style>
