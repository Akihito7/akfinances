import axios from "axios";
import { appError } from "../utils/appError";

const api = axios.create({
    baseURL: "http://localhost:7777"
});

api.interceptors.response.use(request => request,
    (error) => {
        if (error.response && error.response.data) {
            
            return Promise.reject(new appError(error.response.data.message))
        }

        else {
            return Promise.reject(error)
        }
    })

export { api }