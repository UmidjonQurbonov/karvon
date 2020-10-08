import React, { useEffect, useState } from 'react';
import st from './store.module.scss';
import cl from 'classnames';
import { StoreCard } from '../../components';
import { connect } from 'react-redux';

function Store(props){

    const [stores , setStores ] = useState(props.stores);
    const [request , setRequest] = useState(true);

    useEffect(()=>{
        setStores(props.stores)
    },[props.stores])
    
    return(
        <div className="container">
            <div className={cl(st.store,"py-5 px-0")}>
                <div className="row p-0">
                    <div className="col-12">
                        <h1 className="page_title">Do'konlar</h1>
                    </div>
                    <div className="col-12 col-lg-9">
                        {
                            stores.data.map((item,index)=>{
                                return(
                                    <div className="animate__animated animate__fadeInLeft p-0">
                                        <StoreCard data={item} key={index}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-12 col-lg-3">
                        <h3 className={cl(st.adTitle)}>Reklama</h3>
                        <div className={cl(st.ads)}>
                            <div><img src={require('../../img/mac.jpg')} alt="ad"/></div>
                            <div><img src={require('../../img/s11.jpg')} alt="ad"/></div>
                            <div><img src={require('../../img/jacket.jpg')} alt="ad"/></div>
                            <div><img src={require('../../img/nike.jpg')} alt="ad"/></div>
                            <div><img src={require('../../img/house.jpg')} alt="ad"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mstp = state => (state);
export default connect(mstp,null)(Store);