import React , {useState , useEffect} from 'react'
import st from './profil.module.scss'
import { productApi } from '../../service/productService';
import brin from '../../img/brin.jpg';
import ReactStars from 'react-rating-stars-component';
import { CreateStore } from '../../pages'
import { TreeSelect , ProductCard } from '../../components';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import decoder from 'jwt-decode';
import {connect} from 'react-redux';
import $ from 'jquery';
import cx from 'classnames';
import cart from '../../img/emptycart.png';
import Swal from 'sweetalert2'; 

const Profil = (props) => {

    const id = decoder(localStorage.getItem('token')).id;
    let myProducts = [];
    props.products.data.forEach( product =>{
        product.author._id === id && myProducts.push(product);
    })

    const [products,setProducts] = useState(myProducts);

    

    useEffect(()=>{
        let pro = []
        props.products.data.forEach( product =>{
            product.author._id === id && pro.push(product);
        })
        setProducts(pro)
    },[props])

    const links = [
        {to: "personalInfo", title:"Shahsiy ma'lumotlar", icon: "fa fa-user"},
        {to : "createStore", title : "Do'kon yaratish" , icon : "fa fa-plus" },
        {to: "createProduct", title:"Maxsulot qo'shish", icon: "fa fa-cart-plus"},
        {to : "myProducts", title : "Mening maxsulotlarim", icon : "fa fa-th-large"}
    ]
    

    return (
        <div className={cx(st.profil)}>
            <div className="container">
                <ProfileCard sidebarData={links}/>
                <div className={st.content}>
                    <div id="createStore" className={cx(st.content_item)}>
                        <CreateStore/>
                    </div>
                    <div id="createProduct" className={cx(st.content_item)}>
                        <AddProduct props={props} onComplete={()=>{
                            productApi.getroducts()
                                .then( res =>{
                                    props.setProducts(res.data);
                                })
                        }} categories={props.category}/>
                    </div>
                    <div id="myProducts" className={cx(st.content_item)}>
                        <div className="row p-0 bg-white">
                            <div className="col-12 mb-2 p-3 ">
                                { products.length > 0 && <h1 className="text-center my-4">Mening maxsulotlarim</h1> }
                            </div>
                            {
                                products.length>0 ? products.map((item,index)=>{
                                    return(
                                        <div className="col-6 col-md-4 col-lg-3 p-0" key={index}>
                                            <ProductCard lang="uz" product={item}  props={props} />
                                        </div>
                                    )
                                }) : 
                                <div className={st.empty}>
                                    <img src={cart} alt=""/>
                                    <h2>Siz hali hech qanday maxsulot qo'shmagansiz !</h2>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



function AddProduct({categories,props , onComplete}){

    const [request,setRequest] = useState(false);
    const [data,setData] = useState({
        titleuz : "",
        titleru : "",
        category : "",
        company : "",
        descriptionuz : "",
        descriptionru : "",
        infouz : "",
        inforu : "",
        images : [],
        price : ""
    });

    useEffect(()=>{
        const id = decoder(localStorage.getItem('token')).id;
        props.stores.data.forEach((store)=>{
            if(store.director === id){
                setData({...data , company : store._id})
            }
        })
    },[])

    function handleSubmit(e){
        let form = new FormData();
        let fullFilled = true;
        Object.keys(data).forEach( key =>{
            if(data[key].length<1){
                fullFilled = false;
            }
            if(key === 'images'){
                for(let i = 0; i<data.images.length ; i++){
                    form.append(key,data.images[i]);
                }
            }else{
                form.append(key,data[key])
            }
        })

        if(fullFilled){
            setRequest(true);
            productApi.addProduct(form)
            .then( res => {
                setRequest(false);
                onComplete();
                Swal.fire({
                    title : "Qo'shildi",
                    text : "Maxsulot muvoffaqiyatli qo'shildi",
                    icon : "success"
                })
            }, err => {
                setRequest(false);
                Swal.fire({
                    title : "Xatolik",
                    text : "Maxsulotni qo'shishda xatolik . Balki maydonlarni xato to'ldirgandirsiz ?",
                    icon : "error"
                })
            });
        }else{
            Swal.fire("Xatolik","Iltimos , barcha maydonlarni tog'ri to'ldiring","error")
        }
    }

    return(
        <div className={cx(st.addProduct)}>
            <h1 className="text-center my-5">Mahsulot qo'shish</h1>
            <form encType="multipart/form-data" onSubmit={ e => {
                e.preventDefault();
                handleSubmit();
            }}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="tiru">Sarlavha (ru)</label>
                            <input onChange={ e => setData({...data , titleru : e.target.value })} type="text" id="tiru" required/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="tiuz">Sarlavha (uz)</label>
                            <input onChange={ e => setData({ ...data , titleuz : e.target.value })} type="text" id="tiuz" required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="category">Kategoriya</label>
                            <TreeSelect id="category" onChange={ (val) => setData({...data , category : val }) } data={categories} placeholder="Mahsulot kategoriyasini tanlang"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="descru">Ta'rif (ru)</label>
                            <ReactQuill onChange={ e => setData({ ...data , descriptionru : e })}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="descuz">Ta'rif (uz)</label>
                            <ReactQuill onChange={ e => setData({ ...data , descriptionuz : e })}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="inru">Malumot (ru)</label>
                            <ReactQuill onChange={ e => setData({ ...data , inforu : e })}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="inuz">Malumot (uz)</label>
                            <ReactQuill onChange={ e => setData({ ...data , infouz : e })}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="images">Rasmlarni yuklang</label>
                            <input onChange={ e => setData({ ...data , images : e.target.files })} multiple type="file" id="images" required/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="price">Narxi</label>
                            <input type="text" onChange={ e => setData({ ...data , price : e.target.value })} id="price" placeholder="UZS"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <button disabled={request} className={st.addProductSubmitButton} type="submit">
                            Qo'shish { request && <i className="fa fa-fw fa-circle-notch fa-spin"></i> }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function ProfileCard({sidebarData}){
    return(
        <div className={st.profile_card}>
            <div className={cx(st.profile_card_dropdown)}>
                <div className={cx("dropdown")}>
                    <button className="dropdown-toggl" data-toggle="dropdown">
                        ...
                    </button>
                    <div className="dropdown-menu dropdown-menu-right withArrow">
                        <SideBar data={sidebarData}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-2">
                    <img src={brin} alt="Sergey Brin"/>
                </div>
                <div className={cx(st.profile_card_info,"col-12 col-md-8 col-lg-10")}>
                    <h3>Sergey Brin</h3>
                    <p>Senior software engineer</p>
                    <div className="d-flex justify-content align-items-center justify-content-md-between flex-wrap flex-column flex-md-row">
                    <ul>
                        <li> <a href="#"> <i className="fab fa-fw fa-facebook-f"></i> Facebook</a> </li>
                        <li> <a href="#"> <i className="fab fa-fw fa-telegram-plane"></i> Telegram</a> </li>
                        <li> <a href="#"> <i className="fab fa-fw fa-instagram"></i> Instagram</a> </li>
                    </ul>
                    <ReactStars value={5} size={25} activeColor="#FFAA00" color="#ddd" edit={false}/>
                    </div>
                </div>
            </div>
        </div>
                    
    )
}

function SideBar({data}){
    return( 
        data.map((item,index)=>{
            return(
                <a key={index} role="tab" className={cx(st.profile_card_dropdown_item,"dropdown-item")} onClick={ e => toggleTab(e,e.currentTarget.getAttribute('tab-target')) } tab-target={`#${item.to}`}><i className={item.icon}></i>  <span>{item.title}</span></a>
            )
        })
    )
}

function toggleTab(e,id){
    $(id).siblings().removeClass(st.content_item_visible);
    $(id).addClass(st.content_item_visible);
}

const mstp = state => (state);
const mdtp = dispatch =>({
    setProducts : (data) => {
        dispatch({type : "setProducts" , payload : data})
    }
})
export default connect(mstp,mdtp)(Profil);