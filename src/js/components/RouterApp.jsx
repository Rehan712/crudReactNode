import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import App from './App';
import StudentForm from './StudentForm'

class RouterApp extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			
				<Router>
				<div className="roterApp">
					<Switch>
						<Route path='/' component={App} />
						<Route exact path='/studentForm' component={StudentForm} />

					</Switch>
				</div>

			</Router>
			
			
		)
	}
}

export default RouterApp;