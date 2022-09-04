import React from 'react';
import Logo from '../../images/logo.png';
import ProfileIMG from '../../images/puppy.jpg';
import { IoMdSettings } from 'react-icons/io';

const Navigation = () => {
	return (
		<div className='mainNav'>
			<div className='leftNav'>
				<div className='logo'>
					<img src={Logo} alt='' />
				</div>
			</div>
			<div className='middleNav'></div>
			<div className='rightNav'>
				<div className='profile-settings'>
					<div className='profileImg'>
						<img src={ProfileIMG} alt='' />
					</div>
					<div className='settingsIcon'>
						<IoMdSettings />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
