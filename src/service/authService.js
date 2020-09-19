import axios from 'axios';
const api = 'http://umdsoft.uz/api/auth/'

export const authApi = {
    register : data => {
        
        axios.interceptors.request.use( conf => {
            console.log(conf)
            return conf;
        })
        return axios.post(`${api}register`,data)
    },
    login : data => {
        return axios.post(`${api}login`,data)
    },
    sendResetCode : phone => {
        return axios.post(`${api}forgotpasswordtosms/`,phone)
    },
    resetPassword : data => {
        return axios.post(`${api}editpassword`, { phone : data.password } , {
            headers : {
                code : data.code,
                phone : data.phone
            }
        })
    }
};