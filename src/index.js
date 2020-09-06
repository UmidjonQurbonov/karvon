import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom'

const Application = (
	<BrowserRouter>
		<App/>
	</BrowserRouter>
)

ReactDOM.render( Application , document.getElementById('root'));

