import { instance } from './axios';
import { AxiosResponse } from 'axios';
import {
  CustomMyStatusResponse,
  ResponseDataUserRegister,
  ResponseDataUserLogin,
  UserLogin
} from './type';
import { UserRegister, ResponseError } from './type';

export const userApi = {
  postUserRegister: (
    url: string,
    user: UserRegister
  ): Promise<AxiosResponse<ResponseDataUserRegister>> => {
    return instance.post<ResponseDataUserRegister, CustomMyStatusResponse, UserRegister>(url, user);
  },
  postUserLogin: (url: string, user: UserLogin): Promise<AxiosResponse<ResponseDataUserLogin>> => {
    return instance.post<ResponseDataUserLogin, CustomMyStatusResponse, UserLogin>(url, user);
  }
};
