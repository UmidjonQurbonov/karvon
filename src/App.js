import React, { Component } from 'react'
import './app.scss';
import { Layout } from './hoc';
import { Switch, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Home, ProductInput, Blogs, Blog, SignUp, MyBusiness, Categories, Categori, Product , Reset, Profil, ProfilChange, Entercode } from './pages'

class App extends Component {
	state = {
            
        }

	render(){
		return(
			<div className="app">
                <Switch>
                    <Layout>
                        <Route path='/' exact component={Home} />
                        <Route path='/product-input'  component={ProductInput} />
                        <Route path='/blogs/'  component={Blogs} />
                        <Route path='/blogs/:id'  component={Blog} />
                        <Route path='/my-business'  component={MyBusiness} />
                        <Route path='/sign-up' component={SignUp} />
                        <Route path='/products/:id' exact component={Product} />
                        <Route path='/all-categories'  component={Categories} />
                        <Route path='/categori'  component={Categori} />
                        <Route path='/profile' component={Profil} />
                        <Route path='/profile-change' component={ProfilChange} />
                        <Route path='/resetpassword' component={Reset}/>
                        <Route path='/entercode' component={Entercode}/>
                    </Layout>
                </Switch>
            </div>
		)
			
	}

}

export default App;
