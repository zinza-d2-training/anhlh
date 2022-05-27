<template>
  <div class="container css-certificate">
    <div class="certificate">
      <div class="certificate__title certificate__title1">
        <p class="certificate__text certificate__title1-text text-center">
          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
        </p>
      </div>
      <div class="certificate__title certificate__title2">
        <p class="certificate__text certificate__title2-text text-center">
          Độc lập - Tự do - Hạnh phúc
        </p>
      </div>
      <div class="certificate__title certificate__title3">
        <p class="certificate__text certificate__title3-text text-center">
          CHỨNG NHẬN TIÊM CHỦNG COVID-19
        </p>
      </div>
      <div class="certificate__frame frame-22 d-flex">
        <div>
          <p>Họ và tên</p>
          <p>{{ result[0].name }}</p>
        </div>
        <div>
          <p>Ngày sinh</p>
          <p>{{ result[0].birthday }}</p>
        </div>
        <div>
          <p>Số CMND/CCCD</p>
          <p>{{ result[0].cmnd }}</p>
        </div>
        <div>
          <p>Số thẻ BHYT</p>
          <p>{{ result[0].healthInsurance }}</p>
        </div>
      </div>
      <div class="certificate__frame frame-28">
        <div>
          <p>Kết luận</p>
          <p>{{ result[0].province }} - {{ result[0].district }} - {{ result[0].ward }}</p>
        </div>
      </div>
      <div class="certificate__frame frame-29">
        <v-data-table
          :headers="headers"
          :items="medicineJnjected"
          hide-default-footer
          class="elevation-1"></v-data-table>
      </div>
      <div class="certificate__btn">
        <v-btn depressed @click="onSubmit()"> Đăng ký mũi tiêm tiếp theo </v-btn>
      </div>
    </div>
    <div class="card" :class="{ yellow: hasYellow() }">
      <div class="">
        <img src="@/assets/1384271893.png" alt="" />
      </div>
      <div class="card__text">
        <p>ĐÃ TIÊM {{ injectionCount }} MŨI VẮC XIN</p>
      </div>
      <div class="">
        <img src="@/assets/frame 1.png" alt="" />
      </div>
      <div class="frame-30">
        <div class="frame-31 frame-30-flex">
          <div class="frame-31-icon">
            <img src="@/assets/person.png" alt="" />
          </div>
          <div class="frame-31-content frame-right">
            <p class="frame-right-top">Họ và tên</p>
            <p class="frame-right-bottom">{{ result[0].name }}</p>
          </div>
        </div>
        <div class="frame-32 frame-30-flex">
          <div class="frame-32-icon">
            <img src="@/assets/date_range.png" alt="" />
          </div>
          <div class="frame-32-content frame-right">
            <p class="frame-right-top">Ngày sinh</p>
            <p class="frame-right-bottom">{{ result[0].birthday }}</p>
          </div>
        </div>
        <div class="frame-33 frame-30-flex">
          <div class="frame-33-icon">
            <img src="@/assets/featured_video.png" alt="" />
          </div>
          <div class="frame-33-content frame-right">
            <p class="frame-right-top">Số CMND/CCCD</p>
            <p class="frame-right-bottom">{{ result[0].cmnd }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class CertificateInjection extends Vue {
  $router: any;
  @Prop({})
  result!: any;
  headers = [
    { text: 'Mũi số', value: 'id', align: 'center' },
    { text: 'Thời gian tiêm', value: 'time', align: 'center' },
    { text: 'Tên vắc xin', value: 'name', align: 'center' },
    { text: 'Số lô', value: 'numberLot', align: 'center' },
    { text: 'Nơi tiêm', value: 'place', align: 'center' }
  ];
  medicineJnjected = [
    {
      id: 1,
      time: '08/09/2021 - 16:56',
      name: 'COVID-19 Vaccine AstraZeneca',
      numberLot: 'NJ0342',
      place: 'TYT Dịch Vọng Hậu'
    },
    {
      id: 2,
      time: '08/09/2021 - 16:56',
      name: 'COVID-19 Vaccine AstraZeneca',
      numberLot: 'NJ0342',
      place: 'TYT Dịch Vọng Hậu'
    }
  ];
  injectionCount = 1;
  yellowCard = false;
  hasYellow() {
    if (this.injectionCount == 1) {
      return (this.yellowCard = true);
    }
  }
  onSubmit() {
    this.$router.push('/register-person');
  }
}
</script>
<style>
.container.css-certificate {
  margin-top: 48px;
  max-width: 1368px;
  display: flex;
  flex-direction: row;
  padding: 0;
}
.container .certificate {
  width: 1012px;
  margin-right: 16px;
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.certificate__title {
  width: 100%;
  height: 24px;
}
.certificate__title .text-center {
  text-align: center;
}
.certificate__title .text-center {
  text-align: center;
  font-style: normal;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
}
.certificate__title3 {
  margin-top: 24px;
}
.certificate__title1-text {
  font-weight: 400;
}
.certificate__title2-text {
  font-weight: 500;
}
.certificate__title3-text {
  font-weight: 500;
  font-size: 24px;
}
.certificate__frame {
  width: 100%;
}
.certificate .frame-22 {
  margin-top: 23px;
}
.certificate .frame-22 div {
  flex: 1;
}
.certificate div p:nth-child(2) {
  font-weight: 500;
}
.certificate th {
  font-style: normal;
  font-weight: 400;
  font-size: 16px !important;
  line-height: 150%;

  letter-spacing: -0.04px;

  color: rgba(0, 0, 0, 0.87) !important;
}
.certificate td {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);
}
.certificate .frame-27 {
  margin-top: 16px;
}
.certificate .frame-28 {
  margin-top: 16px;
}
.v-application .elevation-1 {
  box-shadow: none !important;
}
.certificate .frame-29 {
  margin-top: 16px;
}
.certificate .v-data-table__wrapper {
  border: 1px solid #eeeeee;
}
.certificate .v-data-table-header tr {
  text-align: center;
  background: rgba(238, 238, 238, 0.4);
  border-bottom: 1px solid #eeeeee;
}
.certificate__btn {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}
.certificate__btn .v-btn {
  background: #303f9f !important;
  border-radius: 8px 8px 8px 0px !important;
  font-weight: 500;
  color: #ffffff;
  height: 36px;
}
.certificate__btn .v-btn span {
  width: 255px !important;
}
.container .card {
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 24px;
  background: #43a047;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.175);
  border-radius: 8px 8px 8px 0px;
}
.container .card.yellow {
  background: yellow;
}
.certificate__frame .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding: 0;
}
.card__text p {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
}
.card .frame-30 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  width: 292px;
  height: 220px;

  background: #ffffff;
  border-radius: 8px 8px 8px 0px;
}
.card .frame-30 .frame {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 260px;
  height: 52px;
}
.card .frame-30-flex {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 260px;
  height: 52px;
}
.card .frame-right-top {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.card .frame-right-bottom {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}
.frame-29 th {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}
.frame-29 td {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
</style>
