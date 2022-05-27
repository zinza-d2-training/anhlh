<template>
  <div class="container css-certificate d-flex flex-column">
    <div class="container__top">
      <div class="container__top-title d-flex container__header">
        <div>
          <p>Thông tin cá nhân</p>
        </div>
        <div>
          <v-btn depressed plain @click="isClickInFor()" height="24px" min-width="24px">
            <v-icon v-if="isEditingInFor"> mdi-close </v-icon>
            <v-icon v-else> mdi-pencil </v-icon>
          </v-btn>
        </div>
      </div>
      <ValidationObserver ref="form" v-slot="{ invalid }" @submit.prevent="onSubmit()">
        <form action="">
          <div class="form__group form__padding">
            <ValidationProvider
              name="cmnd"
              rules="required|numeric|requiredCmnd"
              v-slot="{ errors }">
              <div class="form__control d-flex flex-column form__control-top">
                <label for="">Số CMND/CCCD/Mã định danh</label>
                <v-text-field
                  :disabled="isFocusInFor"
                  outlined
                  dense
                  name="cmnd"
                  v-model="cmnd"
                  :error-messages="errors"
                  class="form__input"></v-text-field>
              </div>
            </ValidationProvider>
            <div class="form__control-grid">
              <ValidationProvider name="fullname" rules="required" v-slot="{ errors }">
                <div class="form__control d-flex flex-column">
                  <label for="">Họ và tên</label>
                  <v-text-field
                    :disabled="isFocusInFor"
                    outlined
                    dense
                    name="fullname"
                    v-model="fullname"
                    :error-messages="errors"
                    class="form__input"></v-text-field>
                </div>
              </ValidationProvider>
              <ValidationProvider name="birthday" :rules="required" v-slot="{ errors }" slim>
                <div class="form__control d-flex flex-column">
                  <label for="">Ngày sinh</label>
                  <v-text-field
                    :disabled="isFocusInFor"
                    outlined
                    dense
                    name="bỉthday"
                    v-model="birthday"
                    :error-messages="errors"
                    class="form__input"></v-text-field>
                </div>
              </ValidationProvider>
              <ValidationProvider name="gender" rules="required" v-slot="{ errors }">
                <div class="form__control d-flex flex-column">
                  <label for="">Giới tính</label>
                  <v-select
                    :items="selectGender"
                    :disabled="isFocusInFor"
                    outlined
                    dense
                    name="gender"
                    v-model="gender"
                    :error-messages="errors"
                    class="form__input"></v-select>
                </div>
              </ValidationProvider>
              <ValidationProvider name="province" rules="required" v-slot="{ errors }">
                <div class="form__control d-flex flex-column">
                  <label for="">Tỉnh/Thành phố</label>
                  <v-select
                    dense
                    :items="provinces"
                    outlined
                    name="province"
                    v-model="selectedProvince"
                    :error-messages="errors"
                    return-object
                    item-text="name"
                    item-value="id"
                    :disabled="isFocusInFor"
                    class="form__input"></v-select>
                </div>
              </ValidationProvider>
              <ValidationProvider name="district" rules="required" v-slot="{ errors }">
                <div class="form__control d-flex flex-column">
                  <label for="">Quận/Huyện</label>
                  <v-select
                    dense
                    :items="districts"
                    outlined
                    v-model="selectDistrict"
                    item-text="name"
                    item-value="id"
                    name="district"
                    return-object
                    :error-messages="errors"
                    :disabled="isFocusInFor"
                    class="form__input"></v-select>
                </div>
              </ValidationProvider>
              <ValidationProvider name="ward" rules="required" v-slot="{ errors }">
                <div class="form__control d-flex flex-column">
                  <label for="">Phường/Xã</label>
                  <v-select
                    dense
                    :items="wards"
                    outlined
                    name="ward"
                    v-model="selectWard"
                    return-object
                    item-text="name"
                    item-value="id"
                    :error-messages="errors"
                    :disabled="isFocusInFor"
                    class="form__input"></v-select>
                </div>
              </ValidationProvider>
            </div>
            <div class="form__btn d-flex" v-if="!isFocusInFor">
              <button class="btn__form btn__cancel" @click="CancelInFor()">Hủy Bỏ</button>
              <v-btn
                :disabled="invalid"
                type="submit"
                class="btn__form btn__save"
                @click="saveInFor()">
                Lưu
              </v-btn>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <div class="container__bottom">
      <div class="container__bottom-title d-flex container__header">
        <div>
          <p>Mật khẩu</p>
        </div>
        <div>
          <v-btn depressed plain @click="isClickPassword()" height="24px" min-width="24px">
            <v-icon v-if="isEditingPassword"> mdi-close </v-icon>
            <v-icon v-else> mdi-pencil </v-icon>
          </v-btn>
        </div>
      </div>
      <ValidationObserver ref="form" v-slot="{ invalid }" @submit.prevent="onSubmit()">
        <form action="">
          <div class="form__group form__password d-flex flex-column form__padding">
            <ValidationProvider name="password" rules="required" v-slot="{ errors }">
              <div class="">
                <label for="">Mật khẩu mới</label>
                <v-text-field
                  outlined
                  dense
                  v-model="password"
                  name="password"
                  :error-messages="errors"
                  :disabled="isFocusPassword"></v-text-field>
              </div>
            </ValidationProvider>
            <ValidationProvider name="forgotPassword" rules="required" v-slot="{ errors }">
              <div>
                <label for="">Xác nhận lại mật khẩu</label>
                <v-text-field
                  outlined
                  dense
                  name="forgotPassword"
                  v-model="forgotPassword"
                  :error-messages="errors"
                  :disabled="isFocusPassword"></v-text-field>
              </div>
            </ValidationProvider>
          </div>
          <div class="d-flex form__btn form__padding display__passwword" v-if="!isFocusPassword">
            <button class="btn__form btn__cancel" @click="CancelPassword()">Hủy Bỏ</button>
            <v-btn
              :disabled="invalid"
              type="submit"
              class="btn__form btn__save"
              @click="savePassword()">
              Lưu
            </v-btn>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Province, Gender, Ward, District, labelFromGender, genders } from '../homes/type';
@Component({})
export default class UserComponent extends Vue {
  @Prop({})
  disabled: boolean = false;
  password: string = 'haianh';
  forgotPassword: string = 'haianh';
  cmnd: string = '123456789123';
  fullname: string = 'nguyen van A';
  birthday: string = '21/23/2000';
  gender: Gender = Gender['MALE'];
  isFocusInFor = true;
  isFocusPassword = true;
  isEditingInFor = false;
  isEditingPassword = false;
  checkSaveInFor: boolean = false;
  checkSavePassword: boolean = false;
  isClickInFor() {
    this.isEditingInFor = !this.isEditingInFor;
    this.isFocusInFor = !this.isFocusInFor;
  }
  isClickPassword() {
    this.isEditingPassword = !this.isEditingPassword;
    this.isFocusPassword = !this.isFocusPassword;
  }
  CancelInFor() {
    this.isEditingInFor = !this.isEditingInFor;
    this.isFocusInFor = !this.isFocusInFor;
    if (!this.checkSaveInFor) {
      this.selectWard = {
        id: 1,
        name: 'diem dien'
      };
      this.selectedProvince = {
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
      };
      this.selectDistrict = {
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
      };
      this.cmnd = '123456789123';
      this.fullname = 'nguyen van A';
      this.birthday = '21/23/2000';
      this.gender = Gender['MALE'];
    }
  }
  saveInFor() {
    this.isEditingInFor = !this.isEditingInFor;
    this.isFocusInFor = !this.isFocusInFor;
    this.checkSaveInFor = true;
  }
  savePassword() {
    this.isEditingPassword = !this.isEditingPassword;
    this.isFocusPassword = !this.isFocusPassword;
    this.checkSavePassword = true;
  }
  CancelPassword() {
    this.isEditingPassword = !this.isEditingPassword;
    this.isFocusPassword = !this.isFocusPassword;
    if (!this.checkSavePassword) {
      this.password = 'haianh';
      this.forgotPassword = 'haianh';
    }
  }
  selectWard: Ward | null = {
    id: 1,
    name: 'diem dien'
  };
  selectedProvince: Province | null = {
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
  };
  selectDistrict: District | null = {
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
  };
  getLabelGender(gender: Gender = Gender['MALE']) {
    return labelFromGender(gender);
  }
  selectGender: Gender[] = genders();
  provinces: Province[] = [
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
  get districts(): District[] | [] {
    return this.selectedProvince?.districts ?? [];
  }
  get wards(): Ward[] {
    return this.selectDistrict?.wards ?? [];
  }
  @Watch('selectedProvince')
  onchangeSlectedprovince() {
    this.selectDistrict = null;
    this.selectWard = null;
  }
  @Watch('selectDistrict')
  onchangeSelectDistrict() {
    this.selectWard = null;
  }
}
</script>

<style>
.form__padding {
  padding: 0 16px;
}
.form__control-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

.form__input {
  width: 318px;
  height: 40px;
  outline: none;
  border-radius: 4px;
  border: 1px solid#C4C4C4;
  padding: 0px 8px;
}
.btn__form {
  height: 36px;
  border-radius: 4px;
}

.btn__cancel {
  width: 84px;
  border: 1px solid rgba(63, 81, 181, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3f51b5;
}

.btn__save {
  width: 60px;
  background-color: #3f51b5 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff !important;
}
.container__top .container__top-title {
  margin-bottom: 16px;
}
.container__header p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding-right: 8px;
}
.form__control-top {
  margin-bottom: 24px;
}
.form__btn {
  margin-top: 24px;
  gap: 16px;
}
.container__bottom .form__group {
  gap: 16px;
}
.form__password {
  width: 318px;
}
.container__bottom {
  margin-top: 24px;
}
label {
  padding-bottom: 5px;
  height: 29px;
}
</style>
