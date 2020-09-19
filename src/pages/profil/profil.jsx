import React from 'react'
import st from './profil.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import img from '../../img/avatar.svg'

const Profil = () => {

    const links = [
        {to: "", title:"Shahsiy ma'lumotlar", icon: "fa fa-user"},
        {to: "", title:"Muddatli to'lov uchun", icon: "far fa-credit-card"},
        {to: "", title:"Mening buyurtmalarim", icon: "fa fa-cube"},
        {to: "", title:"Manzil", icon: "fas fa-map-marker-alt"},
        {to: "", title:"Tanlangan mahsulotlar", icon: "far fa-star"},
        {to: "", title:"Eslatmalar", icon: "far fa-bell"}
    ]

    const malumot = [
        {title: "Ism", text:"Xurshid"},
        {title: "Familiya", text:"Ismatov"},
        {title: "Email", text:"student@gmail.com"},
        {title: "Telefon", text:"+998900559791"},
        {title: "Tug'ilgan sana", text:"1996.08.25"},
        {title: "Manzil", text:"Farg'ona viloyati Uchko'prik tumani"},
    ]

    const barLink = links.map((i, index) => (
        <Link to={i.to} className={cx(st.bar_link)} key={index}>
            <i className={cx(st.bar_link_icon, i.icon)}></i>
            <span>
                {i.title}
            </span>
        </Link>
    ))

    const malumotlar = malumot.map((i, index) => (
        <li className={cx(st.li)} key={index} >
            <span className={cx(st.span_left)}>{ i.title }:</span>
            <span className={cx(st.span_right, 'text-truncate')}>{ i.text }</span>
        </li>
    ))

    return (
        <div className={cx(st.profil)}>
            <div className={cx('container')}>
                <div className={cx(st.profil_card)}>
                    <div className={cx(st.header)}>
                        <h1 className={cx(st.header_title)}>profilni o'zgartirish</h1>
                        <input type="submit" className={cx(st.header_button)} value="O'zgartirish" />
                    </div>
                    <div className={cx(st.pro)}>
                        <div className={cx(st.bar)}>
                            { barLink }
                        </div>
                        <div className={cx(st.box)}>
                            <div className={cx(st.box_img)}>
                                <img src={img} alt="" className={cx(st.box_img_img)} />
                            </div>
                            <div className={cx(st.box_content)}>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-6')}>
                                        <ul className={cx(st.ul)}>
                                            { malumotlar }
                                        </ul>
                                    </div>
                                    <div className={cx('col-lg-6')}>
                                        <div className={cx(st.copied)}>
                                            <p className={cx(st.copied_p)}>Do'stlaringizni taklif qiling va bonuslarga ega bo'ling!</p>
                                            <div className={cx('input-group')}>
                                                <input type="text" value="https://karvon.uz/user/refeal/20112" className={cx('form-control', st.copied_input)} />
                                                <button className={cx(st.copied_button, 'input-group-append')}>
                                                    <i className={cx('far fa-copy', st.copied_icon)}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;