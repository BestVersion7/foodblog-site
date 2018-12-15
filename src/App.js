import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';

import HomePage from './routes/HomePage';
import RecipePage from './routes/RecipePage';
import ContactPage from './routes/ContactPage';
import ErrorPage from './routes/ErrorPage';
import TestingPage from './routes/TestingPage';

const App = () => {
		return (
			<div>
				<PageHeader />
				<Router>
					<Switch>
						<Route path='/' exact component = {HomePage} />
						<Route path='/recipes' component = {RecipePage} />
						<Route path='/contact' component = {ContactPage} />
						<Route path='/testing' component = {TestingPage} />
						<Route component = {ErrorPage} />
					</Switch>
				</Router>
				<PageFooter />
			</div>
		);
	}

export default App;
