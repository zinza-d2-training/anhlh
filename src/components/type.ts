interface IdName {
  id: number;
  name: string;
}
export interface Ward extends IdName {}
export interface District extends IdName {
  wards: Ward[];
}
export interface Provincial extends IdName {
  districts: District[];
}
export type wards = Pick<District, 'id' | 'name'>;
export type WardSetInput = Partial<Ward>;
export type DistrictsSetInput = Partial<District>;
export type ProvincialSetInput = Partial<Provincial>;
