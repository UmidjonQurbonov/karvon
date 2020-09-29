import React from 'react'
import st from './reyting_card.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const ReytingCard = (props) => {
    return (
        <div className={cx(st.card)}>
            <div className={cx(st.content)}>
                <img src={props.img} alt="" className={st.img}/>
            </div>
            <div className={cx(st.box)}>
                <h1 className={cx(st.box_h1)}>
                    { props.title }
                </h1>
                <Link to={props.to} className={cx(st.box_link)}>
                    { props.lang.lang.reedMore }
                </Link>
            </div>
        </div>
    );
}

const mstp = state => (state);

export default connect(mstp,null)(ReytingCard);