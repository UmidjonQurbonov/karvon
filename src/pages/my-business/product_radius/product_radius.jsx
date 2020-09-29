import React from "react";
import st from './product_radius.module.scss'
import cx from 'classnames'

const ProductRadius = (props) => {

    const rateSolve = (rate) => {
        let arr = [];
        for(var i=0;i<rate;i++){
            arr.push(i)
        }
        return (
                <div className={cx('col-7 text-center ml-3', st.rate)}>
                    {
                        arr.map(item => {
                            return(
                                <i key={item} className={cx('fas fa-star')}></i>
                            )
                        })
                    }
                </div>
            )
        }

    const costView = (cost) => {

        let cnum = cost.toString();
        var clone = [];
        for (let i = cnum.length - 1; i >= 0; i--) {
            clone.push(cnum.charAt(i))
        }
        var ppp = cnum.length / 3;

        let ret = [];
        var retret = [];
        for (let i = 0; i < clone.length + ppp; i++) {

            if (i % 3 === 0 && i>0) {
                ret.push(' ');
                ret.push(clone[i])
            } else {
                ret.push(clone[i])
            }
        }
        for (var i = ret.length - 1; i >= 0; i--) {
            retret.push(ret[i])
        }

        let ret1 = retret.join('');
        return ret1
    };

    return (
        <div className={cx('col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12', st.product)}>
            <div className={cx(st.card, 'text-center')}>
                <div className={cx(st.card_img)}>
                    <img src={props.img} alt={`product_${props.title}`}
                         className={cx('img-fluid w-100 h-100')}/>
                    <a className={cx(st.card_link)} href="#">Быстрый просмотр</a>
                </div>
                <div className={cx(st.product_body, 'p-md-2')}>
                    <div className={cx(st.product_rate, 'row px-1 my-2')}>
                        <div className={cx('col-2', st.heart)}>
                            <button className={cx(st.button)}>
                                <i className={cx('fas fa-heart')}></i></button>
                        </div>
                        {rateSolve(props.rate)}
                        <div className={cx('col-2 ml-sm-4 ml-md-0', st.share)}>
                            <button className={cx(st.button)}>
                                <i className={cx('fas fa-share-alt')}></i>
                            </button>
                        </div>
                    </div>
                    <div className={cx(st.product_body_title)}>
                        {props.title}
                    </div>
                    <div className={cx(st.product_body_cost, 'mt-2 mb-4')}>
                        {costView(props.cost)} сум
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductRadius;