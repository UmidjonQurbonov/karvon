import axios from 'axios';
const api = 'http://umdsoft.uz/api/auth/'

export const authApi = {
    register : data => {
        return axios.post(`${api}register`,data)
    },
    login : data => {
        return axios.post(`${api}login`,data)
    }
}