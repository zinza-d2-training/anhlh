<template>
  <div id="container" class="d-flex flex-row">
    <div class="container__left">
      <img src="@/assets/image1.png" alt="" />
    </div>
    <div class="container__right">
      <div class="container css-fp d-flex align-start flex-column">
        <div class="container__header">
          <p class="container__header-text">
            Để khôi phục mật khẩu,vui lòng nhập đúng email bạn đã dùng để đăng ký
            <span style="color: red">(*)</span>
          </p>
        </div>
        <div class="container__form css-form">
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">
              <ValidationProvider name="email" rules="requiredEmail|email" v-slot="{ errors }">
                <v-col cols="12" class="form__email css-form">
                  <v-text-field
                    name="email"
                    class="input input-cmnd"
                    type="email"
                    outlined
                    placeholder="Email"
                    v-model="email"
                    hide-details="false"
                    hint="false"></v-text-field>
                  <span class="messageError">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>
              <div class="container__dialogactions">
                <button class="btn btn-refesh">QUAY LẠI</button>
                <button class="btn btn-send" type="submit" :class="{ disabled: invalid }">
                  GỬI
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { extend } from 'vee-validate';
import { email, required } from 'vee-validate/dist/rules';
extend('email', {
  ...email,
  message: 'bắt buộc phải là email'
});
extend('requiredEmail', {
  ...required,
  message: 'Bắt buộc phải nhập email!'
});
@Component({})
export default class ForgotPassword extends Vue {
  $router: any;
  data() {
    return {
      email: ''
    };
  }
  delay(time: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
  async onSubmit() {
    console.log('ok');
    await this.delay(2000);
    this.$router.push('/login');
  }
}
</script>
<style>
.container__right .container.css-fp {
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
  /* top: 0; */
  margin: auto 0;
  height: 206px;
  width: 479px;
}
.container__right .container .container__header {
  width: 479px;
  height: 48px;
  top: 0;
  margin-bottom: 24px;
  line-height: 24px;
}
.container__right .container .container__header .v-application p {
  margin-bottom: 0;
}
.container__right .container.css-fp .container__header-text {
  font-size: 16px;
  font-weight: 400;

  list-style: 24px;
  text-align: center;
  letter-spacing: -0.04px;
  padding: 0px 40px;

  color: rgba(0, 0, 0, 0.87);
}
.container__right .container__form {
  height: 134px;
}
.container__right .container__form .form__email {
  display: flex;
  flex-direction: column;
  width: 479px;
  padding: 0;
}
.container__right .container__form .form__email .messageError {
  color: red;
  font-size: 14px;
}
.container__right .container__form .form__email .v-input__slot {
  min-height: 50px;
}
.container__right .container__dialogactions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 479px;
  height: 60px;
}
.container__right .container__dialogactions {
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  margin-top: 24px;
}
.container__right .container .btn {
  border-radius: 8px 8px 8px 0px;
}
.container__right .container__dialogactions .btn-refesh {
  width: 101px;
  height: 36px;

  color: #303f9f;
  border: 1px solid #303f9f;

  margin-right: 16px;
}
.container__right .container__dialogactions .btn-send {
  width: 91px;
  height: 36px;
  background: #303f9f;

  color: #ffffff;
}
</style>
