import React, { useState } from 'react'
import st from './navbar.module.scss'
import cx from 'classnames'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { CategoryList } from '../../';
import { useEffect } from 'react';


const Navbar = (props) => {
    const [shart, setShart] = useState(false);
    const [open, setOpen] = useState(false);
    const lang = props.lang.lang;
    const links = [
        {text: lang.home, to:'/'},
        {text: lang.onlineMarket, to:'/market'},
        {text:lang.onlineService, to:'/service'},
        {text:lang.rate, to:'/rating'},
        {text:lang.myBusiness, to:'/my-business'},
        {text:lang.blog, to:'/blogs'},
        {text:lang.contacts, to:'/contact'}
    ]

    const navItem = links.map((link, index)=>(
        <NavLink exact to={link.to} className={cx(st.nav_item)} activeClassName={cx(st.active)} key={index}>
            {link.text}
        </NavLink>
    ))

    return (
        <React.Fragment>
            <div className={cx(st.navbar)}>
                <div className={cx(st.row, 'container')}>
                    <div className={cx(st.col)}>
                        <Link className={cx(st.categori)} onClick={ () => setOpen(!open)}>
                            <i className={`bx bx-fw bx-${open ? "x" : "menu-alt-left"}`} style={{fontSize : "13px", marginRight : "3px"}}></i>
                            <span className={cx(st.categori_text)}> {lang.allCategori} </span>
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
            <div className={cx(st.relative)}>
                <CategoryList data={props.category} open={ open } type={props.lang.type}/>
            </div>
        </React.Fragment>
    );
}

const mstp = state => (state);

export default connect(mstp,null)(Navbar);