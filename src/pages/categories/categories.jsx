import React from 'react'
import st from './categories.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import img1 from '../../img/cat_1.svg';
import img2 from '../../img/cat_2.svg';
import img3 from '../../img/cat_3.svg';
import img4 from '../../img/cat_4.svg';
import img5 from '../../img/cat_5.svg';
import img6 from '../../img/cat_6.svg';
import img7 from '../../img/cat_7.svg';
import img8 from '../../img/cat_8.svg';
import img9 from '../../img/cat_9.svg';
import img10 from '../../img/cat_10.svg';
import img11 from '../../img/cat_11.svg';
import img12 from '../../img/cat_12.svg';
import img13 from '../../img/cat_13.svg';
import img14 from '../../img/cat_14.svg';
import img15 from '../../img/cat_15.svg';


const Categories = () => {

    const cards = [
        {to:'all-categories/food', title:"Продовольственный рынок", img:img1},
        {to:'all-categories/food', title:"Рынок одежды и обуви", img:img2},
        {to:'all-categories/food', title:"Рынок компьютеров и оргтехники", img:img3},
        {to:'all-categories/food', title:"Рынок телефоны и аксессуары", img:img4},
        {to:'all-categories/food', title:"Рынок бытовая техника", img:img5},
        {to:'all-categories/food', title:"Рынок красота и здоровье", img:img6},
        {to:'all-categories/food', title:"Рынок бижутерия и часы", img:img7},
        {to:'all-categories/food', title:"Рынок сумки и обувь", img:img8},
        {to:'all-categories/food', title:"Рынок дом и зоотовары", img:img9},
        {to:'all-categories/food', title:"рынок спорт и развлечения", img:img10},
        {to:'all-categories/food', title:"Рынок автомобилей и запчастей", img:img11},
        {to:'all-categories/food', title:"Детский мировой рынок", img:img12},
        {to:'all-categories/food', title:"Рынок недвижимости и рынок", img:img13},
        {to:'all-categories/food', title:"Рынок строительных материалов", img:img14},
        {to:'all-categories/food', title:"Рынок книг, журналов и статей", img:img15},
    ]

    const card = cards.map((i, index) => (
        <Link className={cx(st.card)} to={i.to} key={index}>
            <img src={i.img} alt="" className={cx(st.card_img)} />
            <p className={cx(st.card_p)}>
                {i.title}
            </p>
        </Link>
    ))

    return (
        <div className={cx(st.cat)}>
            <div className={cx('container')}>
                <h1 className={cx(st.title)}>категории</h1>
                <p className={cx(st.text)}>Выберите тот, который подходит вам лучше всего по каториями</p>
                <div className={cx(st.row)}>
                    {card}
                </div>
            </div>
        </div>
    );
}

export default Categories;