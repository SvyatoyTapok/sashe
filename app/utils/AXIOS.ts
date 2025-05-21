import axios from "axios";

const api = axios.create({
    baseURL: "http://sashestudio.ru",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;