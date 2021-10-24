// jshint ignore:start

import React from 'react';
import Showcase from './Showcase';
import AppInfo from './AppInfo';
import Features from './Features';
import ChoosePlan from './ChoosePlan';
import GettingStarted from './GettingStarted';
import Testimonies from './Testimonies';
import Subscribe from './Subscribe';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
	return (
		<>
			<Showcase />
			<AppInfo />
			<Features />
			<ChoosePlan />
			<GettingStarted />
			<Testimonies />
			<Subscribe />
			<Footer />
		</>
	);
};

export default HomePage;
