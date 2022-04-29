<template>
  <div id="container" class="d-flex flex-row">
    <div class="container__left">
      <img src="@/assets/image1.png" alt="" />
    </div>
    <div class="container__right">
      <div class="container d-flex align-start flex-column">
        <div class="container__header">
          <div class="display-1 font-weight-bold">Đăng nhập vào tài khoản</div>
        </div>
        <div class="form mt">
          <v-col cols="12" class="form__cmnd">
            <label for="cmnd" class="title font-weight-regular">
              Chứng minh nhân dân/Căn cước công dân</label
            >
            <v-text-field
              class="input input-cmnd"
              label="số cmnd"
              hide-details="false"
              outlined></v-text-field>
          </v-col>
          <v-col cols="12" class="form__pw">
            <label for="password" class="title font-weight-regular">Mật khẩu</label>
            <v-text-field
              class="input input-cmnd"
              type="password"
              label="Password"
              outlined
              hide-details="false"
              hint="false"></v-text-field>
          </v-col>
        </div>

        <div class="container__links d-flex justify-end align-center mt">
          <div class="container__links-text">
            <a href="" class="body-2">Quên mật khẩu</a>
          </div>
        </div>
        <div class="container__login mt">
          <button class="btn-login">Đăng nhập</button>
        </div>
        <div class="container__text d-flex justify-center mt">
          <div class="subtitle-1">Hoặc đăng ký tài khoản nếu bạn chưa có!</div>
        </div>
        <div class="container__register mt">
          <div class="container__register-flex d-flex flex-column align-start">
            <div class="btn-register subtitle-2 body-2 font-weight-bold">Đăng ký</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class LoginComponent extends Vue {
  @Prop() count!: number;

  mounted() {}
}
</script>
<style>
#container {
  width: 1400px;
  height: 983px;
  margin: 0 auto;
  border: 1px solid #ccc;
}
.container__right {
  width: 700px;
  height: 983px;
}
.container__left {
  width: 700px;
  height: 983px;
}
.container__right .container {
  width: 387px;
  height: 477px;
  padding: 0 0;
  position: relative;
  left: 156.5px;
  top: 253.5px;
  margin-right: 0;
  margin-left: 0;
}
.container .mt {
  margin-top: 24px;
}
.container__header {
  width: 387px;
  height: 39px;
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 123.5%;
}
.form {
  height: 174px;
  width: 387px;
  flex: 0 0 0;
  padding: 0;
}
.form .col {
  padding: 0;
}
.form .col-12 {
  width: 387px;
  height: 79px;
  padding: 0;
}

.form__cmnd {
  width: 387px;
  height: 79px;
  padding: 0;
}
.form__pw {
  margin-top: 16px;
}
.form .v-input {
  height: 50px;
}
.form .v-input__control {
  height: 50px;
}
.form .v-text-field__detail {
  min-height: 0;
  height: 0px;
}
.form .v-text-field.v-text-field--enclosed .v-text-field__detail {
  margin-bottom: 0;
}
.form .v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 50px;
}
.form .input-cmnd {
  margin-bottom: 16px;
}
.form .col-12 .v-application .headline,
.form .col-12 .v-application .title {
  line-height: 0;
}
.container__links {
  width: 387px;
  height: 20px;
}
.container__links-text {
  width: 101px;
}
.container__links-text a {
  text-decoration: none;
  color: #3949ab;
}
.container__login {
  position: relative;
  width: 387px;
  height: 50px;

  background-color: #66bb6a;
  border-radius: 5px;
}
.btn-login {
  position: absolute;
  left: 39.48%;
  right: 39.19%;
  top: 30%;
  bottom: 32%;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.container__text {
  width: 387px;
  height: 24px;
}
.container__register {
  width: 387px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #9ccc65;
  margin-top: 24px;
}
.container__register-flex {
  position: relative;
  left: 0%;
  right: 0%;
  top: 26%;
  bottom: 26%;
  width: 387px;
  height: 24px;
}
.btn-register {
  color: #9ccc65;
  margin: 0 43%;
}
</style>
