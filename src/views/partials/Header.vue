<template>
  <div class="header">
    <div class="container css-header">
      <div class="container__brand">
        <div class="container__brand-logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="container__brand-typography">
          <h6>CỔNG THÔNG TIN TIÊM CHỦNG COVID-19</h6>
        </div>
      </div>
      <div class="container__menu">
        <ul class="container__menu-list">
          <li class="container__menu-item"><router-link to="/home"> TRANG CHỦ</router-link></li>
          <li class="container__menu-item">
            <router-link to="/register-person"> ĐĂNG KÝ TIÊM</router-link>
          </li>
          <li class="container__menu-item search">
            <router-link to="/search-injections">TRA CỨU </router-link>
            <v-icon class="chevron-down">mdi-chevron-down</v-icon>
            <ul class="sub-menu">
              <li class="sub-item">
                <div class="frame-53 frame-53-top">
                  <div class="frame-57">
                    <div class="frame-54"><v-icon>mdi-account-multiple</v-icon></div>
                    <div class="frame-55">
                      <router-link to="/search-injections"
                        ><span class="frame-55-top"> Tra cứu chứng nhận tiêm</span></router-link
                      >
                      <span class="frame-55-bottom">Cập nhập nhanh và chính xác</span>
                    </div>
                  </div>
                  <div class="frame-57">
                    <i class="bx bx-right-arrow-alt"></i>
                  </div>
                </div>
              </li>
              <li class="sub-item">
                <div class="frame-53 frame-53-bottom">
                  <div class="frame-57">
                    <div class="frame-54"><v-icon>mdi-account-multiple</v-icon></div>
                    <div class="frame-55">
                      <router-link to="/search-injections/?pace=2"
                        ><span class="frame-55-top"> Tra cứu kết quả đăng ký</span></router-link
                      >
                      <span class="frame-55-bottom">Cập nhập nhanh và chính xác</span>
                    </div>
                  </div>
                  <div class="frame-57">
                    <i class="bx bx-right-arrow-alt"></i>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="container__menu-item"><router-link to="/document"> TÀI LIỆU </router-link></li>
          <li class="container__menu-item user" v-if="getEmail">
            <span style="color: #ffffff">Xin chào {{ getEmail }}</span>
            <v-icon class="chevron-down">mdi-chevron-down</v-icon>
            <ul class="sub-menu">
              <li class="sub-item">
                <div class="frame-53 frame-53-top">
                  <div class="frame-57">
                    <div class="frame-54"><v-icon>mdi-account-multiple</v-icon></div>
                    <div class="frame-55">
                      <router-link to="/search-injections"> Trang cá nhân </router-link>
                    </div>
                  </div>
                  <div class="frame-57">
                    <i class="bx bx-right-arrow-alt"></i>
                  </div>
                </div>
              </li>
              <li class="sub-item">
                <div class="frame-53 frame-53-bottom">
                  <div class="frame-57">
                    <div class="frame-54"><v-icon>mdi-account-multiple</v-icon></div>
                    <div class="frame-55">
                      <router-link to="/search-injections"> Đăng xuất </router-link>
                    </div>
                  </div>
                  <div class="frame-57">
                    <i class="bx bx-right-arrow-alt"></i>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="container__menu-item btn-login">
            <div class="container__menu-login" v-if="!getEmail">
              <router-link to="/auth/login">ĐĂNG NHẬP</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UserState } from '../../store/user/type';
import { mapState, mapGetters } from 'vuex';
@Component({
  computed: {
    ...mapState({ user: (state) => state }),
    ...mapGetters(['getEmail'])
  }
})
export default class UserComponent extends Vue {
  user!: UserState;
}
</script>
<style>
.header {
  height: 80px;
  background: linear-gradient(90deg, #ed1b23 0%, #2e3091 52.08%, #253494 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 15px 0px;
}
.header .container.css-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  max-width: 1368px;
  height: 50px;
  margin: 0 auto;
}
.header .container.css-header .container__brand {
  display: flex;
  flex-direction: row;

  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 435px;
  height: 50px;
}
.header .container.css-header .container__brand img {
  width: 42px;
}
.header .container.css-header .container__brand .container__brand-typography {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 377px;
  height: 32px;
}
.header .container.css-header .container__brand .container__brand-typography h6 {
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 160%;
  letter-spacing: -0.05px;

  color: #ffffff;
}
.header .container.css-header .container__menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  height: 50px;
}
.header .container.css-header .container__menu .container__menu-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;

  height: 50px;
  list-style: none;
}
.header .container.css-header .container__menu .container__menu-list li {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  cursor: pointer;
}
.header .container.css-header .container__menu .container__menu-list .search {
  position: relative;
}
.header .container.css-header .container__menu .container__menu-list .user {
  position: relative;
}
.header .container.css-header .container__menu .container__menu-list .container__menu-login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
  gap: 4px;
  width: 135px;
  height: 40px;
  background: #ffffff;
  border-radius: 8px 8px 8px 0px;
}
.header .container.css-header .container__menu .container__menu-list .container__menu-login a {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.04px;
  text-transform: uppercase;
  color: #303f9f;
  width: 91px;
  height: 24px;
}
.header .container.css-header .container__menu .container__menu-list .search:hover .sub-menu {
  opacity: 1;
  transition: 0.3s;
  z-index: 1;
}
.header .container.css-header .container__menu .container__menu-list .user:hover .sub-menu {
  opacity: 1;
  transition: 0.3s;
  z-index: 1;
}
.header .container.css-header .container__menu .container__menu-list li a {
  color: #ffffff;
}
.header .container.css-header .container__menu .container__menu-list li .chevron-down {
  color: #ffffff;
}

.header .container.css-header .container__menu .container__menu-list li .sub-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  list-style: none;
  position: absolute;
  width: 361px;
  height: 180px;
  left: -150%;
  top: 150%;
  opacity: 0;
  background: #ffffff;
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
}
.header .container.css-header .container__menu .container__menu-list .user .sub-menu {
  left: -30%;
  width: 300px;
}
.header .container.css-header .container__menu .container__menu-list .user .sub-menu li {
  width: 300px;
}
.header .container.css-header .container__menu .container__menu-list li .sub-menu li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 24px;
  width: 361px;
  height: 74px;
}
.header .container.css-header .container__menu .container__menu-list li .sub-menu li .frame-53 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;

  width: 313px;
  height: 74px;
}
.header .container.css-header .container__menu .container__menu-list .user .sub-menu li .frame-53 {
  width: 100px;
}
.header
  .container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53
  .frame-57 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 231px;
  height: 42px;
}
.header
  .container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53
  .frame-56 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 24px;

  width: 48px;
  height: 24px;

  border-radius: 6px;
}
.header
  .container.css-header
  .container__menu
  .container__menu-list
  .user
  .sub-menu
  li
  .frame-53
  .frame-57
  .frame-55 {
  width: 100px;
}
.header
  .container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53
  .frame-57
  .frame-55 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 179px;
  height: 42px;
}
.header
  .container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53
  .frame-57
  .frame-55
  a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  font-style: normal;
  font-weight: 400;
  color: #000;
  width: 177px;
  height: 24px;
}
.container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53
  .frame-57
  .frame-55-top {
  font-size: 15px;
}
.container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53
  .frame-57
  .frame-55-bottom {
  font-size: 12px;
}
.container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53
  .frame-57
  .frame-54 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px;

  width: 36px;
  height: 36px;

  border-radius: 6px;
}
.container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53-top
  .frame-57
  .frame-54 {
  background: #ede7f6;
}
.container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53-bottom
  .frame-57
  .frame-54 {
  background: #f8f8f8;
}
.container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53-top
  .frame-57
  .frame-54
  i {
  color: #5e35b1;
}
.container.css-header
  .container__menu
  .container__menu-list
  li
  .sub-menu
  li
  .frame-53-bottom
  .frame-57
  .frame-54
  i {
  color: #1e88e5;
}
</style>

function Getter() { throw new Error('Function not implemented.'); } function Getter() { throw new
Error('Function not implemented.'); }
