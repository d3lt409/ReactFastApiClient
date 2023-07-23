import axios from "axios";

const URL_API = "http://localhost:8000/api/v1";
 
export const taskAxios = axios.create({
    baseURL:`${URL_API}/tasks/`
})
