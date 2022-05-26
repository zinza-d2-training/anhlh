<template>
  <div class="container css-certificate css-result certificate">
    <v-data-table
      :headers="headers"
      :items="result"
      hide-default-footer
      class="elevation-1"></v-data-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class UserComponent extends Vue {
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
      cmnd: '030012345678',
      state: 'Đăng ký thành công'
    }
  ];
}
</script>
<style>
.v-application .elevation-1 {
  width: 100% !important;
}
.css-result tr {
  display: flex;
}
.css-result th:first-child {
  flex-grow: 0;
  width: 80px !important;
}
.css-result tr th:not(:first-child) {
  width: 254.4px;
  flex-grow: 1;
}
.css-result td:first-child {
  flex-grow: 0;
  width: 80px !important;
}
.css-result tr td:not(:first-child) {
  width: 254.4px;
  flex-grow: 1;
}
</style>
