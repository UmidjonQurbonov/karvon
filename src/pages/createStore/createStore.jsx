import React, { useState, useEffect } from 'react';
import st from './createStore.module.scss';
import { YMaps , Map , Placemark , ZoomControl , FullscreenControl , TypeSelector } from 'react-yandex-maps';
import { connect } from 'react-redux';
import { TreeSelect } from '../../components';
import cl from 'classnames';
import rich from '../../img/rich.png';
import { storeApi } from '../../service/storeService';

function CreateStore(props){

    const [categories,setCategories] = useState([]);
    const [request,setRequest] = useState(false);
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);

    const [data,setData] = useState({
        name : "",
        descriptionuz : "",
        descriptionru : "",
        file : {},
        category : "",
        lat : "",
        long : ""
    })

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition( pos => {
            setData({...data, lat : pos.coords.latitude, long : pos.coords.longitude })
        })
        setCategories(props.category);
    },[])

    const lang = props.lang.lang;

    function storeCreator(e){
        console.log(data);
        e.preventDefault();
        setRequest(true);
        const form = new FormData(document.forms[0]);
        Object.keys(data).forEach( key => {
            form.append(key,data[key])
        })

        storeApi.createStore(form)
            .then( res =>{
                setRequest(false);
                setSuccess(true);
                setError(false);
                console.log(res.data);
            }, err => {
                setRequest(false);
                setSuccess(false);
                setError(true);
            })

    }

    return(
            <div className={st.createStore}>
                <div className={st.createStore_form}>
                    <h1 className="text-center">Do'kon yaratish</h1>
                    <form encType="multipart/form-data" onSubmit={ storeCreator }>
                        <div className="form-group my-4 my-md-0">
                            <label htmlFor="name">Nomi</label>
                            <input onChange={ e => setData({...data , name : e.target.value })} id="name" type="text" required className="form-control"/>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 p-0 pr-md-2">
                                <div className="form-group my-4 my-md-2">
                                    <label htmlFor="descru">Ta'rif (rus tilida)</label>
                                    <textarea onChange={ e => setData({...data , descriptionru : e.target.value })} required id="descru" cols="30" rows="4" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-0 pl-md-2">
                                <div className="form-group my-4 my-md-2">
                                    <label htmlFor="desruz">Ta'rif (o'zbek tilida)</label>
                                    <textarea onChange={ e => setData({...data , descriptionuz : e.target.value })} required id="descuz" cols="30" rows="4" className="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 p-0 pr-md-2">
                                <div className="form-group my-4 my-md-2">
                                    <label htmlFor="form">Rasmni tanlang</label>
                                    <input type="file" onChange={ e => {
                                        setData({...data, file : e.target.files[0] })
                                    }}/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-0 pl-md-2">
                                <div className="form-group my-4 my-md-2">
                                    <label htmlFor="catecory">Kategoriyani tanlang</label>
                                    <TreeSelect placeholder="Tanlanmagan..." data={categories}  onChange={ e => setData({...data , category : e })}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group my-4 my-md-2">
                            <label htmlFor="geo">Do'koningizni xaritadan belgilang</label>
                            <YMaps query={{apikey: '941c7d01-c347-44cf-96c4-0cd64341281f'}}>
                                <Map width="100%" height="40vh" defaultState={{center : [data.lat,data.long], zoom : 15}}
                                instanceRef={ inst =>{
                                    if(inst){
                                        inst.events.add('click', e =>{
                                            const coords = e.get('coords');
                                            setData({...data, lat : coords[0], long : coords[1]});
                                        })
                                    }
                                } }>
                                    <Placemark geometry={[data.lat, data.long]} />
                                    <FullscreenControl/>
                                    <TypeSelector/>
                                    <ZoomControl/>
                                </Map>
                            </YMaps>
                        </div>
                        <div className="form-group">
                            {
                                success && 
                                <div className="alert alert-success">
                                    Raxmat ! Sizning do'koningiz muvoffaqiyatli yaratildi. Endi siz do'koningizga mahsulotlarni qo'shib bishlashingiz mumkun.
                                </div>
                            }

                            {
                                error &&
                                <div className="alert alert-danger">
                                    Kechirasiz ! Do'koningizni yaratish paytida qandaydir xatolik ro'y berdi. Iltimos qayta harakat qilib ko'ring yoki sayt administratsiyasiga xabar bering.
                                </div>
                            }
                        </div>
                        <button type="submit" disabled={request}> davom etish  { request && <i className="fa fa-fw fa-spin fa-circle-notch"></i> } </button>
                    </form>
                </div> 
            </div>
    )
}

const mstp = state => (state);
export default connect(mstp,null)(CreateStore);