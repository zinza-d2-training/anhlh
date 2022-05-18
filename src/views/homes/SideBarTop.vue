<template>
  <div class="main">
    <div class="sidebar css-sidebar-top">
      <div class="sidebar-top">
        <div class="frame-2 frame">
          <div class="divider__icon">
            <img src="@/assets/ic_register_people 1.png" alt="" />
          </div>
          <div class="divider__content">
            <p class="divider__content-text">Đối tượng đăng kí tiêm</p>
            <p class="divider__content-number">
              11,203,873 <span class="divider__content-bout">(lượt)</span>
            </p>
          </div>
        </div>
        <div class="frame-3 frame">
          <div class="divider__icon">
            <img src="@/assets/ic_injection.png" alt="" />
          </div>
          <div class="divider__content">
            <p class="divider__content-text">Đối tượng đăng kí tiêm</p>
            <p class="divider__content-number">
              11,203,873 <span class="divider__content-bout">(mũi)</span>
            </p>
          </div>
        </div>
        <div class="frame-4 frame">
          <div class="divider__icon">
            <img src="@/assets/ic_injected_people.png" alt="" />
          </div>
          <div class="divider__content">
            <p class="divider__content-text">Đối tượng đăng kí tiêm</p>
            <p class="divider__content-number">
              11,203,873 <span class="divider__content-bout">(mũi)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar css-sidebar-content">
      <div class="sidebar-content">
        <p>Dữ liệu theo ngày</p>
        <LineChartGenerator
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
          :dataset-id-key="datasetIdKey"
          :plugins="plugins"
          :css-classes="cssClasses"
          :styles="styles"
          :width="width"
          :height="height" />
      </div>
      <!-- </div>
    <div class="sidebar"> -->
      <div class="sidebar-footer">
        <div class="content css-sidebar-footer">
          <div class="content__header"><p>Tra cứu điểm tiêm theo địa bàn</p></div>
          <div class="content__form">
            <v-select
              dense
              :items="provinces"
              label="Tỉnh/Thành phố"
              outlined
              hide-details="auto"
              data-name="province"
              v-model="selectedProvince"
              :error-messages="errors"
              return-object
              item-text="name"
              item-value="id">
            </v-select>
            <v-select
              dense
              :items="districts"
              label="Quận/Huyện"
              outlined
              data-name="district"
              v-model="selectDistrict"
              :error-messages="errors"
              return-object
              item-text="name"
              item-value="id"></v-select>
            <v-select
              dense
              :items="wards"
              label="Xã/Phường"
              outlined
              data-name="ward"
              v-model="selectWard"
              return-object
              item-text="name"
              item-value="id"
              :error-messages="errors"></v-select>

            <v-btn color="deep-purple darken-4" dark @click="Search()">
              <v-icon left> mdi-magnify </v-icon>
              Tìm Kiếm
            </v-btn>
          </div>
          <div class="content_table">
            <v-card>
              <v-data-table :headers="headers" :items="newDesserts" item-key="id"></v-data-table>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js';
import { Province, Gender, Ward, District, labelFromGender } from './type';
ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement);

import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({
  name: 'LineChart',
  // @ts-ignore
  components: { LineChartGenerator }
})
export default class UserComponent extends Vue {
  @Prop({ default: 'line-chart' })
  chartId!: String;
  @Prop({ default: 'label' })
  datasetIdKey!: string;
  @Prop({ default: 400 })
  width!: number;
  @Prop({ default: 400 })
  height!: number;
  @Prop({ default: '' })
  cssClasses!: string;
  @Prop({ default: () => {} })
  styles!: Object;
  @Prop({ default: () => [] })
  plugins!: Array<any>;

  chartData = {
    labels: [
      '21/09',
      '22/09',
      '23/09',
      '24/09',
      '25/09',
      '26/09',
      '27/09',
      '28/09',
      '29/09',
      '01/10',
      '02/10',
      '03/10',
      '04/10',
      '05/10',
      '06/10',
      '07/10',
      '08/10',
      '09/10',
      '10/10',
      '11/10',
      '12/10',
      '13/10',
      '14/10',
      '15/10',
      '16/10',
      '17/10',
      '18/10',
      '19/10',
      '20/10'
    ],
    datasets: [
      {
        label: 'Đã tiêm',
        backgroundColor: '#f87979',
        borderColor: 'blue',
        data: [
          600000, 400000, 800000, 1000000, 1200000, 1400000, 1600000, 1800000, 2000000, 2200000,
          800000, 1000000, 1200000, 1400000, 800000, 1000000, 1200000, 1400000, 800000, 1000000,
          1200000, 1400000, 800000, 1000000, 1200000, 1400000, 600000, 400000, 800000, 1000000
        ]
      }
    ]
  };
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  headers = [
    {
      text: 'STT',
      value: 'id'
    },

    {
      text: 'Tên điểm tiêm',
      align: 'left',
      filterable: false,
      value: 'name'
    },
    { text: 'Số nhà, tên đường', value: 'calories' },
    { text: 'Xã/phường', value: 'ward.name' },
    { text: 'Quận/Huyện', value: 'district.name' },
    { text: 'Tỉnh/Thành phố', value: 'province.name' },
    { text: 'Người đứng đầu cơ sở tiêm chủng', value: 'top' },
    { text: 'Số bàn tiêm', value: 'table' }
  ];
  desserts = [
    {
      id: 1,
      name: 'Bệnh viện trung ương huyết họ',
      calories: '42-44 Nghĩa Dũng',
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
      table: '1'
    },
    {
      id: 2,
      name: 'Bệnh viện trung ương huyết học',
      calories: '42-44 Nghĩa Dũng',
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

      table: '1'
    },
    {
      id: 3,
      name: 'Bệnh viện trung ương huyết calories',
      calories: '42-44 Nghĩa Dũng',
      ward: {
        id: 1,
        name: 'truong dinh'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim L',
      table: '1'
    },
    {
      id: 4,
      name: 'Bệnh viện trung ương huyết',
      calories: '42-44 Nghĩa Dũng',
      ward: {
        id: 2,
        name: 'traica'
      },
      district: { id: 1, name: 'hk' },
      province: { id: 2, name: 'ha noi' },
      top: 'Nguyễn Thị Kim L',
      table: '1'
    },
    {
      id: 5,
      name: 'Bệnh viện trung ương huyết h',
      calories: '42-44 Nghĩa Dũng',
      ward: 'Phúc Xá',
      district: 'Quận Ba Đình',
      province: ',Thành phố Hà Nội',
      top: 'Nguyễn Thị Kim Liên%,',

      table: '1'
    },
    {
      id: 6,
      name: 'Bệnh viện trung ương huyết h',
      calories: '42-44 Nghĩa Dũng',
      ward: 'Phúc Xá',
      district: 'Quận Ba Đình',
      province: 'Thành phố H,à Nội',
      top: 'Nguyễn Thị Kim Liên',
      table: '1'
    },

    {
      id: 7,
      name: 'Bệnh viện trung ương huyết',
      calories: '42-44 Nghĩa Dũng',
      ward: 'Phúc Xá',
      district: 'Quận Ba Đình',
      province: 'Thành phố H,à Nội',
      top: 'Nguyễn Thị Kim Liên',
      table: '1'
    },

    {
      id: 8,
      name: 'Bệnh viện trung ương huyết',
      calories: '42-44 Nghĩa Dũng',
      ward: 'Phúc Xá',
      district: 'Quận Ba Đình',
      province: 'Thành phố Hà Nội',
      top: 'Nguyễn Thị Kim Liên%',
      table: '1'
    },
    {
      id: 9,
      name: 'Bệnh viện trung ương huyếcalories',
      calories: '42-44 Nghĩa Dũng',
      ward: 'Phúc Xá',
      district: 'Quận Ba Đình',
      province: 'Thành phố Hà Nội',
      top: 'Nguyễn Thị Kim Liên%',

      table: '1'
    },
    {
      id: 10,
      name: 'Bệnh viện trung ương huyết',
      calories: '42-44 Nghĩa Dũng',
      ward: 'Phúc Xá',
      district: 'Quận BaĐình',
      province: 'Thành phố Hà Nội',
      top: 'Nguyễn Thị Kim Liên',
      table: '1'
    }
  ];

  selectWard: Ward | null = null;
  selectedProvince: Province | null = null;
  selectDistrict: District | null = null;

  getLabelGender(gender: Gender) {
    return labelFromGender(gender);
  }

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
  get districts(): District[] | [] {
    return this.selectedProvince?.districts ?? [];
  }
  get wards(): Ward[] {
    return this.selectDistrict?.wards ?? [];
  }
  @Watch('selectedProvince')
  onchangeSlectedprovince() {
    this.selectDistrict = null;
    this.selectWard = null;
  }
  @Watch('selectDistrict')
  onchangeSelectDistrict() {
    this.selectWard = null;
  }

  newDesserts = this.desserts.map((item) => {
    return { ...item };
  });
  Search() {
    this.newDesserts = this.desserts.filter((item: any) => {
      return (
        item.province.id == this.selectedProvince?.id &&
        item.district.id == this.selectDistrict?.id &&
        item.ward.id == this.selectWard?.id
      );
    });
  }
}
</script>
<style>
.sidebar.css-sidebar-top {
  padding: 16px 36px;
  background: #f7fbfe;
  margin-top: 34px;
}

.sidebar-top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1368px;
}
.sidebar-top .frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
  flex-grow: 1;
  background: #ffffff;
  border-right: 1px solid #eeeeee;
  height: 100px;
}
.sidebar-top .divider__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}
.sidebar-top .divider__content .divider__content-text {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;

  color: #000000;
}
.sidebar-top .divider__content .divider__content-number {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;

  display: flex;
  align-items: center;

  color: #000000;
}
.divider__content .divider__content-bout {
  font-style: italic;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #000000;
}
.sidebar.css-sidebar-content {
  margin-top: 34px;
}
.sidebar-content {
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding: 24px 16px;
  gap: 4px;
  width: 1368px;

  background: #ffffff;
  border: 1px solid rgba(38, 56, 150, 0.14);
  box-shadow: 0px 4px 12px rgb(34 41 47 / 12%);
  border-radius: 10px;
}
.sidebar-footer {
  margin: 0 auto;
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 12px;

  width: 1368px;

  background: #ffffff;

  border: 1px solid rgba(38, 56, 150, 0.14);

  box-shadow: 0px 4px 12px rgba(34, 41, 47, 0.12);
  border-radius: 10px;
}
.sidebar-footer .content.css-sidebar-footer {
  padding: 0 0;
}
.sidebar-footer .content.css-sidebar-footer .content__header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 10px;
  gap: 10px;
}
.sidebar-footer .content.css-sidebar-footer .content__header p {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
}
.sidebar-footer .content.css-sidebar-footer .content__form {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 16px;
  gap: 16px;
}
.sidebar-footer .content.css-sidebar-footer .content__form .v-input {
  flex: 0 1 auto !important;
  width: 260px;
}
.sidebar-footer .v-btn:not(.v-btn--round).v-size--default {
  height: 40px !important;
  min-width: 64px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 148px;
  height: 40px;

  background: #171a88;
  border-radius: 8px 8px 8px 0px;
}

.sidebar-footer
  .v-select.v-text-field--outlined:not(.v-text-field--single-line)
  .v-select__selections {
  padding: 0 !important;
}
.sidebar-footer .content {
  width: 100%;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
</style>
