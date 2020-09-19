import React from "react";
import s from './brendsProduct.module.scss';
import cx from "classnames";
import {NavLink} from "react-router-dom";

const BrendsProduct = ({img, link, cost}) => {

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

        var ret1 = retret.join('');
        return ret1
    }

    return (
        <div className={cx(s.brends, 'col-12')}>
            <div className={cx("row")}>
                <div className={cx("col-12")}>
                    <div className={cx(s.brends_head)}>
                        <NavLink to={link} className={cx()}>
                            <div className={cx(s.brends_body, "row")}>
                                <div className={cx(s.brands_body_logo, "col-6")}>
                                    <img className={cx('')} width={'100px'} height={'40px'}
                                         src={img} alt=""/>
                                </div>
                                <div className={cx(s.brands_body_cost, "col-6 my-4")}>
                                    {costView(cost)}
                                </div>
                            </div>

                        </NavLink>
                    </div>
                </div>
            </div>
        </div>)
};

export default BrendsProduct;