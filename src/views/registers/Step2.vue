<template>
  <div class="navbar-result">
    <div class="navbar-container">
      <ul class="navbar__menu">
        <li>
          <img src="@/assets/shield 1.png" alt="" />
          <span
            >1. Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả, tuy nhiên vắc xin phòng
            COVID-19 có thể không phòng được bệnh hoàn toàn. Người được tiêm chủng vắc xin phòng
            COVID-19 có thể phòng được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên, sau khi
            tiêm chủng vẫn phải tiếp tục thực hiện nghiêm các biện pháp phòng chống dịch theo quy
            định.</span
          >
        </li>
        <li>
          <img src="@/assets/vaccine2 1.png" alt="" />
          <span
            >2. Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu hiện tại chỗ tiêm hoặc
            toàn thân như sưng, đau chỗ tiêm, nhức đầu, buồn nôn, sốt, đau cơ…hoặc tai biến nặng sau
            tiêm chủng. Tiêm vắc xin mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1 bằng vắc xin
            AstraZeneca có thể tăng khả năng xảy ra phản ứng thông thường sau tiêm chủng.</span
          >
        </li>
        <li>
          <img src="@/assets/hospital 1.png" alt="" />
          <span
            >3. Khi có triệu chứng bất thường về sức khỏe, người được tiêm chủng cần đến ngay cơ sở
            y tế gần nhất để được tư vấn, thăm khám và điều trị kịp thời.</span
          >
        </li>
        <div class="navbar__item-divider"></div>
        <li class="navbar__item-checkbox">
          <span>Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về các nguy cơ và:</span>
          <span
            ><ValidationProvider name="checkbox" rules="required" v-slot="{ errors }"
              ><v-checkbox
                v-model="checkbox"
                label="Đồng ý tiêm chủng"
                dense
                data-name="checkbox"
                :error-messages="errors"></v-checkbox></ValidationProvider
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({})
export default class UserComponent extends Vue {
  @Prop({ default: 2 })
  step!: number;
  @Prop({})
  checkbox!: boolean;
  @Watch('checkbox')
  onCheckbox() {
    console.log(this.checkbox);
    this.$emit('checkbox', this.checkbox);
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
.navbar-result .navbar__item-divider {
  height: 2px;

  background: #eeeeee;
}
.navbar-result .navbar__item-checkbox {
  display: flex;
  flex-direction: row;
  height: 42px;
  align-items: center;
  gap: 10px;
}
.theme--light.v-label {
  color: #000000;
}
</style>
