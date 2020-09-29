import React, { Component } from 'react'
import Higher from './higher/higher';
import Median from './median/median';
import Navbar from './navbar/navbar';
import cl from 'classnames';
import st from './header.module.scss';

class index extends Component {

    state = {
        onTop : false
    }

    componentDidMount(){
        window.pageYOffset > 100 ? this.setState({ onTop : true }) : this.setState({ onTop : false });
        window.addEventListener("scroll" , () => {
            window.pageYOffset > 100 ? this.setState({ onTop : true }) : this.setState({ onTop : false });
        })
    }

    render() {
        return (
            <div>
                <Higher/>
                <Median/>
                <Navbar/>
                <button onClick={() => window.scrollTo({top : 0 , left : 0})} className={cl(st.backToTop , this.state.onTop && st. visible)}> <i className="fa fa-fw fa-chevron-up"></i> </button>
            </div>
        );
    }
}

export default index;