import axios from 'axios';
import decode from 'jwt-decode';
const api = 'http://umdsoft.uz/api/product';
const headers = {
    "Authorization" : `Bearer ${localStorage.getItem('token')}`
}
const userID = decode(localStorage.getItem('token')).id;

export const productApi = {
    getroducts : (page) => {
        if(page){
            return(
                axios.get(`${api}?page=${page}`)
            )
        }
        return axios.get(api);
    },
    getProductById : id => (axios.get(`${api}/${id}`)),
    addProduct : form => (axios.post(`${api}/add`,form , { headers })),
    deleteProduct : id => (axios.delete(`${api}/${id}`,{ headers })),
    postComment : (cost,productId, comment) =>{
        console.log(cost,productId,comment);
        return new Promise((resolve,reject)=>{
            axios.post('http://umdsoft.uz/api/rating/product',{
            user : userID,
            product : productId,
            cost : cost}, { headers })
            .then( res =>{
                axios.post(`${api}/comment`,{
                    product : productId,
                    comment : comment
                }, { headers })
                .then(res => resolve(res.data), err => reject(err))
            })
        })
    }
}