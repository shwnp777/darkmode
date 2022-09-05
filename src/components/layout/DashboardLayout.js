import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

const DashboardLayout = () => {
	return (
		<div>
			<Navigation />
			<main className='mainUserDashDiv'>
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
