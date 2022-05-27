<template>
  <div class="main css-search">
    <v-tabs height="64px" color="#000000">
      <v-tab> Chứng nhận tiêm chủng</v-tab>
      <v-tab> Kết quả đăng ký</v-tab>
      <v-tab>Tài khoản</v-tab>
      <v-tab-item>
        <CertificateInjection :headers="headers" :result="result" />
      </v-tab-item>
      <v-tab-item>
        <ResultRegister :headers="headers" :result="result" />
      </v-tab-item>
      <v-tab-item>
        <Account :result="result" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CertificateInjection from './CertificateInjection.vue';
import ResultRegister from './ResultRegister.vue';
import Account from './Account.vue';
@Component({
  components: {
    CertificateInjection,
    ResultRegister,
    Account
  }
})
export default class SearchInjections extends Vue {
  headers = [
    { text: 'STT', value: 'id', align: 'center' },
    { text: 'Họ và tên', value: 'name', align: 'center' },
    { text: 'Ngày sinh', value: 'birthday', align: 'center' },
    { text: 'Giới tính', value: 'gender', align: 'center' },
    { text: 'Số CMND/CCCD/Mã định danh công dân', value: 'cmnd', align: 'center' },
    { text: 'Trạng thái', value: 'state', align: 'center' }
  ];
  result = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      birthday: '6/10/1994',
      gender: 'Nam',
      healthInsurance: 123456789,
      cmnd: '030012345678',
      state: 'Đăng ký thành công',
      province: 'hà nội',
      district: 'hai bà trưng',
      ward: 'truong dinh'
    }
  ];
}
</script>
<style>
.main.css-search {
  margin-bottom: 200px;
}
.main {
  width: 100%;
}
.grid {
  margin: 0 auto;
  width: 1368px;
  height: 64px;
}
.main .main__header {
  border-bottom: 1px solid rgb(185, 180, 180);
}
.main .header__list {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  height: 64px;
}
.main .header__list li,
.main .header__list li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  list-style: none;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
.main .v-tabs-bar {
  border-bottom: 1px solid rgb(185, 180, 180);
}
.main .v-slide-group__wrapper {
  max-width: 1368px;
  margin: 0 auto;
}
</style>
