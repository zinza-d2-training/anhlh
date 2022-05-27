export interface Header {
  text: string;
  value: string;
  align?: string;
}
export interface Result {
  id: number;
  name: string;
  birthday: string;
  gender: string;
  healthInsurance: number;
  cmnd: number;
  state: string;
  province: string;
  district: string;
  ward: string;
}
export interface MedicineJnjected {
  id: number;
  name: string;
  time: string;
  numberLot: string;
  place: string;
}
