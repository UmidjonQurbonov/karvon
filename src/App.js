import React, { Component } from 'react'
import './app.scss';
import { Layout } from './hoc';
import { Switch, Route } from 'react-router-dom';

import { Home, Kiritish, Blogs, Blog, Radius } from './pages'

class App extends Component {
	constructor(props){
        super(props);

        this.state = {
            
        }
	}

	render(){
		return(
			<div className="app">
                <Switch>
                    <Layout>
                        <Route path='/' exact component={Home} />
                        <Route path='/kiritish' exact component={Kiritish} />
                        <Route path='/blogs/' exact component={Blogs} />
                        <Route path='/blogs/:id' exact component={Blog} />
                        <Route path='/our-biznes' exact component={Radius} />
                    </Layout>
                </Switch>
            </div>
		)
			
	}

}

export default App;
