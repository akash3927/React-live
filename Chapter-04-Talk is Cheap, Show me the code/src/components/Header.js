/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../utils/store';

const Title = () => (
	<Link to='/'>
		<img
			className='logo'
			src='https://static.takeaway.com/images/restaurants/fr/RRPR5PR1/logo_465x320.png'
			alt='logo'
		/>
	</Link>
);

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);
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
						<Link to='/cart'>Cart -{cartItems.length}</Link>
					</li>
					<li className='menu-li'>
						<Link to='/instamart'>instaMart</Link>
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
