import React from 'react'
import st from './partner.module.scss'
import cx from 'classnames'


const Partner = () => {
    return (
       <div className={cx(st.partner)}>
           <div className={cx('container')}>
                <h1 className={cx(st.h1)}>наши партнеры</h1>
                <div className={cx(st.row)}>
                    <div className={cx(st.logo, st.logo_2)}></div>
                    <div className={cx(st.logo, st.logo_3)}></div>
                    <div className={cx(st.logo, st.logo_4)}></div>
                    <div className={cx(st.logo, st.logo_5)}></div>
                </div>
           </div>
       </div> 
    );
}

export default Partner;