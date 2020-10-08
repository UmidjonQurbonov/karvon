import React, { useState , useEffect } from 'react';
import { connect } from 'react-redux';
import st from './storecard.module.scss';
import cl from 'classnames';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function StoreCard({data}){
    

    return(
        <div className={cl(st.storeCard)}>
            <div className={cl("row")}>
                <div className="col-12 col-sm-5 col-lg-4">
                    <img src={`http://umdsoft.uz${data.image}`} alt=""/>
                </div>
                <div className="col-12 col-sm-7 col-lg-8">
                    <div className="d-flex justify-content-between flex-wrap py-2">
                        <h3>
                            {data.name} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate adipisci soluta nisi, vel maiores natus esse odit illum odio magni rem blanditiis quis facere voluptatem asperiores nesciunt nostrum sapiente quos?
                        </h3>
                        <ReactStars
                            count={5}
                            size={18}
                            isHalf={true}
                            emptyIcon={<i className="fa fa-fw fa-star"></i>}
                            filledIcon={<i className="fa fa-fw fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            activeColor="#FFAA00"
                        />
                    </div>
                    <h6>Kompaniya haqida :</h6>
                    <p>
                        { data.description.uz }
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique vel animi molestiae in, ducimus totam velit nostrum iste! Saepe iure veniam vitae blanditiis distinctio, nam vero exercitationem accusantium ullam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quam officiis sequi nemo temporibus est ex asperiores impedit aperiam expedita cupiditate labore repellendus molestias nihil voluptatum. Dolorum accusantium impedit magnam?
                    </p>
                    <div className="d-flex justify-content-between flex-wrap">
                        <div>
                            <i className="bx bx-fw bx-phone"></i> 93 772-07-49
                        </div>
                        <Link to='/'> Do'konni ko'rish </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mstp = state => (state);
export default connect(mstp,null)(StoreCard);