interface PropertyWardDistrictProvince {
  id: number;
  name: string;
}
export interface Province extends PropertyWardDistrictProvince {
  districts: District[];
}
export interface District extends PropertyWardDistrictProvince {
  wards: Ward[];
  province_id: number;
}
export interface Ward extends PropertyWardDistrictProvince {
  district_id: number;
}
export interface User {
  email: string;
  password: string;
  fullName: string;
  gender: string;
  birthday: Date | null;
  ward_id: number | undefined;
  role: 'user';
  identity_card_number: number | null;
}
