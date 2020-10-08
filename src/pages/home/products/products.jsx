import React , { useEffect , useState } from 'react';
import {connect} from 'react-redux';
import st from './products.module.scss';
import Slider from 'react-slick';
import cl from 'classnames';
import { Product } from '../../../components'



function Products(props){

    const products = props.products.data.filter((val,num) => num<6 && val);
    console.log(products.length)
    const [productList,setProductList] = useState(products)

    return(
        <div className={st.products}>
            <div className="container">
                <h1 className={st.section_title}>Tavsiya qilamiz</h1>
                <Slider arrows={false} swipe={true} autoplay={false} autoplaySpeed={3000} slidesToShow={4} responsive={[
                    {
                        breakpoint : 767,
                        settings : {
                            slidesToShow : 2,
                            slidesToScroll : 2
                        }
                    },
                    {
                        breakpoint : 1199,
                        settings : {
                            slidesToShow : 3,
                            slidesToScroll : 2
                        }
                    },
                    {
                        breakpoint : 1900,
                        settings : {
                            slidesToShow : 4,
                            slidesToScroll : 2
                        }
                    }
                ]}>
                    {
                        productList.map((item,index) => {
                            return(
                                <Product key={index} data={item}/>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

const mstp = state => (state);
export default connect(mstp,null)(Products)