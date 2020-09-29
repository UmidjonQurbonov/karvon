import React, { Component } from 'react'
import './app.scss';
import { Layout } from './hoc';
import { Switch, Route } from 'react-router-dom';
import './fonts.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { connect } from 'react-redux';
import { categoryActions } from './redux/actions';
import { categoryApi } from './service/categoryService';
import { Loader } from './components'

import { Home, ProductInput, Blogs, Blog, SignUp, MyBusiness, Categories, Categori, Product , Reset, Profil, ProfilChange, Entercode , CreateStore} from './pages'

class App extends Component {
	state = {
            isRequest : true
        }
    componentDidMount(){
        categoryApi.getCategory()
            .then( res => {
                this.props.setCategory(res.data.categoryList)
                this.setState({ isRequest : false });
            })
    }

	render(){
        if(this.state.isRequest){
            return(
                <div style={{position : "relative" , width : "100%", height: "100vh"}}>
                    <Loader/>
                </div>

            )
        }else{
            return(
                <div className="app">
                    <Switch>
                        <Layout>
                            <Route exact path='/' exact component={Home} />
                            <Route exact path='/product-input'  component={ProductInput} />
                            <Route exact path='/blogs/'  component={Blogs} />
                            <Route exact path='/blogs/:id'  component={Blog} />
                            <Route exact path='/my-business'  component={MyBusiness} />
                            <Route exact path='/sign-up' component={SignUp} />
                            <Route exact path='/products/:id' exact component={Product} />
                            <Route exact path='/all-categories'  component={Categories} />
                            <Route exact path='/categori'  component={Categori} />
                            <Route exact path='/profile' component={ Profil } />
                            <Route exact path='/profile/edit' component={ProfilChange} />
                            <Route exact path='/resetpassword' component={Reset}/>
                            <Route exact path='/entercode' component={Entercode}/>
                            <Route exact path='/profile/createStore' component={ CreateStore }/>
                        </Layout>
                    </Switch>
                </div>
            )
		}	
	}

}

const mstp = state => (state);

const mdtp = dispatch => ({
    setCategory : (data) => {
        dispatch({ type : "setCategory" , payload : data })
    }
})
export default connect(mstp,mdtp)(App);
