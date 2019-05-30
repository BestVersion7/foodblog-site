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
import VideoPage from './routes/VideoPage';
import ProjectsPage from './routes/ProjectsPage';


const App = () => {
		return (
			<>
				<PageHeader />
				<Router>
					<>
						<PageNavigation />
						<div style={{'height':'2em'}}></div>
							<Switch>
								<Route path='/' exact component = {HomePage} />
								<Route path='/recipes' component = {RecipePage} />
								<Route path='/contact' component = {ContactPage} />
								<Route path='/videos' component = {VideoPage} />
								<Route path='/testing' component = {TestingPage} />
								<Route path='/projects' component = {ProjectsPage} />
								<Route component = {ErrorPage} />
							</Switch>
						</>
				</Router>
				<PageFooter />
			</>
		);
	}

export default App;
