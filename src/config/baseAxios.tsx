import axios from "axios";

const BASE_URL = "http://127.0.0.1:4662/api"
export default axios.create({
    baseURL : BASE_URL,
    withCredentials : true
});

export const axiosPrivate = axios.create({
    baseURL : BASE_URL,
    withCredentials : true
})