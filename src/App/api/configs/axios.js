import axios from "axios";

const BASE_URL = "https://dummyjson.com/";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const axiosAuthClient = axios.create({
  baseURL: BASE_URL,
});