<template>
  <div class="main__table css-admin">
    <div class="container">
      <ValidationObserver ref="form" @submit.prevent="onSubmit()">
        <form action="">
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
                :items="newDesserts"
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
    <v-dialog
      v-model="hiden"
      width="444px"
      :overlay-opacity="0"
      align-end
      :open-on-click="false"
      class="dialog-width">
      <ValidationObserver ref="form" v-slot="{ invalid }" slim @submit.prevent="onSubmit()">
        <v-card>
          <v-card-title style="padding: 16px 24px">
            <div class="d-flex align-center flex-grow-1 justify-space-between">
              <div class=""><p>Cập Nhật Điểm Tiêm</p></div>
              <v-btn icon>
                <v-icon @click="hiden = false">mdi-close</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-divider />
          <v-card-text style="padding: 24px">
            <form action="">
              <div class="d-flex flex-column" style="gap: 24px">
                <ValidationProvider name="nameInjection" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Tên điểm tiêm</label>
                    <v-text-field
                      width="100%"
                      dense
                      :items="provinces"
                      outlined
                      v-model="newUsers[0].name"
                      name="nameInjection"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="street" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Địa chỉ</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="newUsers[0].street"
                      name="street"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="top" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Người đứng đầu cơ sở</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="newUsers[0].top"
                      name="top"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="table" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Số bàn tiêm</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="newUsers[0].table"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
              </div>
            </form>
          </v-card-text>
          <v-divider />
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
import { Province, Desserts, PropertyWardDistrictProvince } from '../homes/type';
import { HeadersDocument } from './type';
@Component({})
export default class UserComponent extends Vue {
  hiden: boolean = false;
  disable: boolean = false;
  isCancel: boolean = false;
  isSave: boolean = false;
  street: string = '42-44 Nghĩa Dũng';
  ward: PropertyWardDistrictProvince = {
    id: 1,
    name: 'diem dien'
  };
  top: string = 'Nguyễn Thị Kim L';
  table: number = 1;
  province: PropertyWardDistrictProvince = {
    id: 1,
    name: 'hà nội'
  };
  headers: HeadersDocument[] = [
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
    { text: 'Địa chỉ', align: 'center', value: 'street' },
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
  newDesserts: Desserts[] = this.desserts.map((item: Desserts) => {
    return { ...item };
  });
  newUsers: Desserts[] = this.desserts.map((item: Desserts) => {
    return { ...item };
  });
  Search() {
    this.newDesserts = this.desserts.filter((item: Desserts) => {
      if (item.street == this.street && item.province.id == this.province?.id) {
        return { ...item };
      }
    });
  }
  ClickSave() {
    this.hiden = false;
    this.isSave = true;
    let id: number = this.newUsers[0].id;
    this.newDesserts = this.newDesserts.map((item: Desserts) => {
      if (item.id == id) {
        item = this.newUsers[0];
      }
      return { ...item };
    });
  }
  ClickCancel() {
    this.hiden = false;
    let id: number = this.newUsers[0].id;
    this.newDesserts.filter((item: Desserts) => {
      if (item.id == id) {
        this.newUsers[0].name = item.name;
        this.newUsers[0].street = item.street;
        this.newUsers[0].top = item.top;
        this.newUsers[0].table = item.table;
      }
    });
  }
  handleClick(row: Desserts) {
    this.newUsers = this.desserts.filter((item: Desserts) => {
      if (item.id == row.id) {
        return { ...item };
      }
    });
    this.hiden = true;
  }
}
</script>
<style>
.table-admin thead {
  border-top: 1px solid rgba(38, 56, 150, 0.14);
}
.table-admin tr {
  border-top: 1px solid rgba(38, 56, 150, 0.14);
}
.btn-continue.v-btn--disabled {
  pointer-events: none;
  background: #bdbdbd !important;
}
.v-card__actions {
  height: 64px;
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
