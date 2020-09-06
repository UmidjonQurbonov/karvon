import React from 'react'
import st from './premier.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import {Sidebar} from '../../../components'


const Premier = () => {

    return (
        <div className={cx(st.premier)}>
            <div className={cx('container')}>
                <div className={cx(st.row, 'row')}>
                    <div className={cx('col-md-3 col-sm-12')}>
                        <Sidebar />
                    </div>    
                    <div className={cx(st.col,'col-sm-12 col-md-9 ')}>
                        <div className={cx(st.content)}>
                            <div className={cx(st.content_box)}>
                                <h1 className={cx(st.content_h1)}>
                                    В Узбекистане инновационный портал
                                </h1>
                                <p className={cx(st.content_p)}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla alias, architecto, dignissimos error fugit mollitia totam ad tempore quo corrupti rem in nisi asperiores?
                                </p>
                                <Link to="" className={cx(st.content_link)}>
                                    подробности
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Premier;


