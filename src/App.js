import React from 'react';
import Footer from './components/navigation/Footer';
import Navigation from './components/navigation/Navigation';
import Benefits from './components/sections/Benefits';
import HomeHeader from './components/sections/HomeHeader';
import Meetings from './components/sections/Meetings';

const App = () => {
	return (
		<div>
			<Navigation />
			<div className='homeSections'>
				<HomeHeader />
				<Benefits />
				<Meetings />
				<Footer />
			</div>
		</div>
	);
};

export default App;
