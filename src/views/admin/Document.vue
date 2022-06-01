<template>
  <div class="main__table css-admin">
    <div class="container css-border">
      <v-data-table
        :headers="headers"
        :items="desserts"
        item-key="id"
        hide-default-footer
        :item-class="itemRowBackground"
        :header-props="{ sortIcon: null }"
        class="elevation-1">
        <!-- eslint-disable-next-line -->
        <template v-slot:item.actions="{ item }">
          <div class="table__action d-flex justify-center">
            <a
              href="https://tiemchungcovid19.gov.vn/assets/portal/document/Gi%E1%BB%9Bi_thi%E1%BB%87u_n%E1%BB%81n_t%E1%BA%A3ng_qu%E1%BA%A3n_l%C3%BD_ti%C3%AAm_ch%E1%BB%A7ng_v%E1%BA%AFc_xin_ph%C3%B2ng_Covid_-_19.pdf"
              ><v-icon small @click="deleteItem(item)"> mdi-download </v-icon></a
            >
            <p style="color: red">Tải Về</p>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadersDocument, DessertsDocument } from './type';
@Component({})
export default class UserComponent extends Vue {
  headers: HeadersDocument[] = [
    { text: 'STT', value: 'id', width: '10%', align: 'center' },
    { text: 'Tên tài liệu', value: 'name', width: '80%' },
    { text: 'Thao tác', value: 'actions', width: '10%', align: 'center' }
  ];
  desserts: DessertsDocument[] = [
    {
      id: 1,
      name: 'HD Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    },
    {
      id: 2,
      name: 'HD Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    },
    {
      id: 3,
      name: 'HD Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    },
    {
      id: 4,
      name: 'HD Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    },
    {
      id: 5,
      name: 'HD Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    },
    {
      id: 6,
      name: 'HD Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    }
  ];
  itemRowBackground(item: DessertsDocument) {
    return item.id % 2 !== 0 ? 'style-1' : 'style-2';
  }
}
</script>
<style>
.css-border tr th {
  border: thin solid rgba(0, 0, 0, 0.12);
}
.css-border tr th:nth-child(2) {
  padding-left: 10px !important;
}
.css-border tr td:nth-child(2) {
  padding-left: 10px !important;
}
.css-border tr td {
  border: thin solid rgba(0, 0, 0, 0.12);
}
.table__action {
  gap: 6px;
}
.table__action .v-icon.v-icon {
  font-size: 20px !important;
}
.style-1 {
  background: rgba(238, 238, 238, 0.4);
}
.style-2 {
  background: #ffffff;
}
</style>
