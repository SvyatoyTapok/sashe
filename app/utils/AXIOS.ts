import axios from "axios";

const api = axios.create({
    baseURL: "http://109.237.96.208:4300",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;