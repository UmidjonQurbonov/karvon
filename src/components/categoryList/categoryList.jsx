import React, { useState } from 'react';
import st from './categoryList.module.scss';
import cl from 'classnames';
import { useEffect } from 'react';

function CategoryList({data,type, open}){

    const [visible,setVisible] = useState('');

    return(
        <div className={cl(st.categoryList, open && st.visibleCategory)}>
            <div className={cl(st.leftBar)}>
                {
                    data.map((item,index) => {
                        return(
                            <div className="w-100 p-0">
                                <a onMouseEnter={()=> setVisible(`subcategory-${index}`) } 
                                key={index} href="#" className="d-flex justify-content-between align-items-center">
                                    <span>{item.name[type]}</span> { item.children.length>0 && <i className="bx bx-chevron-right"></i> }
                                </a>
                                {
                                    item.children.length > 0 &&
                                    <div key={index} id={`subcategory-${index}`} className={cl(st.subCategory,"h-100",visible === `subcategory-${index}` && st.visibleSub)}>
                                        <div className="row bg-white py-3 h-100">
                                            {   
                                                item.children.map((subitem,subindex) => {
                                                    return( 
                                                        <div className="col-4" key={subindex}>
                                                            <a href="#" className={st.subtitleitem}>{subitem.name[type]} </a>
                                                            {
                                                                subitem.children.length>0 && 
                                                                <ul className={st.subcatListItem}>
                                                                    {
                                                                        subitem.children.map((ssitem,sindex) => {
                                                                            return(
                                                                                <li key={sindex}> <a href="#">{ssitem.name[type]}</a> </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList;