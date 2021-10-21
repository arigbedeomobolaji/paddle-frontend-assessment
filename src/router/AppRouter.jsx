// jshint ignore:start

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Homepage from '../views/Homepage';

const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/homepage' component={Homepage} exact />
			</Switch>
			<Footer />
		</Router>
	);
};

export default AppRouter;
