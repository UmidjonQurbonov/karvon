import React ,{ useState , useEffect } from 'react';
import st from './productCard.module.scss';
import cl from 'classnames';
import { connect } from 'react-redux';
import { productApi } from '../../service/productService';
import Swal from 'sweetalert2';



function ProductCard({product , lang , props}){

    const [request,setRequest] = useState(false);

    function deleteProduct(id){
        setRequest(true);
        productApi.deleteProduct(id)
            .then( res =>{
                productApi.getroducts()
                    .then( res =>{
                        setRequest(false);
                        props.setProducts(res.data);
                        Swal.fire("","Maxsulot muvoffaqyatli o'chirildi","success");
                    })
            })
    }

    return(
        <div className={cl(st.productCard,"card")}>
            <img src={`http://umdsoft.uz${product.images[0]}`} className="card-img-top" alt={product.title[lang]}/>
            <span className={st.productCard_time}> {`${product.createdAt.slice(0,10)} / ${product.createdAt.slice(11,16)}`} </span>
            <div className="card-body p-0">
                <h4 className={st.productCard_title}> {product.title[lang]} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, veritatis perferendis dolorum reprehenderit voluptatibus deserunt. Nobis eveniet, officiis impedit quisquam dolor repellendus dolores porro ducimus ipsam praesentium quam cumque optio!</h4>
                <div className={st.productCard_actions}>
                    <button> <i className="fa fa-fw fa-pen-alt"></i> O'zgartirish</button>
                    <button disabled={request} onClick={() => deleteProduct(product._id)}>
                          <i className="fa fa-fw fa-trash-alt"></i> O'chirish { request && <i className="fa fa-fw fa-circle-notch fa-spin"></i>}
                    </button>
                </div>
            </div>
        </div>
    )
}

const mdtp = dispatch => ({
    setProducts : (data) => {
        dispatch({type : "setProducts" , payload : data})
    }
})

export default connect(null, mdtp)(ProductCard);