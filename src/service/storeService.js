import axios from 'axios';
const api = 'http://umdsoft.uz/api/company/';
const headers = {
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}

export const storeApi = {
    getStores : () => {
        return axios.get(`${api}all`,{ headers })
    },
    createStore : data =>{
        return axios.post(`${api}create`,data,{ headers })
    }
}