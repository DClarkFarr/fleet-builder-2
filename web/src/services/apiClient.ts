import axios from "axios";

console.log("getting base url", import.meta.env.VITE_API_BASE);
const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    withCredentials: true,
});

export default client;
