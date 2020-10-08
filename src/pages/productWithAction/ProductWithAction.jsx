import React , { useState , useEffect } from 'react';
import st from './productWithAction.scss';
import { connect } from 'react-redux';

function ProductWithAction(props){
    useEffect(()=>{
        console.log(props.match.params.id);
    })
    return(
        <h1>Product With Action Page</h1>
    )
}

const mstp = state => (state);

export default connect(mstp,null)(ProductWithAction);