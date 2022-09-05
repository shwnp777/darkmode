import React from 'react';
import Metrics from '../../components/dasboardSections/Metrics';
import UserInfo from '../../components/dasboardSections/MainPage/InfoSection';

const FirstDash = () => {
	return (
		<div>
			<Metrics />
			<UserInfo />
		</div>
	);
};

export default FirstDash;
