import * as axios from "axios"

const instance = axios.create({
    baseURL:'http://umdsoft.uz/api/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
});


export const authAPI = {
    getProfile() {
        return instance.get(`auth/profile`);
    },
    register(name, phone, email, password, type) {
        return instance.post(`auth/register`, {name,phone,email, password,type});
    },
    login(phone, password) {
        return instance.post(`auth/login`, {phone, password});
    },
    logout() {
        return instance.get(`auth/logout`);
    },
    forgotPassword(){
        return instance.post(`auth/forgotpasswordtosms`)
    }
};