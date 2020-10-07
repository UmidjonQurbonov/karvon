import React from "react";
import s from './productInfo.module.scss'

import cx from 'classnames'
import {NavLink} from "react-router-dom";

import header_logo_img from './../../img/innovation.jpg';
import carouselImg from './../../img/atlas.jpg'
import carouselImg1 from './../../img/aksi_1.jpg'
import carouselImg2 from './../../img/aksi_2.jpg'
import BrendsProduct from "./product_brends/brendsProduct";

const Product = () => {

    const brends_product_data = [
        {img: header_logo_img, link: '/', cost: 3300000,},
        {img: header_logo_img, link: '/', cost: 3300000,},
        {img: header_logo_img, link: '/', cost: 3300000,},
        {img: header_logo_img, link: '/', cost: 3300000,}
    ];

    const brendsView = brends_product_data.map((item, index) => {
        return (<BrendsProduct img={item.img} link={item.link} cost={item.cost} key={index}/>
        )
    });

    const history_links_data = [
        {categori: "Битова техника", to: '/'},
        {categori: "Климатици", to: '/'},
        {categori: "Кампания техника", to: '/'},
        {categori: "Товар", to: '/'},
    ];
    const historyView = history_links_data.map((item, index) => {
        return (<span key={index}> >
            <NavLink to={item.to}>  {item.categori}</NavLink>
         </span>)
    });

    const product_img_for_carousel_data = [
        {img: carouselImg1},
        {img: carouselImg},
        {img: carouselImg2},
    ];

    const productCarouselView = product_img_for_carousel_data.map((item, index) => {

        var a = false;
        if (index === 1) {
            a = true;
        }

        {
            let newVar = a ? (<div className="carousel-item active" key={index}>
                <div className={cx(s.carouselcard, "d-block w-100")}>
                    <img className={cx(s.carouselimg)} height={'250px'} src={item.img} alt="First slide"/>
                </div>
            </div>) : (<div className={cx("carousel-item")} height={'250px'} key={index}>
                <div className={cx(s.carouselcard, "d-block w-100")}>
                    <img className={cx(s.carouselimg)} height={'250px'} src={item.img} alt="First slide"/>
                </div>

            </div>);
            return newVar;
        }

    });

    const costView = (cost) => {

        let cnum = cost.toString();
        var clone = [];
        for (let i = cnum.length - 1; i >= 0; i--) {
            clone.push(cnum.charAt(i))
        }
        var ppp = cnum.length / 3;

        let ret = [];
        var retret = [];
        for (let i = 0; i < clone.length + ppp; i++) {

            if (i % 3 === 0 && i > 0) {
                ret.push(' ');
                ret.push(clone[i])
            } else {
                ret.push(clone[i])
            }
        }
        for (var i = ret.length - 1; i >= 0; i--) {
            retret.push(ret[i])
        }

        let ret1 = retret.join('');
        return ret1
    };

    const productData = [
        {
            number: '(2751 мнения) Коректен магазин от Данни на магазина',
            name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem?',
            cost: 3280221,
            link: '#'
        },
        {
            number: '(2751 мнения) Коректен магазин от Данни на магазина',
            name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem?',
            cost: 3280221,
            link: '#'
        },
        {
            number: '(2751 мнения) Коректен магазин от Данни на магазина',
            name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem?',
            cost: 3280221,
            link: '#'
        },
        {
            number: '(2751 мнения) Коректен магазин от Данни на магазина',
            name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem?',
            cost: 3280221,
            link: '#'
        },
        {
            number: '(2751 мнения) Коректен магазин от Данни на магазина',
            name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, exercitationem?',
            cost: 3280221,
            link: '#'
        },
    ];
    const productsView = productData.map((item, index) => {
        return (
            <div key={index}>
                <div className={cx(s.body_products, 'row align-items-center')}>
                    <div className={cx('col-12 my-2 my-sm-0 col-sm-2')}>
                        <div className={cx(s.body_products_logo, 'bg-danger')}>
                            Logo Brand
                        </div>
                    </div>
                    <div className={cx('col-3 col-sm-2')}>
                        <div className={cx(s.body_products_shop, 'text-muted text-center p-0 p-md-2')}>
                            {item.number}
                        </div>
                    </div>
                    <div className={cx('col-4 col-md-4')}>
                        <div className={cx(s.body_products_name)}>
                            {item.name}
                        </div>
                    </div>
                    <div className={cx('col-2 col-md-2')}>
                        <div className={cx(s.body_products_cost)}>{costView(item.cost)}</div>
                    </div>
                    <div className={cx('col-2 col-md-2 d-flex justify-content-end', s.forButton)}>
                        <div>
                            <NavLink to={item.link} className={cx('btn btn-primary ')}>
                                Информация <span className={cx(s.forbtn)}>в <span>     магазина
                                </span></span>
                            </NavLink>
                        </div>
                    </div>
                </div>
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
                            </div>
                            <div className={cx(s.product_info, "col-xl-6 col-md-6 col-sm-12 mb-0 mb-sm-5 mb-md-0 mt-3 mt-sm-0")}>
                                <div className={cx(s.product_info_body)}>
                                    <h3 className={cx(s.product_info_title)}>Daikin FTXB35C / RXB35C Климатици</h3>
                                    <span className={cx(s.product_info_rate, 'd-block')}>
                                        <i className={cx('fas fa-star')}></i>
                                        <i className={cx('fas fa-star')}></i>
                                        <i className={cx('fas fa-star')}></i>
                                        <i className={cx('fas fa-star')}></i>
                                        <i className={cx('fas fa-star')}></i>
                                    </span>
                                    <span className={cx(s.product_info_cost, 'd-block')}>
                                        {costView(3231121)} сум
                                    </span>
                                </div>
                                <div className={cx(s.product_connect)}>
                                    <div className={cx(s.product_connect_title)}>
                                        <span className={cx(s.product_connect_title_percent)}>&#37;</span><span
                                        className={cx(s.product_connect_title_p, 'text-muted')}>Намалява ли Цената?</span>
                                    </div>
                                    <div className={cx(s.product_connect_body, 'bg-white')}>
                                        <h6 className={cx('text-uppercase')}>Информация о прадавце</h6>
                                        <div className={cx('row')}>
                                            <div className={cx(s.product_connect_body_titr, 'col-5')}>
                                                Телефон:
                                                <a href="tel:+998932099924">
                                                    +99891 791 11 22
                                                </a>
                                            </div>
                                            <div className={cx(s.product_connect_body_titr, 'col-7')}>
                                                Электронная почта:
                                                <a href="#">info@doini.uz</a>
                                            </div>
                                            <div className={cx(s.product_connect_body_titr, 'col-5')}>
                                                Факс: <a href="tel:+998714122336">+998714122336</a>
                                            </div>
                                            <div className={cx(s.product_connect_body_titr, 'col-7')}>
                                                <a href="https://esavdo.uz">www.esavdo.uz</a>
                                            </div>
                                            <div className={cx(s.product_connect_body_titr, 'col-12 text-uppercase')}>
                                                <span>Социалные сети:</span>
                                                <span className={cx(s.product_connect_body_titr_messanger)}><span>
                                                <a href="#" target="_blank">
                                                    <i className={cx('fab fa-telegram')}></i>
                                                </a>
                                                </span>
                                                <span>
                                                <a href="#" target="_blank">
                                                    <i className={cx('fab fa-whatsapp')}></i>
                                                </a>
                                                </span>
                                                <span>
                                                <a href="#" target="_blank">
                                                    <i className={cx('fab fa-instagram')}></i>
                                                </a>
                                                </span>
                                                <span>
                                                <a href="#" target="_blank">
                                                    <i className={cx('fab fa-facebook')}></i>
                                                </a>
                                                </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx(s.product_message, 'mt-4')}>
                                        <button className={cx('btn p-2 btn-primary')}>
                                            <i className={cx('fab fa-telegram-plane p-2')}> </i>
                                            Отправить сообщение
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx(s.body)}>
                    <div className={cx(s.body_head, 'row justify-content-center ')}>
                        <div className={cx(s.body_head_link, 'col-6 col-sm-2 p-2 p-sm-0 text-uppercase')}>Оферти с цени</div>
                        <div className={cx(s.body_head_link, 'col-6 col-sm-2 p-2 p-sm-0 text-uppercase')}>Описание</div>
                        <div className={cx(s.body_head_link, 'col-6 col-sm-3 p-2 p-sm-0 text-uppercase')}>ИНФормация о продукте</div>
                        <div className={cx(s.body_head_link, 'col-6 col-sm-2 p-2 p-sm-0 text-uppercase')}>Комментарии</div>
                    </div>
                    <hr/>
                    <div className={cx(s.body_brends, 'row justify-content-between')}>
                        <div className={cx('col-9 col-sm-6')}>
                            <div className={cx('row')}>
                                <div className={cx("col-7")}>
                                    <div className={cx('text-muted')}>Маркирани оферти за Товар</div>
                                </div>
                                <div className={cx(s.body_brends_head_link, "col-4")}>
                                    <a href="#">Как са подбрани?</a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-3 col-md-2 d-flex justify-content-end')}>

                            <a href="#" className={cx(s.body_brends_head_link2)}>

                                <span>
                                <i className={cx('fas fa-sort-amount-up-alt')}>
                                </i>
                                     <span>  </span> Подредба
                                </span>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    {productsView}
                    <div className={cx("row my-4")}>
                        <div className={cx("col-12 col-sm-6")}>
                            <div className={cx("row")}>
                                <div className={cx('col-12')}>
                                    <span className={cx('font-weight-bold')}>Описание, детайли - </span>
                                    <span className={cx('text-uppercase font-weight-bold')}>Товар модел</span>
                                </div>
                                <div className={cx('col-12 my-4')}>
                                    <table className={cx(s.table, "w-100")}>
                                        <tbody>
                                        <tr>
                                            <th className={cx(s.table_title)}>Тип</th>
                                            <th className={cx(s.table_title)}>Степен сплит</th>
                                        </tr>
                                        <tr>
                                            <td>Инвертор</td>
                                            <td>Да</td>
                                        </tr>
                                        <tr>
                                            <th className={cx(s.table_title)}>Охлаждане</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>Еффективност при охлаждане</td>
                                            <td>А+</td>
                                        </tr>
                                        <tr>
                                            <td>Максимална мощност на охлаждане</td>
                                            <td>3.3кВт</td>
                                        </tr>
                                        <tr>
                                            <th className={cx(s.table_title)}>Отопление</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>Еффективност при охлаждане</td>
                                            <td>А+</td>
                                        </tr>
                                        <tr>
                                            <td>Максимална мощност на охлаждане</td>
                                            <td>3.3кВт</td>
                                        </tr>
                                        </tbody>

                                    </table>
                                </div>
                                <div className={cx('col-12')}>
                                    <div className={cx(s.galery)}>
                                        <div className={cx('my-3')}>Галерия - <span className={cx(s.galery_product_title)}>Tovar</span></div>
                                        <div className="row">
                                            <div className="col-3">
                                                <img className={cx('img-fluid')} src={carouselImg1} alt=""
                                                     width={"150px"} height={"120px"}/>
                                            </div>
                                            <div className="col-3">
                                                <img className={cx('img-fluid')} src={carouselImg2} alt=""
                                                     width={"150px"} height={"120px"}/>
                                            </div>
                                            <div className="col-3">
                                                <img className={cx('img-fluid')} src={carouselImg} alt=""
                                                     width={"150px"} height={"120px"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-12 col-sm-6 my-3 my-sm-0')}>
                            <div className={cx(s.titr)}>
                                <div className={cx(s.titr_title)}>Производител: <span
                                    className={cx(s.titr_title_company)}>Company:Model</span></div>
                            </div>
                            <div className={cx(s.titr_head, 'my-4')}>
                                Описание:
                            </div>
                            <div className={cx(s.titr_body)}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusantium at atque consequatur culpa fuga necessitatibus nihil perferendis quam ut!
                                Accusamus adipisci earum error esse hic molestias necessitatibus omnis provident
                                temporibus!
                            </div>
                            <div className={cx('row flex-row-reverse')}>
                                <div className={cx("col-12 col-sm-7")}>
                                    <div className={cx(s.titr_foot)}>
                                        <i className={cx('fas fa-angle-double-left my-4')}> </i> Product / Name <span className={cx(s.titr_foot_span)}>полна описание </span><i className={cx('fas fa-angle-double-right')}> </i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default Product;