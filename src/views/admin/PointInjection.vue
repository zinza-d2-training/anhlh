<template>
  <div class="main css-admin">
    <v-tabs height="64px" color="#000000">
      <v-tab> Điểm tiêm </v-tab>
      <v-tab> Đăng ký</v-tab>
      <v-tab>Tài liệu</v-tab>

      <v-tab-item>
        <div class="main__content">
          <TableIjection :headers="headers" :result="result" />
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TableIjection from './TableIjection.vue';
@Component({
  components: {
    TableIjection
  }
})
export default class UserComponent extends Vue {}
</script>
<style>
.main__content {
  width: 100%;
  margin-top: 42px;
  border: 1px solid rgba(38, 56, 150, 0.14);
}
</style>
