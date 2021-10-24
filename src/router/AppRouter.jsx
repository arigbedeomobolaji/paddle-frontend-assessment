// jshint ignore:start

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Homepage from '../views/Homepage/Homepage';
import Github from '../views/Github/Github';

const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/homepage' component={Homepage} exact />
				<Route path='/github' component={Github} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
