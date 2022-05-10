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
        <ValidationObserver ref="form" v-slot="{ invalid }">
          <form @submit.prevent="onSubmit">
            <div class="form mt">
              <ValidationProvider name="email" rules="requiredCmnd|email" v-slot="{ errors }">
                <v-col cols="12" class="form__cmnd">
                  <label for="email" class="subtitle-1 font-weight-regular"> Email</label>
                  <v-text-field
                    name="email"
                    class="input input-cmnd"
                    placeholder="vd:anh@gmail.com"
                    hide-details="false"
                    v-model="user.email"
                    outlined></v-text-field>
                  <span class="messageError">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>
              <ValidationProvider
                name="password"
                rules="requiredPw|alphaSpaces|min:8"
                v-slot="{ errors }">
                <v-col cols="12" class="form__pw">
                  <label for="password" class="subtitle-1 font-weight-regular">Mật khẩu</label>
                  <v-text-field
                    class="input input-cmnd"
                    type="password"
                    outlined
                    placeholder="*************"
                    hide-details="false"
                    v-model="user.password"
                    hint="false"></v-text-field>
                </v-col>
                <span class="messageError">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="container__links d-flex justify-end align-center mt">
              <div class="container__links-text">
                <router-link to="/forgot-password" class="body-2">Quên mật khẩu</router-link>
              </div>
            </div>
            <div class="container__login mt" :class="{ disabled: invalid }">
              <button type="submit" class="btn-login subtitle-2 body-2 font-weight-bold">
                ĐĂNG NHẬP
              </button>
            </div>
          </form>
        </ValidationObserver>
        <div class="container__text d-flex justify-center mt">
          <div class="subtitle-1">Hoặc đăng ký tài khoản nếu bạn chưa có!</div>
        </div>
        <div class="container__register mt d-flex flex-column align-start">
          <router-link
            to="/register"
            class="container__register-link subtitle-2 body-2 font-weight-bold">
            ĐĂNG KÝ
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { extend } from 'vee-validate';
import { required, min, email } from 'vee-validate/dist/rules';
import { mapMutations, mapState } from 'vuex';
import { userMutation } from '../store/user/mutations';
import { UserState } from '../store/user/type';
extend('requiredCmnd', {
  ...required,
  message: 'Bắt buộc phải nhập email!'
});
extend('requiredPw', {
  ...required,
  message: 'Bắt buộc password!'
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
extend('email', {
  ...email,
  message: 'bắt buộc phải là email'
});
extend('min', {
  ...min,
  message: 'bắt buộc 8 kí tự'
});
@Component({
  computed: {
    ...mapState({ user: (state) => state })
  },
  methods: {
    ...mapMutations([userMutation.SET_USER, userMutation.SET_TOKEN])
  }
})
export default class LoginComponent extends Vue {
  $router: any;
  user!: UserState;

  // eslint-disable-next-line no-unused-vars
  [userMutation.SET_USER]: (user: UserState) => void;
  // eslint-disable-next-line no-unused-vars
  [userMutation.SET_TOKEN]: (token: string) => void;

  delay(time: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
  async onSubmit() {
    let token = '12345678';
    localStorage.setItem('token', token);
    this[userMutation.SET_USER](this.user);
    this[userMutation.SET_TOKEN](token);
    await this.delay(2000);
    this.$router.push('/user');
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  display: none;
}
#container {
  width: 100%;
  box-sizing: border-box;
  flex-flow: row nowrap;
}
.container__right {
  flex-basis: 50%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  overflow: auto;
  overflow-y: auto !important;
  min-height: min-content;
  position: relative;
}
.container__left {
  flex-basis: 50%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 50%;
}
.container__left img {
  width: 100%;
  height: 100vh;

  object-fit: cover;
  vertical-align: middle;
}
.container__right .container {
  width: 387px;

  padding: 0 0;
  position: relative;

  top: 124px;
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-flow: column wrap;
}
.container .mt {
  margin-top: 24px;
}
.container__header {
  width: 387px;

  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 123.5%;
}
.form {
  width: 387px;
  flex: 0 0 0;
  padding: 0;
}
.form .v-text-field.v-text-field--enclosed {
  margin-top: 8px;
}
.form .col {
  padding: 0;
}
.form .col-12 {
  width: 387px;

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

.form .col-12 .v-application .headline,
.form .col-12 .v-application .title {
  line-height: 0;
}
.form .messageError {
  color: red;
  font-size: 12px;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__login.disabled {
  background: rgb(224 224 224);
}
.container__login .btn-login {
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
}
.container__register-link {
  margin-left: 163.106px;
  color: #9ccc65 !important;
  margin-top: 15px;
}
</style>
