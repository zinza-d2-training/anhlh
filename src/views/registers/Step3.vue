<template>
  <div class="navbar-result step3">
    <div class="navbar-container">
      <ul class="navbar__menu">
        <li class="navbar__item">
          <p class="text-register item__text-center">
            Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm của bạn là
            <span class="navbar__item-id">0120211103501237</span>.
          </p>
        </li>
        <li>
          <p class="navbar__item item__text-center">
            Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin COVID-19. Hiện tại Bộ y tế đang tiến hành
            thu thập nhu cầu và thông tin để lập danh sách đối tượng đăng ký tiêm vắc xin COVID-19
            theo từng địa bàn. Chúng tôi sẽ liên hệ với quý khách theo số điện thoại
            <span class="navbar__item-phone">0123456789</span> khi có kế hoạch tiêm trong thời gian
            sớm nhất.
          </p>
        </li>

        <li class="navbar__item item__text-center">
          <p>
            Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" tại
            <a class="navbar__item-link" href="https://hssk.kcb.vn/#/sskdt"
              >https://hssk.kcb.vn/#/sskdt</a
            >
            để theo dõi kết quả đăng ký tiêm và nhận chứng nhận tiêm chủng COVID-19
          </p>
        </li>
        <li>
          <div class="table__grid grid1 d-flex">
            <div>
              <p>Họ và tên</p>
              <p>{{ desserts.name }}</p>
            </div>
            <div>
              <p>Ngày sinh</p>
              <p>{{ desserts.birthday }}</p>
            </div>
            <div>
              <p>Giới tính</p>
              <p>{{ desserts.gender }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="table__grid grid2 d-flex">
            <div>
              <p>Số CMND/CCCD/Mã định danh công dân</p>
              <p>{{ numberCard.citizenIdentification }}</p>
            </div>
            <div>
              <p>Số thẻ BHYT</p>
              <p>{{ step.healthInsurance }}</p>
            </div>
            <div></div>
          </div>
        </li>
        <li>
          <div class="table__grid grid2 d-flex">
            <div>
              <p>Tỉnh/Thành phố</p>
              <p>{{ country.province }}</p>
            </div>
            <div>
              <p>Quận/Huyện</p>
              <p>{{ country.district }}</p>
            </div>
            <div>
              <p>Xã/Phường</p>
              <p>{{ country.ward }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StepState } from '../../store/step/type';
import { mapState } from 'vuex';
@Component({
  computed: {
    ...mapState({ step: (state) => state })
  }
})
export default class UserComponent extends Vue {
  step!: StepState;
  desserts = {
    name: 'Nguyễn văn A',
    birthday: '12/05/2001',
    gender: 'Nam'
  };
  country = {
    province: 'hà nội',
    district: 'hai bà trưng',
    ward: 'truong dinh'
  };
  numberCard = { citizenIdentification: 134141255 };
  onSubmit() {
    this.$emit('changeStep');
  }
}
</script>
<style>
.navbar-result {
  width: 100%;
}
.navbar-result .v-application ol,
.v-application ul {
  display: flex;
  padding-left: 0;
  flex-direction: column;
  gap: 16px;
}
.navbar-result ul li {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
.navbar-result .navbar__menu li .text-register {
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
}
.navbar-result .navbar__menu li .text-register .navbar__item-id {
  color: #ef5350;
}
.navbar-result .navbar__menu .item__text-center p {
  width: 100%;
  text-align: center;
}
.navbar-result .navbar__menu li p .navbar__item-phone {
  color: #1e88e5;
}
.navbar-result .navbar__menu li p .navbar__item-link {
  color: #d32f2f;
  text-decoration: none;
}
.navbar-container ul li .table__grid div {
  flex: 1;
}
.navbar-container ul li .table__grid div p:nth-child(2) {
  font-weight: 500;
}
table {
  border-collapse: collapse !important;
}
.theme--light.v-label {
  color: #000000;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:last-child,
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:last-child,
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row),
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
  border-bottom: none;
}
.navbar-result .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding: 0;
}
.table__grid {
  width: 100%;
}
.grid1 {
  margin-top: 40px;
}
</style>
