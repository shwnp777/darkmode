import React from 'react';

const Meetings = () => {
	return (
		<div className='meetups'>
			<div className='meetupOne meetup'>
				<h3>Find Spots with Your Interests</h3>
				<p className='blurb'>
					It takes a village to raise a hobby. Do you love doing things but wish
					you could do them with others? Find local groups that enjoy doing the
					same things as you!
				</p>
			</div>
			<div className='meetupTwo meetup'>
				<h3>Enjoy Meeting up With Groups</h3>
				<p className='blurb'>
					Life is boring when you are living it on your own. Get out and enjoy
					it with others - it's as easy as a walk in the park.
				</p>
			</div>
			<div className='meetupThree meetup'>
				<h3>Get Lost in Conversation</h3>
				<p className='blurb'>
					Live, Love, Laugh! Enjoy learning about people in your community - or
					wherever you feel like traveling to.
				</p>
			</div>
		</div>
	);
};

export default Meetings;
