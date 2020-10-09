import React , { useState , useEffect, createRef } from 'react';
import st from './productInfo.module.scss';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { InnerLoader } from '../../components';
import { productApi } from '../../service/productService';
import ReactStars from 'react-rating-stars-component';
import parser from 'react-html-parser';
import carouselImg2 from './../../img/aksi_2.jpg'
import Swal from 'sweetalert2';


function ProductWithAction(props){
    const [id] = useState(props.match.params.id);
    const [product,setProduct] = useState({});
    const [comments,setComments] = useState([]);

    const [rate,setRate] = useState(0);
    const [comment,setComment] = useState("");
    const [request,setRequest] = useState(true);

    const slider = createRef();

    useEffect(()=>{
        productApi.getProductById(id)
            .then( res =>{
                setProduct(res.data.product[0]);
                setComments(res.data.comment);
                setRequest(false)
            })
    },[])
    
    function format(str){
        let a = "";
        while(str.length>2){
            a = str.slice(str.length-3,str.length)+" "+a;
            str = str.slice(0,str.length-3)
        }
        a=str+" "+a;
        return a;
    }

    function makeComment(e){
        e.preventDefault();
        if(rate === 0){
            Swal.fire("Diqqat","Iltimos maxsulotga baho bering","warning")
        }else{
            productApi.postComment(rate,product._id,comment)
                .then(res => console.log(res), err => console.log(err))
        }
    }
    
    return(
        request ? 
        <InnerLoader/>
        :
        <div className="container">
            <div className={st.productInfo}>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to='/'> Bosh sahifa</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to='/products'> Mahsulotlar </Link>
                    </li>
                    <li className="breadcrumb-item">
                        { product.title.uz }
                    </li>
                </ul>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src={carouselImg2} className="w-100 h-100" style={{objectFit : "scale-down"}}/>
                    </div>
                    <div className={`col-12 col-md-8 col-lg-5 ${st.preview}`}>
                        <button onClick={ ()=> slider.current.slickPrev() }> <i className="fa fa-fw fa-chevron-left"></i> </button>
                        <button onClick={ ()=> slider.current.slickNext() }> <i className="fa fa-fw fa-chevron-right"></i> </button>
                        <Slider ref={ slider } slidesToScroll={1} slidesToShow={1} autoplay={true} autoplaySpeed={3000} arrows={false} cssEase="ease-in" dots={false} >
                                {
                                    product.images.map((item,index)=>{
                                        return(
                                            <div  key={index}>
                                                <img src={`http://umdsoft.uz${item}`} alt="" />
                                            </div>
                                        )
                                    })
                                }
                        </Slider>
                    </div>
                    <div className="col-12 col-lg-4 py-4 px-0 py-md-0 px-md-4">
                        <h2 className={st.title}> {product.title.uz} </h2>
                        <ReactStars
                            count={5}
                            size={25}
                            value={Number(product.rating)}
                            isHalf={true}
                            edit={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="orange"
                        />
                        <h3 className={st.price}> {format(product.price)}SUM</h3>
                        <div className={st.seller_info}>
                            <h5>Sotuvchi haqida malumot:</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Telefon: {product.author.phone} </td>
                                        <td>Email: {product.author.email} </td>
                                    </tr>
                                    <tr>
                                        <td>Faks: {product.author.phone} </td>
                                        <td> Sayt: www.esavdo.uz </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            Ijtimoiy tarmoq: 
                                            <a href="#"><i className="fab fa-telegram"></i></a>
                                            <a href="#"> <i className="fab fa-facebook"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button className={st.sendMessage}> <i className="fa fw fa-paper-plane"></i> Xabar jo'natish</button>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="row">
                    <div className="col-12 mt-5">
                        <ul className="nav nav-tabs py-3"role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active"data-toggle="tab" href="#offer">Takliflar va narxlar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"data-toggle="tab" href="#info">Maxsulot haqida malumot</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" data-toggle="tab" href="#description">Tarif</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" data-toggle="tab" href="#comments">Fikrlar</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 py-5">
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="offer">
                                <h1>Takliflar</h1>
=======
                <hr/>
            </div>
        )
    });

    return (

        <div className={cx(s.product, 'mt-3')}>
            <div className={cx('container')}>
                <div className={cx(s.header, 'row')}>
                    <div className={cx(' col-md-4 col-sm-6 col-12 mx-0')}>
                        <div className={cx(s.brends, 'row')}>
                            <div className={cx('col-12')}>
                                <div className={cx("row")}>
                                    <div className={cx(s.brends_header, "col-12")}>
                                        <div className={cx(s.brends_header_title)}>
                                        <span className={cx('text-uppercase')}>
                                    Маркирани оферти
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {brendsView}
                        </div>
                    </div>
                    <div className={cx('col-md-8 col-sm-6  mt-4  mx-sm-0  mt-sm-0 col-12', s.col)}>
                        <div className={cx(s.history, 'text-muted')}>
                            <span>Тук сте: </span>
                            <span>
                                <NavLink to={'/'}>Начало</NavLink>
                                {historyView}
                            </span>
                        </div>
                        <div className={cx('row mt-4')}>
                            <div className={cx(s.carousel,"col-xl-6 col-md-6 col-sm-12 col-12 w-100 mb-sm-4")}>
                                <div id="myCarousel" className={"carousel slide"} data-ride="carousel">
                                    <div className={"carousel-inner"}>
                                        {productCarouselView}
                                    </div>
                                    <a className={"carousel-control-prev"} href="#carouselExampleControls" role="button"
                                       data-slide="prev" data-target="#myCarousel">
                                        <div className={cx(s.carouselButton)}>
                                            <i className={'fas fa-chevron-left'}></i>
                                        </div>
                                    </a>
                                    <a className={"carousel-control-next"} href="#carouselExampleControls" role="button"
                                       data-slide="next" data-target="#myCarousel">
                                        <div className={cx(s.carouselButton)}>
                                            <i className='fas fa-chevron-right'>
                                            </i>
                                        </div>
                                    </a>
                                </div>
>>>>>>> d2785c5304b2c980a36c3e903cf299a1590aa6d0
                            </div>
                            <div className="tab-pane fade" id="info">
                                {
                                    parser(product.info.uz)
                                }
                            </div>
                            <div className="tab-pane fade" id="description">
                                {
                                    parser(product.description.uz)
                                }
                            </div>
                            <div className="tab-pane fade" id="comments">
                                <h4>Fikr bildiring</h4>
                                <form className={st.comment} onSubmit={ makeComment }>
                                    
                                    <div className="form-group">
                                        <label htmlFor="rate">Maxsulotga baho bering</label>
                                        <ReactStars
                                            count={5}
                                            size={30}
                                            onChange={(rate) => setRate(rate)}
                                            value={Number(product.rating)}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="orange"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="commentText">Fikringiz matnini kiriting</label>
                                        <textarea onChange={e => setComment(e.target.value)} placeholder="Maxsulot menga yoqdi. Sifati va narxi ham ancha yaxshi" className="form-control" required id="commentText"></textarea>
                                    </div>
                                    <button className={st.comment_submit}> Fikr qoldirish </button>
                                </form>
                            </div>
                        </div> 
                    </div>         
                </div>
            </div>
        </div>
    
    )
}

const mstp = state => (state);

export default connect(mstp,null)(ProductWithAction);

