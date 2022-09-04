import React, { Fragment } from 'react';
import HomeHeader from '../components/sections/HomeHeader';
import Benefits from '../components/sections/Benefits';
import Meetings from '../components/sections/Meetings';

const Landing = () => {
	return (
		<Fragment>
			<HomeHeader />
			<Benefits />
			<Meetings />
		</Fragment>
	);
};

export default Landing;
