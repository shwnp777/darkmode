import React from 'react';
import Profile from '../../../images/profile.jpeg';

const Messages = () => {
	return (
		<div className='messages-div'>
			<div className='people-messaged'>
				<div className='individual-person-messaged'>
					<div className='message-person-photo'>
						<img src={Profile} alt='' />
					</div>
					<div className='message-person-details'>
						<p className='name'>Andrea Shillings</p>
					</div>
				</div>
				<div className='individual-person-messaged'>
					<div className='message-person-photo'>
						<img src={Profile} alt='' />
					</div>
					<div className='message-person-details'>
						<p className='name'>Andrea Shillings</p>
					</div>
				</div>
				<div className='individual-person-messaged'>
					<div className='message-person-photo'>
						<img src={Profile} alt='' />
					</div>
					<div className='message-person-details'>
						<p className='name'>Andrea Shillings</p>
					</div>
				</div>
				<div className='individual-person-messaged'>
					<div className='message-person-photo'>
						<img src={Profile} alt='' />
					</div>
					<div className='message-person-details'>
						<p className='name'>Andrea Shillings</p>
					</div>
				</div>
			</div>
			<div className='messages'>
				<div className='individual-messages my-message'>
					<div className='message-div'>
						<p className='message-blurb'>
							This is a message. Are you going to hike today?
						</p>
					</div>
					<div className='date-for-message'>09/04/2022 2:32pm</div>
				</div>
				<div className='individual-messages their-message'>
					<div className='message-div'>
						<p className='message-blurb'>
							This is a message. Are you going to hike today?
						</p>
					</div>
					<div className='date-for-message'>09/04/2022 2:32pm</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
