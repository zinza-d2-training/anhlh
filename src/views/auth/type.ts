interface PropertyWardDistrictProvince {
  id: number;
  name: string;
}
export interface District extends PropertyWardDistrictProvince {
  province_id: number;
}
export interface Ward extends PropertyWardDistrictProvince {
  district_id: number;
}
