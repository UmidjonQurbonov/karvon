import React from 'react'
import st from './sidebarNews.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'


const SidebarNews = ({img, title, avtor, sana, kSoni, to}) => {


    return (
        <div className={cx('col-12 col-sm-6 col-md-6 col-lg-12')}>
            <div className={st.card}>
                <div className={cx(st.card_header)}>
                    <img src={img} alt="" className={cx(st.card_img,'img-fluid w-100 h-100')}/>
                </div>
                <div className={cx(st.card_title)}>
                    <h1 className={cx(st.card_title_h1)}>{title}</h1>
                    <div className={cx(st.content)}>
                        <span className={cx(st.content_span)}>
                            <span className={cx(st.avtor)}>Автор:</span>{avtor}
                        </span>
                        <span className={cx(st.content_span)}>
                            {sana}
                        </span>
                        <span className={cx(st.content_span)}>
                            <i className={cx('fas fa-eye', st.eye)}></i>
                            {kSoni}
                        </span>
                    </div>
                </div>
                <div className={cx(st.text)}>
                    <p className={cx(st.text_p)}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum architecto adipisci sed? Vero, velit ipsum? Porro exercitationem totam quaerat perspiciatis culpa quod eveniet quibusdam? Itaque, deserunt? Ullam, ducimus repellendus.
                    </p>
                </div>
                <div>
                    <Link to={to} className={cx(st.link)}>
                        Читать далее...
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default SidebarNews;