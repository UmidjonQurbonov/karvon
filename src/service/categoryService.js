import axios from 'axios';
const api = 'http://umdsoft.uz/api/category/';

export const categoryApi = {
    getCategory : () => {
        return axios.get(api)
    }
}