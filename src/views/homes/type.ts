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
  MALE = 'nam',
  FEMALE = 'nu'
}
export interface Desserts extends PropertyWardDistrictProvince {
  street: string;
  ward: PropertyWardDistrictProvince;
  district: PropertyWardDistrictProvince;
  province: PropertyWardDistrictProvince;
  top: string;
  table: number;
}

export function labelFromGender(gender: Gender) {
  switch (gender) {
    case Gender.MALE:
      return 'Nam';
    case Gender.FEMALE:
      return 'Nữ';
    default:
      '';
  }
}
