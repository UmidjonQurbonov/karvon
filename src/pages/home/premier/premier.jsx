import React from 'react'
import st from './premier.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import {Sidebar} from '../../../components'
import { connect } from 'react-redux';

const Premier = (props) => {

    return (
        <div className={cx(st.premier)}>
            <div className={cx('container')}>
                <div className={cx(st.row, 'row')}>   
                    <div className={cx(st.col,'col-sm-12')}>
                        <div className={cx(st.content)}>
                            <div className={cx(st.content_box)}>
                                <h1 className={cx(st.content_h1)}>
                                    В Узбекистане инновационный портал
                                </h1>
                                <p className={cx(st.content_p)}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla alias, architecto, dignissimos error fugit mollitia totam ad tempore quo corrupti rem in nisi asperiores?
                                </p>
                                <Link to="" className={cx(st.content_link)}>
                                    { props.lang.lang.details }
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mstp = state => (state);

export default connect(mstp,null)(Premier);