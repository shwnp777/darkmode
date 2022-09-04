import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className='footer-div'>
			<h3>Our Groups are Missing You!</h3>
			<div className='footer'>
				<div className='callToBTN'>
					<button className='btnFooter'>GET STARTED!</button>
				</div>
				<div className='callToAction'>
					<p className='closing'>
						Imagine a world where we all live in it together! Our clocks are
						ticking, our lives are fading, and memories are being made without
						us. We could die boring or live awesome, but you can't do both.
					</p>
				</div>
			</div>
			<p className='copyright'>
				Copyright © {currentYear} | All Rights Reserved{' '}
				<Link to='/'>www.reGROop.com</Link>
			</p>
		</div>
	);
};

export default Footer;
