<template>
  <div class="main">
    <v-tabs height="64px" color="#000000">
      <v-tab> Chứng nhận tiêm chủng</v-tab>
      <v-tab> Kết quả đăng ký</v-tab>
      <v-tab>Tài khoản</v-tab>
      <v-tab-item>
        <CertificateInjection />
      </v-tab-item>
      <v-tab-item>
        <ResultRegister />
      </v-tab-item>
      <v-tab-item>
        <Account />
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
export default class SearchInjections extends Vue {}
</script>
<style>
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
