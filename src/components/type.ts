interface PropertyWardDistrictProvince {
  id: number;
  name: string;
}
export interface Ward extends PropertyWardDistrictProvince {}
export interface District extends PropertyWardDistrictProvince {
  wards: Ward[];
}
export interface Province extends PropertyWardDistrictProvince {
  districts: District[];
}
export enum Gender {
  MALE = '1',
  FEMALE = '2'
}
