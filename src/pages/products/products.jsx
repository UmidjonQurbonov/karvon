import React , { useEffect , useState } from 'react';
import {connect} from 'react-redux';
import { productApi } from '../../service/productService';
import st from './products.module.scss';
import Slider from 'react-slick';
import cl from 'classnames';
import { Product , InnerLoader} from '../../components';




function Products(props){

    const [productList,setProductList] = useState(props.products.data)
    const [request,setRequest] = useState(false);

    useEffect(()=>{
        setProductList(props.products.data)
    },[props])
    return(
        <div className={st.products}>
            <div className="container">
                {
                    request && <InnerLoader/>
                }
                <h1 className={st.section_title}>Barcha maxsulotlar</h1>
                <div className="row">
                    {
                        productList.map((item,index) => {
                            return(
                                <div className="col-6 col-sm-4 col-md-3 p-0">
                                    <Product key={index} data={item}/>
                                </div>
                            )
                        })
                    }
                    <div className="col-12 d-flex justify-content-end">
                        {
                            props.products.pagination.prev && <button className={"btn-pagination"} onClick={()=>setPage(props.products.pagination.prev.page)}> <i className="bx bx-left-arrow-alt"></i> Oldingi </button>
                        }
                        {
                            props.products.pagination.next && <button className={"btn-pagination"} onClick={()=>setPage(props.products.pagination.next.page)}> Keyingi <i className="bx bx-right-arrow-alt"></i></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

    function setPage(page){
        setRequest(true)
        productApi.getroducts(page)
            .then(res => {
                props.setProducts(res.data)
                window.scrollTo(0,0)
                setRequest(false)
            })
    }
}

const mstp = state => (state);
const mdtp = dispatch => ({
    setProducts : (data) => {
        dispatch({type : "setProducts", payload : data})
    }
})
export default connect(mstp,mdtp)(Products)