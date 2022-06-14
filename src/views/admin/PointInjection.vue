<template>
  <div class="main css-admin">
    <v-tabs height="64px" color="#000000">
      <v-tab> Điểm tiêm </v-tab>
      <v-tab> Đăng ký</v-tab>
      <v-tab>Tài liệu</v-tab>

      <v-tab-item>
        <div class="main__content">
          <TableInjection />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="main__content">
          <RegisterInjection />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="main__content">
          <TableDocument />
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TableInjection from './TableInjection.vue';
import RegisterInjection from './RegisterInjection.vue';
import TableDocument from './TableDocument.vue';
@Component({
  components: {
    TableInjection,
    RegisterInjection,
    TableDocument
  }
})
export default class UserComponent extends Vue {}
</script>
<style>
.main__content {
  width: 100%;
  margin-top: 42px;
  margin-bottom: 200px;
  border: 1px solid rgba(38, 56, 150, 0.14);
}
</style>
