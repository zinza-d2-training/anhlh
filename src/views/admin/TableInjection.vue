<template>
  <div class="main__table css-admin">
    <div class="container">
      <div class="content__form d-flex">
        <div class="content__search">
          <v-text-field
            dense
            :items="provinces"
            placeholder="Điểm tiểm"
            outlined
            hide-details="auto">
          </v-text-field>
        </div>
        <div>
          <v-text-field
            dense
            :items="districts"
            placeholder="Địa chỉ"
            v-model="selectDistrict"
            outlined
            hide-details="auto"></v-text-field>
        </div>
        <div>
          <v-btn
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
            off-icon
            :headers="headers"
            :items="desserts"
            item-key="id"
            hide-default-footer
            :item-class="itemRowBackground"
            @click:row="handleClick">
            <!-- eslint-disable-next-line -->
            <template v-slot:item.id="{ index }">
              <pre>{{ index + 1 }}</pre>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <v-dialog v-model="disable" width="500" :overlay-opacity="0" align-end>
      <v-card :scrollable="false">
        <div class="table__user-header d-flex align-center">
          <div class="table__user-header__title"><p>Cập Nhật Điểm Tiêm</p></div>
          <div>
            <v-icon class="table__user-header__icon">mdi-close</v-icon>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="table__user-center d-flex flex-column">
          <div class="table__user-content">
            <ValidationProvider name="district" rules="required" v-slot="{ errors }">
              <div class="form__control d-flex flex-column">
                <label for="">Tên điểm tiêm</label>
                <v-select
                  dense
                  :items="districts"
                  outlined
                  v-model="selectDistrict"
                  item-text="name"
                  item-value="id"
                  name="district"
                  return-object
                  :error-messages="errors"
                  :disabled="isFocusInFor"
                  class="form__input"></v-select>
              </div>
            </ValidationProvider>
            <ValidationProvider name="district" rules="required" v-slot="{ errors }">
              <div class="form__control d-flex flex-column">
                <label for="">Địa chỉ</label>
                <v-text-field
                  dense
                  :items="districts"
                  outlined
                  v-model="selectDistrict"
                  item-text="name"
                  item-value="id"
                  name="district"
                  return-object
                  :error-messages="errors"
                  :disabled="isFocusInFor"
                  class="form__input"></v-text-field>
              </div>
            </ValidationProvider>
            <ValidationProvider name="district" rules="required" v-slot="{ errors }">
              <div class="form__control d-flex flex-column">
                <label for="">Người đứng đầu cơ sở</label>
                <v-text-field
                  dense
                  :items="districts"
                  outlined
                  v-model="selectDistrict"
                  item-text="name"
                  item-value="id"
                  name="district"
                  return-object
                  :error-messages="errors"
                  :disabled="isFocusInFor"
                  class="form__input"></v-text-field>
              </div>
            </ValidationProvider>
            <ValidationProvider name="district" rules="required" v-slot="{ errors }">
              <div class="form__control d-flex flex-column">
                <label for="">Số bàn tiêm</label>
                <v-text-field
                  dense
                  :items="districts"
                  outlined
                  v-model="selectDistrict"
                  item-text="name"
                  item-value="id"
                  name="district"
                  return-object
                  :error-messages="errors"
                  :disabled="isFocusInFor"
                  class="form__input"></v-text-field>
              </div>
            </ValidationProvider>
          </div>
        </div>
        <div></div>
        <v-divider></v-divider>
        <v-card-actions :scrollable="true">
          <v-spacer></v-spacer>
          <v-btn
            class="btn-cancel"
            text
            @click="dialog = false"
            outlined
            color="#3F51B5"
            :class="`pa-4 text-center  rounded-lg rounded-bl-0`">
            HUỶ BỎ
          </v-btn>
          <v-btn
            class="btn-continue"
            color="white"
            text
            @click="dialog = false"
            outlined
            :class="`pa-4 text-center  rounded-lg rounded-bl-0`">
            XÁC NHẬN
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Province, Desserts } from '../homes/type';
@Component({})
export default class UserComponent extends Vue {
  disable: boolean = false;
  handleClick(row: any) {
    console.log(row);
    this.disable = true;
  }
  headers = [
    {
      text: 'STT',
      align: 'center',
      value: 'id'
    },

    {
      text: 'Tên điểm tiêm',
      align: 'center',
      filterable: false,
      value: 'name'
    },
    { text: 'Địa chỉ', align: 'center', value: 'ward.name' },
    { text: 'Người đứng đầu cơ sở tiêm chủng', align: 'center', value: 'top' },
    { text: 'Số bàn tiêm', align: 'center', value: 'table' }
  ];
  desserts: Desserts[] = [
    {
      id: 1,
      name: 'Bệnh viện trung ương huyết họ',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'diem dien'
      },
      district: {
        id: 1,
        name: 'thaithuy'
      },
      province: {
        id: 1,
        name: 'thaibinh'
      },
      top: 'Nguyễn Thị Kim L',
      table: 1
    },
    {
      id: 2,
      name: 'Bệnh viện trung ương huyết học',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 2,
        name: 'thuy truong'
      },
      district: {
        id: 1,
        name: 'thaithuy'
      },
      province: {
        id: 1,
        name: 'thaibinh'
      },
      top: 'Nguyễn Thị Kim L',

      table: 1
    },
    {
      id: 3,
      name: 'Bệnh viện trung ương huyết street',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'truong dinh'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim L',
      table: 1
    },
    {
      id: 4,
      name: 'Bệnh viện trung ương huyết',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 2,
        name: 'traica'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim L',
      table: 1
    },
    {
      id: 5,
      name: 'Bệnh viện trung ương huyết h',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'truong dinh'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim Liên%,',

      table: 1
    },
    {
      id: 6,
      name: 'Bệnh viện trung ương huyết h',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'truong dinh'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim Liên',
      table: 1
    },

    {
      id: 7,
      name: 'Bệnh viện trung ương huyết',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'truong dinh'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim Liên',
      table: 1
    },

    {
      id: 8,
      name: 'Bệnh viện trung ương huyết',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'truong dinh'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim Liên%',
      table: 1
    },
    {
      id: 9,
      name: 'Bệnh viện trung ương huyếstreet',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'truong dinh'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim Liên%',

      table: 1
    },
    {
      id: 10,
      name: 'Bệnh viện trung ương huyết',
      street: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'truong dinh'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim Liên',
      table: 1
    }
  ];

  provinces: Province[] = [
    {
      id: 1,
      name: 'thaibinh',
      districts: [
        {
          id: 1,
          name: 'thaithuy',
          wards: [
            {
              id: 1,
              name: 'diem dien'
            },
            {
              id: 2,
              name: 'thuy truong'
            }
          ]
        },
        {
          id: 2,
          name: 'kienxuong',
          wards: [
            {
              id: 1,
              name: 'diem dien1'
            },
            {
              id: 2,
              name: 'thuy truong1'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'hanoi',
      districts: [
        {
          id: 1,
          name: 'hk',
          wards: [
            {
              id: 1,
              name: 'truong dinh'
            },
            {
              id: 2,
              name: 'traica'
            }
          ]
        },
        {
          id: 2,
          name: 'caugiay',
          wards: [
            {
              id: 1,
              name: 'truong dinh1'
            },
            {
              id: 2,
              name: 'traica1'
            }
          ]
        }
      ]
    }
  ];
  itemRowBackground(item: any) {
    return item.id % 2 !== 0 ? 'style-1' : 'style-2';
  }
}
</script>
<style>
.v-dialog {
  overflow-y: visible;
}

.btn-continue.v-btn {
  background: #3f51b5;
  width: 112px;
}
.btn-cancel.v-btn {
  width: 89px;
}
.table__user-header {
  height: 64px;
}
.table__user-header__title {
  width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 24px;
}
.table__user-header__title p {
  font-weight: 500;
}
.table__user-header__icon {
  width: 70px;
}
.table__user-content {
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
}
.form__item {
  display: none;
}
.disable {
  display: block;
}

.style-1 {
  background: rgba(238, 238, 238, 0.4);
}
.style-2 {
  background: #ffffff;
}
.main__table .css-admin {
  max-width: 1416px;
}
.main__table .container {
  max-width: 1416px;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 0px;
}
.css-admin .v-btn:not(.v-btn--round).v-size--default {
  padding: 0 !important;
  width: 148px;
}
.content__form {
  gap: 16px;
}
.css-admin .content_table {
  margin-top: 16px;
}
tr th span {
  font-weight: 500;
  font-size: 16px;
}
.css-admin .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding: 0;
  transition: height 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
</style>
