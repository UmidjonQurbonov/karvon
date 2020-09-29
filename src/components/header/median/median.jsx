import React, {useState} from 'react'
import st from './median.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import headset from '../../../img/headset.svg'


const Median = (props) => {
    const [value, setValue] = useState('All categories');
    const [categori, setCategori] = useState([
        {value: 'Phones and accessories'},
        {value: 'Computers and office equipment'}
    ]);

    const list = categori.map((item, index) => (
        <li className={cx(st.li)} onClick={() => setValue(item.value)} key={index}>
            <p className={cx(st.p, 'text-truncate')}>
                {item.value}   
            </p>
        </li>
    ));

    const lang = props.lang.lang;

    return (
        <div className={cx(st.median)}>
            <div className={cx('container', st.row)}>
                <div className={cx(st.logo_content)}>
                    <Link className={cx(st.logo)} to='/'>
                        Karvon
                    </Link>
                </div>
                <div className={cx(st.search_content)}>
                    
                    <div className={cx(st.form_group)}>
                        <div className={cx('input-group')}>
                            <input type="text" placeholder={ lang.search } className={cx(st.input, 'form-control')} required />
                            <div className={cx('input-group-append')}>
                                <div className={cx(st.select)}>
                                    <div className={cx(st.selected)}>
                                        <span className={cx(st.selected_text,'text-truncate')}>{value}</span> 
                                        <i className={cx('fas fa-caret-down d-inline-block')}></i>
                                    </div>
                                    <ul className={cx(st.ul)}>
                                        {list}
                                    </ul>
                                </div>
                                <div className={cx(st.search)}>
                                    <i className={cx('fas fa-search')}></i>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={cx(st.tools)}>
                        <figure>
                            <Link>
                                <img src={require('../../../img/tag.svg')} alt=""/>
                                <figcaption> {lang.wishList} </figcaption>
                            </Link>
                        </figure>
                        <figure>
                            <Link>
                                <img src={require('../../../img/cart.svg')} />
                                <figcaption> {lang.cart} </figcaption>
                            </Link>
                        </figure>
                    </div>
                </div>

            </div>
        </div>

    );
}

const mstp = state => (state);

export default connect(mstp,null)(Median);