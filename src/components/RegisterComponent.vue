<template>
  <div id="container" class="d-flex flex-row">
    <div class="container__left">
      <img src="@/assets/image1.png" alt="" />
    </div>
    <div class="container__right css-register">
      <div class="container css-register d-flex align-start flex-column">
        <div class="container__header css-register">
          <p class="container__header-text css-register">Đăng ký tài khoản</p>
        </div>
        <div class="container__gird">
          <form action="">
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Số CMND/CCCD <span class="start">(*)</span></label
              >
              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="Số CMND/CCCD"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Email <span class="start">(*)</span></label
              >
              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="Email"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Mật khẩu <span class="start">(*)</span></label
              >
              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="********"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Họ và tên <span class="start">(*)</span></label
              >
              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="Họ và tên"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Ngày sinh <span class="start">(*)</span></label
              >
              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="Ngày/Tháng/Năm"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Giới tính <span class="start">(*)</span></label
              >
              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="Giới tính"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Tỉnh/Thành phố <span class="start">(*)</span></label
              >
              <i class="bx bxs-down-arrow"></i>
              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="Tỉnh/Thành phố"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Quận/Huyện <span class="start">(*)</span></label
              >
              <i class="bx bxs-down-arrow"></i>

              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="Quận/Huyện"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
            <v-col cols="12" class="form__email css-form">
              <label for="password" class="subtitle-1 font-weight-regular"
                >Xã/Phường <span class="start">(*)</span></label
              >
              <i class="bx bxs-down-arrow"></i>
              <v-text-field
                name="email"
                class="input input-cmnd"
                type="email"
                outlined
                placeholder="Xã/Phường"
                v-model="email"
                hide-details="false"
                hint="false"></v-text-field>
            </v-col>
          </form>
        </div>
        <div class="container__dialogactions css-register">
          <router-link to="/" class="css-register">TIẾP TỤC</router-link>
          <i class="bx bx-right-arrow-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class UserComponent extends Vue {
  data() {
    return {
      email: ''
    };
  }
}
</script>
<style>
.container.css-register {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  position: relative;
  top: 200px;
  height: 1500px;
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
  top: 71%;
  font-size: 10px;
  color: #000000;
}
.container.css-register .container__gird .v-input {
  padding-top: 5px;
}
.container.css-register .container__gird .start {
  color: red;
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
.container a {
  text-decoration: none;
  font-size: 14px;
  font-weight: medium;
}
.container__right .container__dialogactions.css-register .bx-right-arrow-alt {
  color: #3f51b5;
  margin-left: 8px;
}
</style>
