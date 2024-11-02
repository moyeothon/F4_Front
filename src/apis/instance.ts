import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "https://port-0-f4-back-m30e9x2h74f3a212.sel4.cloudtype.app/",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
};

export const instance = axios.create(axiosConfig);
