import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Footer from '../navigation/Footer';

const LandingLayout = () => {
	return (
		<div>
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	);
};

export default LandingLayout;
