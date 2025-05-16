import axios from "axios";

const api = axios.create({
    baseURL: "https://sashestudio.ru:4300",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;