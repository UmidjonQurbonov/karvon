import React, { Component } from 'react'
import './home.scss'
import Premier from './premier/premier';
import Hot from './hot/hot';
import Ekspert from './ekspert/ekspert';
import Reyting from './reyting/reyting';
import Aksiya from './aksiya/aksiya';
import Hit from './hit/hit';
import Popular from './popular/popular';

import {Partner} from '../../components';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

render() {
    return (
        <div className={'home'}>
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