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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Header, Result } from './type';
@Component({})
export default class UserComponent extends Vue {
  @Prop({})
  headers!: Header[];
  @Prop({})
  result!: Result[];
}
</script>
<style>
.v-application .elevation-1 {
  width: 100% !important;
}
.css-result th:first-child {
  flex-grow: 0;
  width: 80px !important;
}
.container.css-certificate.css-result.certificate .v-data-table-header tr {
  height: 72px !important;
  text-align: center;
  background: rgba(238, 238, 238, 0.4);
  border-bottom: 1px solid #eeeeee;
}
.container.css-certificate.css-result.certificate .css-result tbody {
  height: 48px !important;
}
.css-result tbody tr td:last-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 0px;
  width: 246.4px;
  height: 20px !important;
  background: #e8eaf6;
  border: 1px solid #3f51b5;
  border-radius: 30px;
  margin: 12px 0;
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
.css-result th {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}
.css-result td {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
</style>
