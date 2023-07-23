import axios from "axios";

const URL_API = "https://fastapimongo.onrender.com/api/v1";
 
export const taskAxios = axios.create({
    baseURL:`${URL_API}/tasks/`
})
