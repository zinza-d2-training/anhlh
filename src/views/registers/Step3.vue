<template>
  <div class="navbar-result step3">
    <div class="navbar-container">
      <ul class="navbar__menu">
        <li class="navbar__item">
          <p class="text-register">
            Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm của bạn là
            <span class="navbar__item-id">0120211103501237</span>.
          </p>
        </li>
        <li>
          <p class="navbar__item">
            Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin COVID-19. Hiện tại Bộ y tế đang tiến hành
            thu thập nhu cầu và thông tin để lập danh sách đối tượng đăng ký tiêm vắc xin COVID-19
            theo từng địa bàn. Chúng tôi sẽ liên hệ với quý khách theo số điện thoại
            <span class="navbar__item-phone">0123456789</span> khi có kế hoạch tiêm trong thời gian
            sớm nhất. >
          </p>
        </li>

        <li class="navbar__item">
          <p>
            Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" tại
            <span class="navbar__item-link">https://hssk.kcb.vn/#/sskdt</span> để theo dõi kết quả
            đăng ký tiêm và nhận chứng nhận tiêm chủng COVID-19
          </p>
        </li>
        <li>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left column-width">Họ và tên</th>
                  <th class="text-left column-width">Ngày sinh</th>
                  <th class="text-left column-width">Giới tính</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td class="column-width">{{ item.name }}</td>
                  <td class="column-width">{{ item.birthday }}</td>
                  <td class="column-width">{{ item.gender }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </li>
        <li>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left column-width">Số CMND/CCCD/Mã định danh công dân</th>
                  <th class="text-left column-width">Số thẻ BHYT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in numberCard" :key="item.cmnd">
                  <td class="column-width">{{ item.cmnd }}</td>
                  <td class="column-width">{{ step.healthInsurance }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </li>
        <li>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left column-width">Tỉnh/Thành phố</th>
                  <th class="text-left column-width">Quận/Huyện</th>
                  <th class="text-left column-width">Xã/Phường</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in country" :key="item.province">
                  <td class="column-width">{{ item.province }}</td>
                  <td class="column-width">{{ item.district }}</td>
                  <td class="column-width">{{ item.ward }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
  desserts = [
    {
      name: 'Nguyễn văn A',
      birthday: '12/05/2001',
      gender: 'Nam'
    }
  ];
  country = [
    {
      province: 'hà nội',
      district: 'hai bà trưng',
      ward: 'truong dinh'
    }
  ];
  numberCard = [{ cmnd: 134141255, bhyt: `${this.step}` }];
  onSubmit() {
    this.$emit('changeStep');
  }
  created() {
    console.log('create', this.step);
  }
  //   checkbox: boolean = false;
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
.navbar-result .navbar__menu li p {
  width: 100%;
  text-align: center;
}
.navbar-result .navbar__menu li p .navbar__item-phone {
  color: #1e88e5;
}
.navbar-result .navbar__menu li p .navbar__item-link {
  color: #d32f2f;
}
.navbar-result .v-data-table {
  width: 100%;
}
.navbar-result .v-data-table .column-width {
  width: 456px !important;
}
table {
  border-collapse: collapse !important;
}
.theme--light.v-label {
  color: #000000;
}
</style>
