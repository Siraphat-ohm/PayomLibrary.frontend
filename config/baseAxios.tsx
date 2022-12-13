import axios from "axios";

const instanceAxios = axios.create({
    baseURL : "http://127.0.0.1:9999",
    withCredentials: true,
});

export default instanceAxios;