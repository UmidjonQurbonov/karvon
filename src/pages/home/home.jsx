import React, { Component } from 'react'
import './home.scss'
import Premier from './premier/premier';
import Hot from './hot/hot';
import Ekspert from './ekspert/ekspert';
import Reyting from './reyting/reyting';
import Aksiya from './aksiya/aksiya';
import Hit from './hit/hit';
import Popular from './popular/popular';
import Products from './products/products';

import {Partner} from '../../components';

class Home extends Component {

state = {}

render() {
    return (
        <div className='animate__animated animate__fadeInUp home'>
            <Premier/>
            <Hot/>
            <Ekspert/>
            <Reyting/>
            <Aksiya/>
            <Hit/>
            <Popular/>
            <Partner/>
        </div>        
    );
}

}

export default Home;