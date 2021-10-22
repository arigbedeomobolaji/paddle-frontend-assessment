// jshint ignore:start

import React from 'react';
import Showcase from './Showcase';
import AppInfo from './AppInfo';
import Features from './Features';
import ChoosePlan from './ChoosePlan';
import GettingStarted from './GettingStarted';

const HomePage = () => {
	return (
		<>
			<Showcase />
			<AppInfo />
			<Features />
			<ChoosePlan />
			<GettingStarted />
		</>
	);
};

export default HomePage;
