import React, { useState } from 'react'
import st from './navbar.module.scss'
import cx from 'classnames'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [shart, setShart] = useState(false);

    const links = [
        {text:'ДОМОЙ', to:'/'},
        {text:'ОНЛАЙН РЫНОК', to:'/market'},
        {text:'ОНЛАЙН-СЕРВИСЫ', to:'/service'},
        {text:'РЕЙТИНГ', to:'/rating'},
        {text:'МОЙ БИЗНЕС', to:'/my-business'},
        {text:'БЛОГ', to:'/blogs'},
        {text:'КОНТАКТЫ', to:'/contact'}
    ]

    const navItem = links.map((link, index)=>(
        <NavLink exact to={link.to} className={cx(st.nav_item)} activeClassName={cx(st.active)} key={index}>
            {link.text}
        </NavLink>
    ))

    return (
        <div className={cx(st.navbar)}>
            <div className={cx(st.row, 'container')}>
                <div className={cx(st.col)}>
                    <Link className={cx(st.categori)} to="/all-categories">
                        <span className={cx(st.categori_text)}>ВСЕ КАТЕГОРИИ</span>
                        <span className={cx(st.categori_button)}></span>
                    </Link>
                </div>
                <div className={cx(st.nav, shart ? st.show : st.closed)}>
                    <div className={st.close} onClick={() => setShart(false)}>
                        <span className={st.close_icon}>
                            &times;
                        </span>
                    </div>
                    {navItem}
                </div>
                <div className={st.toggle_button} onClick={() => setShart(true)}>
                    <i className={st.button}></i>
                </div>
            </div>
            <div className={cx(st.darkley, shart ? st.block : st.none)}  onClick={() => setShart(false)}></div>
        </div>
    );
}

export default Navbar;