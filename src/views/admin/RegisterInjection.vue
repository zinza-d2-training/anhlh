<template>
  <div class="main__table css-admin">
    <div class="container">
      <ValidationObserver ref="form" @submit.prevent="onSubmit()">
        <form action="">
          <div class="content__form d-flex">
            <div class="content__search">
              <v-text-field
                dense
                v-model="selectHealthInsurance"
                placeholder="Số thẻ BHYT"
                outlined
                hide-details="auto">
              </v-text-field>
            </div>
            <div>
              <v-text-field
                dense
                placeholder="Nghề nghiệp"
                v-model="selectJob"
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
    <v-dialog v-model="hiden" width="444px" :overlay-opacity="0" align-end :open-on-click="false">
      <ValidationObserver ref="form" slim v-slot="{ invalid }" @submit.prevent="onSubmit()">
        <v-card>
          <v-card-title style="padding: 16px 24px">
            <div class="d-flex align-center flex-grow-1 justify-space-between">
              <div class=""><p>Cập Nhật Điểm Tiêm</p></div>
              <v-btn icon>
                <v-icon @click="hiden = false">mdi-close</v-icon>
              </v-btn>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="padding: 24px">
            <form action="">
              <div class="d-flex flex-column" style="gap: 24px">
                <ValidationProvider name="group" rules="required" v-slot="{ errors }">
                  <div class="form__control form__control-width d-flex flex-column">
                    <label for="">Nhóm ưu tiên</label>
                    <v-select
                      max-width="429px"
                      dense
                      :items="groups"
                      outlined
                      v-model="newUsers[0].group"
                      item-text="name"
                      item-value="id"
                      return-object
                      name="group"
                      :error-messages="errors"
                      class="form__input"></v-select>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="healthInsurance" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Số thẻ BHYT</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="newUsers[0].healthInsurance"
                      name="healthInsurance"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="job" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Nghề nghiệp</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="newUsers[0].job"
                      name="job"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="workUnit" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Đơn vị công tác</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="newUsers[0].workUnit"
                      name="workUnit"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="currentAddress" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Địa chỉ hiện tại</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="newUsers[0].currentAddress"
                      name="currentAddress"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="dateInjection" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Ngày muốn được tiêm</label>
                    <v-text-field
                      dense
                      outlined
                      v-model="newUsers[0].dateInjection"
                      name="dateInjection"
                      :error-messages="errors"
                      class="form__input"></v-text-field>
                  </div>
                </ValidationProvider>
                <ValidationProvider name="sessionInjection" rules="required" v-slot="{ errors }">
                  <div class="form__control d-flex flex-column">
                    <label for="">Buổi tiêm mong muốn</label>
                    <v-select
                      dense
                      outlined
                      :items="sessionDay"
                      v-model="newUsers[0].sessionInjection"
                      name="sessionInjection"
                      item-text="name"
                      item-value="id"
                      return-object
                      :error-messages="errors"
                      class="form__input"></v-select>
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
import { Register, HeadersDocument, Group, SessionDay } from './type';
@Component({})
export default class UserComponent extends Vue {
  hiden: boolean = false;
  disable: boolean = false;
  isCancel: boolean = false;
  isSave: boolean = false;
  groups: Group[] = [{ name: 'hộ nghèo' }, { name: 'cận nghèo' }, { name: 'thương binh' }];
  sessionDay: SessionDay[] = [
    { id: 1, name: 'buổi sáng' },
    { id: 2, name: 'buổi trưa' },
    { id: 3, name: 'buổi chiều' }
  ];
  headers: HeadersDocument[] = [
    {
      text: 'STT',
      align: 'center',
      value: 'id'
    },

    {
      text: 'Nhóm ưu tiên',
      align: 'center',
      filterable: false,
      value: 'group.name'
    },
    { text: 'Số thẻ BHYT', align: 'center', value: 'healthInsurance' },
    { text: 'Nghề nghiệp', align: 'center', value: 'job' },
    { text: 'Đơn vị công tác', align: 'center', value: 'workUnit' },
    { text: 'Địa chỉ hiện tại', align: 'center', value: 'currentAddress' },
    { text: 'Ngày muốn được tiêm', align: 'center', value: 'dateInjection' },
    { text: 'Buổi tiêm mong muốn', align: 'center', value: 'sessionInjection.name' }
  ];
  desserts: Register[] = [
    {
      id: 1,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 2,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 3,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 4,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 5,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 6,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 7,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 8,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 9,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 10,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 11,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    },
    {
      id: 12,
      group: {
        name: 'hộ nghèo'
      },
      healthInsurance: '123456789',
      job: 'Nông dân',
      workUnit: 'zinza2',
      currentAddress: 'Địa chỉ hiện tại',
      dateInjection: '12/06/2001',
      sessionInjection: {
        id: 1,
        name: 'buổi sáng'
      }
    }
  ];
  newDesserts: Register[] = this.desserts.map((item: Register) => {
    return { ...item };
  });
  newUsers: Register[] = this.desserts.map((item: Register) => {
    return { ...item };
  });
  selectHealthInsurance: string = '';
  selectJob: string = '';
  itemRowBackground(item: any) {
    return item.id % 2 !== 0 ? 'style-1' : 'style-2';
  }
  Search() {
    this.newDesserts = this.desserts.filter((item: Register) => {
      return item.healthInsurance == this.selectHealthInsurance && item.job == this.selectJob;
    });
  }
  ClickSave() {
    this.hiden = false;
    this.isSave = true;
    let id: number = this.newUsers[0].id;
    this.newDesserts = this.newDesserts.map((item: Register) => {
      if (item.id == id) {
        item = this.newUsers[0];
      }
      return { ...item };
    });
  }
  ClickCancel() {
    this.hiden = false;
    let id: number = this.newUsers[0].id;
    this.newDesserts.filter((item: Register) => {
      if (item.id == id) {
        this.newUsers[0].group = item.group;
        this.newUsers[0].healthInsurance = item.healthInsurance;
        this.newUsers[0].workUnit = item.workUnit;
        this.newUsers[0].currentAddress = item.currentAddress;
        this.newUsers[0].dateInjection = item.dateInjection;
        this.newUsers[0].sessionInjection = item.sessionInjection;
      }
    });
  }
  handleClick(row: Register) {
    this.newUsers = this.desserts.filter((item: Register) => {
      if (item.id == row.id) {
        return { ...item };
      }
    });
    this.hiden = true;
  }
}
</script>
<style>
.v-data-table__wrapper {
  overflow-x: hidden;
}
.form__control-width.form__input {
  width: 100%;
}
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
