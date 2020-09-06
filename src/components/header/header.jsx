import React, { Component } from 'react'
import Higher from './higher/higher';
import Median from './median/median';
import Navbar from './navbar/navbar';

class index extends Component {
    constructor(props){
        super(props);

        this.state = {  }
    }


    render() {
        return (
            <div>
                <Higher/>
                <Median/>
                <Navbar/>
            </div>
        );
    }
}

export default index;