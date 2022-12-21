import axios from "axios";



export const axiosInstance = axios.create({
  baseURL:  "https://saanyo-apis.onrender.com/api/"
});