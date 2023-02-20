/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
	<img
		className='logo'
		src='https://static.takeaway.com/images/restaurants/fr/RRPR5PR1/logo_465x320.png'
		alt='logo'
	/>
);

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className='header'>
			<Title />
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
			{isLoggedIn ? (
				<button className='log-btn' onClick={() => setIsLoggedIn(false)}>
					Logout
				</button>
			) : (
				<button className='log-btn' onClick={() => setIsLoggedIn(true)}>
					Login
				</button>
			)}
		</div>
	);
};

export default Header;
