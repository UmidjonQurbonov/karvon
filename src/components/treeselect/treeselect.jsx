import React, { useState , useEffect } from 'react';
import cl from 'classnames';
import st from './treeselect.module.scss';

function TreeSelect({data , onChange ,placeholder , id }){

    const [open , setOpen] = useState(false);
    const [selected , setSelected] = useState(placeholder);
    return(
        <div className={cl(st.treeselect)} id={id} onFocus={() => setOpen(true)}>
            <div onClick={() => setOpen(!open)} className={cl(st.treeselect_placeholder,open && st.focused)}> {selected} <i className={`bx bx-chevron-${open ? "up" : "down"}`}></i></div>
            <div className={st.relative}>
                {
                    open && 
                        <ul className={cl(st.treeselect_menu )}>
                            <MakeMenu order={0} data={data} onSelect={ (text,val) => {
                                setSelected(text);
                                onChange(val);
                            }}/>
                        </ul>
                }
            </div>
        </div>
    )
}


function MakeMenu({data , onSelect ,order}){
    
    return(
        data.map((item,index) => {
            return (
            <li key={index}>
                <div onClick={ () => {
                    onSelect(item.name.uz, item._id);
                }} className={ cl(st.treeselect_menu_label,'catLabel') }>
                    { item.children && order<2 && item.children.length > 0 && <i className="bx bx-plus" data-toggle="collapse" data-target={`#child-${index}${order}`}></i> } 
                    <span> {item.name.uz} </span>
                </div>
                {
                    item.children && item.children.length>0 && order<2 && 
                    <ul className="collapse" id={`child-${index}${order}`}>
                        <MakeMenu onSelect={onSelect} data={item.children} order={order+1}/>
                    </ul>
                }
            </li>
            )
        })
    )
}



export default TreeSelect;