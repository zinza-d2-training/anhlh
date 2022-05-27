<template>
  <div class="container css-certificate d-flex flex-column">
    <div class="container__top">
      <div class="container__top-title d-flex container__header">
        <div>
          <p>Thông tin cá nhân</p>
        </div>
        <div>
          <v-btn depressed plain @click="isClick1()" height="24px" min-width="24px">
            <v-icon v-if="isEditing1"> mdi-close </v-icon>
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
                  :readonly="isFocus1"
                  outlined
                  dense
                  :error-messages="errors"
                  class="form__input"
                  v-model="result[0].cmnd"></v-text-field>
              </div>
            </ValidationProvider>
            <div class="form__control-grid">
              <ValidationProvider name="fullname" rules="required" v-slot="{ errors }">
                <div class="form__control d-flex flex-column">
                  <label for="">Họ và tên</label>
                  <v-text-field
                    :readonly="isFocus1"
                    outlined
                    dense
                    :error-messages="errors"
                    class="form__input"
                    v-model="result[0].name"></v-text-field>
                </div>
              </ValidationProvider>
              <ValidationProvider name="birthday" :rules="'required'" v-slot="{ errors }" slim>
                <div class="form__control d-flex flex-column">
                  <label for="">Ngày sinh</label>
                  <v-text-field
                    :readonly="isFocus1"
                    outlined
                    dense
                    :error-messages="errors"
                    class="form__input"
                    v-model="result[0].birthday"></v-text-field>
                </div>
              </ValidationProvider>
              <ValidationProvider name="gender" rules="required" v-slot="{ errors }">
                <div class="form__control d-flex flex-column">
                  <label for="">Giới tính</label>
                  <v-text-field
                    :readonly="isFocus1"
                    outlined
                    dense
                    :error-messages="errors"
                    class="form__input"
                    v-model="result[0].gender"></v-text-field>
                </div>
              </ValidationProvider>
              <ValidationProvider name="province" rules="required" v-slot="{ errors }">
                <div class="form__control d-flex flex-column">
                  <label for="">Tỉnh/Thành phố</label>
                  <v-select
                    dense
                    :items="provinces"
                    outlined
                    data-name="province"
                    v-model="selectedProvince"
                    :error-messages="errors"
                    return-object
                    item-text="name"
                    item-value="id"
                    :readonly="isFocus1"
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
                    :readonly="isFocus1"
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
                    :readonly="isFocus1"
                    class="form__input"></v-select>
                </div>
              </ValidationProvider>
            </div>
            <div class="d-flex form__btn">
              <button class="btn__form btn__cancel">Hủy Bỏ</button>
              <v-btn :disabled="invalid" type="submit" class="btn__form btn__save"> Lưu </v-btn>
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
          <v-btn depressed plain @click="isClick2()" height="24px" min-width="24px">
            <v-icon v-if="isEditing2"> mdi-close </v-icon>
            <v-icon v-else> mdi-pencil </v-icon>
          </v-btn>
        </div>
      </div>
      <ValidationObserver ref="form" v-slot="{ invalid }" @submit.prevent="onSubmit()">
        <form action="">
          <div class="form__group form__password d-flex flex-column form__padding">
            <ValidationProvider name="ward" rules="required" v-slot="{ errors }">
              <div class="">
                <label for="">Mật khẩu mới</label>
                <v-text-field
                  outlined
                  dense
                  v-model="password"
                  :error-messages="errors"
                  :value="formPassword.password"
                  :readonly="isFocus2"></v-text-field>
              </div>
            </ValidationProvider>
            <ValidationProvider name="ward" rules="required" v-slot="{ errors }">
              <div>
                <label for="">Xác nhận lại mật khẩu</label>
                <v-text-field
                  outlined
                  dense
                  :error-messages="errors"
                  v-model="forgotPassword"
                  :value="formPassword.forgotPassword"
                  :readonly="isFocus2"></v-text-field>
              </div>
            </ValidationProvider>
          </div>
          <div class="d-flex form__btn form__padding">
            <button class="btn__form btn__cancel">Hủy Bỏ</button>
            <v-btn :disabled="invalid || disable" type="submit" class="btn__form btn__save">
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
import { Province, Gender, Ward, District, labelFromGender } from '../homes/type';
@Component({})
export default class UserComponent extends Vue {
  @Prop({})
  result!: any;
  disabled: boolean = false;
  formPassword = {
    password: 'haianh',
    forgotPassword: 'haianh'
  };
  isFocus1 = true;
  isFocus2 = true;
  isEditing1 = false;
  isEditing2 = false;
  isClick1() {
    this.isEditing1 = !this.isEditing1;
    this.isFocus1 = !this.isFocus1;
  }
  isClick2() {
    this.isEditing2 = !this.isEditing2;
    this.isFocus2 = !this.isFocus2;
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
  getLabelGender(gender: Gender) {
    return labelFromGender(gender);
  }

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
  background-color: #3f51b5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
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
