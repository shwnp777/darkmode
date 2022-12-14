import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Layouts
import DashboardLayout from './components/layout/DashboardLayout';
import LandingLayout from './components/layout/LandingLayout';
// Pages
import Landing from './views/Landing';
import FirstDash from './views/dashboard/FirstDash';
import Messages from './components/dasboardSections/messages/Messages';
import GroupCategories from './components/dasboardSections/groups/GroupCategories';

const App = () => {
	return (
		<Routes>
			{/* Landing Page ===== User has not signed up on signed in */}
			<Route path='/' element={<LandingLayout />}>
				<Route index element={<Landing />} />
			</Route>
			<Route path='/user/dashboard' element={<DashboardLayout />}>
				<Route index element={<FirstDash />} />
				<Route path='messages' element={<Messages />} />
				<Route path='test' element={<GroupCategories />} />
			</Route>
		</Routes>
	);
};

export default App;
