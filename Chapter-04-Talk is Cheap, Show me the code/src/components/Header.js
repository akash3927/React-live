/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

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
					<li className='menu-li'>
						<Link to='/'>Home</Link>
					</li>
					<li className='menu-li'>
						<Link to='/about'>About</Link>
					</li>
					<li className='menu-li'>
						<Link to='/contact'>Contact</Link>
					</li>
					<li className='menu-li'>
						<Link>Cart</Link>
					</li>
					{isLoggedIn ? (
						<button className='log-btn' onClick={() => setIsLoggedIn(false)}>
							Logout
						</button>
					) : (
						<button className='log-btn' onClick={() => setIsLoggedIn(true)}>
							Login
						</button>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Header;
