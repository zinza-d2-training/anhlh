<template>
  <div class="main">
    <div class="main__header">
      <div class="grid">
        <ul class="header__list">
          <li class="header__item">
            <a href="" class="header__item-links"> Chứng nhận tiêm chủng </a>
          </li>
          <li class="header__item"><a href="" class="header__item-links"> Kết quả đăng ký </a></li>
          <li class="header__item"><a href="" class="header__item-links"> Tài khoản </a></li>
        </ul>
      </div>
    </div>
    <CertificateInjection />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CertificateInjection from './CertificateInjection.vue';
@Component({
  components: {
    CertificateInjection
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
</style>
