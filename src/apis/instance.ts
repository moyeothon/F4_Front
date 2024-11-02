import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "",
  withCredentials: false,
  // false를 통해 cross domain request 시 HTTP 인증 및 클라이언트 SSL 인증서 사용 허용
  headers: {
    "Content-Type": "application/json",
  },
};

export const client = axios.create(axiosConfig);
