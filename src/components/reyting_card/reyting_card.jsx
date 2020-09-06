import React from 'react'
import st from './reyting_card.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'


const ReytingCard = ({img, to, title}) => {
    return (
        <div className={cx(st.card)}>
            <div className={cx(st.content)}>
                <img src={img} alt="" className={st.img}/>
            </div>
            <div className={cx(st.box)}>
                <h1 className={cx(st.box_h1)}>
                    {title}
                </h1>
                <Link to={to} className={cx(st.box_link)}>
                    Читать далее...
                </Link>
            </div>
        </div>
    
    );
}

export default ReytingCard;