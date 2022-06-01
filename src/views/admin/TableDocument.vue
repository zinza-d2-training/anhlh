<template>
  <div class="main__table css-admin">
    <div class="container">
      <ValidationObserver ref="form" @submit.prevent="onSubmit()">
        <form action="">
          <div class="content__form d-flex">
            <div class="content__search">
              <v-text-field
                dense
                v-model="selectDocument"
                placeholder="tên tài liệu"
                outlined
                hide-details="auto">
              </v-text-field>
            </div>
            <div>
              <v-btn
                height="40px"
                color="deep-purple darken-4"
                dark
                @click="Search()"
                :class="`pa-4 text-center  rounded-lg rounded-bl-0`">
                <v-icon left> mdi-magnify </v-icon>
                Tìm Kiếm
              </v-btn>
            </div>
          </div>
          <div class="content_table">
            <v-card>
              <v-data-table
                :header-props="{ sortIcon: null }"
                off-icon
                :headers="headers"
                :items="newDocuments"
                item-key="id"
                hide-default-footer
                :item-class="itemRowBackground"
                class="table-admin"
                @click:row="handleClick">
                <!-- eslint-disable-next-line -->
            <template v-slot:item.id="{ index }">
                  <pre>{{ index + 1 }}</pre>
                </template>
              </v-data-table>
            </v-card>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <v-dialog v-model="hiden" width="444px" :overlay-opacity="0" align-end :open-on-click="false">
      <ValidationObserver ref="form" slim v-slot="{ invalid }" @submit.prevent="onSubmit()">
        <v-card>
          <v-card-title style="padding: 16px 24px">
            <div class="d-flex align-center flex-grow-1 justify-space-between">
              <div class=""><p>Cập Nhật Tên Tài Liệu</p></div>
              <v-btn icon>
                <v-icon @click="hiden = false">mdi-close</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="padding: 24px">
            <form action="">
              <div class="d-flex flex-column" style="gap: 24px">
                <ValidationProvider name="document" rules="required" v-slot="{ errors }">
                  <div class="form__control form__control-width d-flex flex-column">
                    <label for="">Tên tài liệu</label>
                    <v-text-field
                      max-width="444px"
                      dense
                      outlined
                      v-model="newDesserts[0].name"
                      name="document"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
              </div>
            </form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="btn-cancel"
              text
              @click="ClickCancel()"
              outlined
              color="#3F51B5"
              :class="`pa-4 text-center  rounded-lg rounded-bl-0`">
              HUỶ BỎ
            </v-btn>
            <v-btn
              class="btn-continue"
              color="white"
              text
              @click="ClickSave()"
              outlined
              :disabled="invalid"
              :class="`pa-4 text-center  rounded-lg rounded-bl-0`">
              XÁC NHẬN
            </v-btn>
          </v-card-actions>
        </v-card>
      </ValidationObserver>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadersDocument, DessertsDocument } from './type';
@Component({})
export default class UserComponent extends Vue {
  hiden: boolean = false;
  disable: boolean = false;
  isCancel: boolean = false;
  isSave: boolean = false;
  selectDocument: string = '';
  headers: HeadersDocument[] = [
    { text: 'STT', value: 'id', width: '10%', align: 'center' },
    { text: 'Tên tài liệu', value: 'name', width: '80%' }
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
      name: 'HD3 Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    },
    {
      id: 5,
      name: 'HD1 Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    },
    {
      id: 6,
      name: 'HD2 Chuẩn hóa dữ liệu và import danh sách đối tượng tiêm chủng Covid - 19, danh sách nhập hồi cứu'
    }
  ];
  newDocuments: DessertsDocument[] = this.desserts.map((item: DessertsDocument) => {
    return { ...item };
  });
  newDesserts: DessertsDocument[] = this.desserts.map((item: DessertsDocument) => {
    return { ...item };
  });
  itemRowBackground(item: DessertsDocument) {
    return item.id % 2 !== 0 ? 'style-1' : 'style-2';
  }
  Search() {
    this.newDocuments = this.desserts.filter((item: DessertsDocument) => {
      return item.name == this.selectDocument;
    });
  }
  ClickSave() {
    this.hiden = false;
    this.isSave = true;
    let id: number = this.newDesserts[0].id;
    this.newDocuments = this.newDocuments.map((item: DessertsDocument) => {
      if (item.id == id) {
        item = this.newDesserts[0];
      }
      return { ...item };
    });
  }
  ClickCancel() {
    this.hiden = false;
    let id: number = this.newDocuments[0].id;
    this.newDocuments.filter((item: DessertsDocument) => {
      if (item.id == id) {
        this.newDocuments[0].name = item.name;
      }
    });
  }
  handleClick(row: DessertsDocument) {
    this.newDesserts = this.desserts.filter((item: DessertsDocument) => {
      if (item.id == row.id) {
        return { ...item };
      }
    });
    this.hiden = true;
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
