import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

const DashboardLayout = () => {
	return (
		<div>
			<Navigation />
			<Outlet />
		</div>
	);
};

export default DashboardLayout;
