import React , { useEffect , useState } from 'react';
import {connect} from 'react-redux';
import st from './product.module.scss';
import cl from 'classnames';
import {Link} from 'react-router-dom';



function Product({props,data}){

    return(
        <div className={cl(st.product,"card")} >
            <img src={`http://umdsoft.uz${data.images[0]}`} alt={data.title.ru} className="card-img-top"/>
            <div className={st.product_body}>
                <Link  className={cl(st.product_title)} to={`/products/${data._id}`}>{data.title.uz} </Link>
                <h2 className={st.product_price}> {data.price}.00 </h2>
                <button> <i className="fa fa-fw fa-plus"></i> Savatchaga</button>
            </div>
        </div>
    )
}



const mstp = state => (state);
export default connect(mstp,null)(Product)