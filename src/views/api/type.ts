import { AxiosResponse } from 'axios';

export interface UserRegister {
  email: string;
  password: string;
  fullName: string;
  gender: string;
  birthday: Date | null;
  ward_id: number | undefined;
  role: 'user';
  identity_card_number: number | null;
}

export interface UserLogin {
  email: string;
  password: string;
}
export interface ResponseDataUserLogin {
  id: number;
  email: string;
  access_token: string;
}

export interface CustomMyStatusResponse extends AxiosResponse {
  status: 200 | 404;
}

export interface ResponseError extends AxiosResponse {
  identity_card_number?: string[];
  email?: string[];
}

export interface ResponseDataUserRegister {
  message: string;
  status: number;
}
export interface ResponseDataUserLogin {
  email: string;
  password: string;
}
