import React, {useState} from 'react'
import st from './sidebar.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [categori] = useState([
        {text:'Телефон и аксессуары', to:"/"},
        {text:'Компьютер и оргтехника', to:"/"},
        {text:'Электроника', to:"/"},
        {text:'Бытовая техника', to:'/'},
        {text:'Бижутерия и часы', to:'/'},
        {text:'Сумки и обувь', to:'/'},
        {text:'Дом и зотовари', to:'/'},
        {text:'Красота и здоровье', to:'/'},
        {text:'Спорт и развлечение', to:'/'}
    ])



    const categories = 
    categori.map((item, index) => (
        <Link to={item.to} className={cx(st.bar_link)} key={index} >
            <span className={cx(st.bar_span)}>
                {item.text}
            </span> 
            <i className={cx(st.bar_icon,'fas fa-angle-right')}></i>
        </Link>
))

    return (
        <div className={cx(st.bar)}>
            {categories}
        </div>
    );
}

export default Sidebar;