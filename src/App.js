import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './routes/HomePage';
import RecipePage from './routes/RecipePage';
import ContactPage from './routes/ContactPage';
import ErrorPage from './routes/ErrorPage';

class App extends React.Component {
	render() {
		return (
			<Router>
				<>
				<Switch>
					<Route path='/' exact component = {HomePage} />
					<Route path='/recipes' component = {RecipePage} />
					<Route path='/contact' component = {ContactPage} />
					<Route component = {ErrorPage} />
				</Switch>
				</>
			</Router>
		);
	}
}

export default App;
