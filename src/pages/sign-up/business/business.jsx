import React from 'react'
import st from './business.module.scss'
import cx from 'classnames'
import { useState } from 'react'

import Service from './service/service'
import Trade from './trade/trade'

const Business = () => {

    const [trade, setTrade] = useState(false);
    const [service, setService] = useState(false);

    const changeTrade = () => {
        setTrade(!trade);
        setService(false);
    }
    const changeService = () => {
        setTrade(false);
        setService(!service);
    }
    
    return (
        <div className={cx(st.business)}>
            <div className={cx('row')}>
                <div className={cx('col-md-6 my-2')}>
                    <div className={cx(st.check_box)}>
                        <input type="radio" id="savdo" name="toifaTanlash" value="savdo" className={cx(st.check)} onChange={changeTrade} />
                        <label htmlFor="savdo" className={cx(st.check_style)}></label>
                        <p className={cx(st.check_p)}>Торговля продажами</p>
                    </div>
                </div>
                <div className={cx('col-md-6 my-2')}>
                    <div className={cx(st.check_box)}>
                        <input type="radio" id="xizmat" name="toifaTanlash" value="hizmat" className={cx(st.check)} onChange={changeService} />
                        <label htmlFor="xizmat" className={cx(st.check_style)}></label>
                        <p className={cx(st.check_p)}>Сектор обслуживания</p>
                    </div>
                </div>
                <div className={cx('col-12 my-2')}>
                    {trade ? <Trade /> : null }
                    {service ? <Service /> : null }
                </div>
            </div>
        </div>
    );
}

export default Business;