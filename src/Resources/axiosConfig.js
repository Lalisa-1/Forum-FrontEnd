import axios from "axios";

const axiosBase = axios.create(`${process.env.baseURL}`);
export default axiosBase;
