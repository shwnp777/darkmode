import React from 'react';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Metrics = () => {
	return (
		<div className='topMetrics'>
			<div className='metricDiv metricOne'>
				<div className='words'>
					<p>Profile</p>
					<p>Progress </p>
				</div>
				<div className='percent'>80%</div>
				<div className='graph'>
					<EqualizerIcon style={{ fontSize: '3.9rem' }} />
				</div>
			</div>
			<div className='metricDiv metricTwo'>
				<div className='words'>
					<p>Groups</p>
					<p>Joined</p>
				</div>
				<div className='percent'>12</div>
				<div className='graph'>
					<DonutSmallIcon style={{ fontSize: '3.9rem' }} />
				</div>
			</div>
			<div className='metricDiv metricThree'>
				<div className='words'>
					<p>Users</p>
					<p>Invited</p>
				</div>
				<div className='percent'>346</div>
				<div className='graph'>
					<TrendingUpIcon style={{ fontSize: '3.9rem' }} />
				</div>
			</div>
		</div>
	);
};

export default Metrics;
