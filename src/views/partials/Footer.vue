<template>
  <div class="footer">
    <div class="footer-container">
      <div class="frame-18">
        <div class="frame-18__typography top frame__typography">
          <span>© Bản quyền thuộc TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA</span>
        </div>
        <div class="frame-18__typography bottom frame__typography">
          <span>Phát triển bởi <span style="color: red">Viettel</span></span>
        </div>
        <div class="frame-18__container">
          <img src="@/assets/logo2bo 1.png" alt="" />
        </div>
      </div>
      <div class="frame-19">
        <div class="frame-19__typography frame__typography">
          <span>Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm</span>
        </div>
        <div class="frame-19__container">
          <v-btn outlined color="white" class="frame-19__container-app"
            >App tiêm di động (Cho HCM)</v-btn
          >
          <v-btn outlined color="white" class="frame-19__container-store">App Store</v-btn>
          <v-btn outlined color="white" class="frame-19__container-google">Google play</v-btn>
        </div>
        <div>
          <img src="@/assets/handle_cert 1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class UserComponent extends Vue {}
</script>
<style>
.footer {
  background: #2d2188;
}
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px 16px;
  max-width: 1368px;
  margin: 0 auto;
}
.footer .frame-18 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 557px;
  height: 137px;
}
.footer .frame-19 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 16px;

  width: 523px;
  height: 192px;
}
.frame-18__typography {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
}
.frame__typography span {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.04px;
  color: #ffffff;
}
.frame-18__typography.top {
  width: 557px;
  height: 20px;
}
.frame-18__typography.bottom {
  width: 129px;
  height: 20px;
}

.footer .frame-19__typography {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
}
.footer .frame-19__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
}
.frame-19__container-app {
  width: 249px;
}
.frame-19__container-store {
  width: 114px;
}
.frame-19__container-google {
  width: 128px;
}
.footer .frame-19__container .v-btn {
  text-transform: unset;
}
</style>
