import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import PageNavigation from './components/PageNavigation';

import HomePage from './routes/HomePage';
import RecipePage from './routes/RecipePage';
import ContactPage from './routes/ContactPage';
import ErrorPage from './routes/ErrorPage';
import TestingPage from './routes/TestingPage';
import TestingPage2 from './routes/TestingPage2';


const App = () => {
		return (
			<>
				<header><PageHeader /></header>
				<Router>
					<>
						<nav><PageNavigation /></nav>
							<Switch>
								<Route path='/' exact component = {HomePage} />
								<Route path='/recipes' component = {RecipePage} />
								<Route path='/contact' component = {ContactPage} />
								<Route path='/testing' component = {TestingPage} />
								<Route path='/alicia' component = {TestingPage2} />
								<Route component = {ErrorPage} />
							</Switch>
						</>
				</Router>
				<PageFooter />
			</>
		);
	}

export default App;
