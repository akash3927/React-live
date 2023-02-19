/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
// import Body from './components/Body';
import Footer from './components/Footer';
import RestaurantCard from './components/RestaurantCard';
import Body from './components/Body';

// const Body = () => {
// 	return (
// 		<div className='restaurant-List'>
// 			<RestaurantCard />
// 			<RestaurantCard />
// 			<RestaurantCard />
// 			<RestaurantCard />
// 			<RestaurantCard />
// 			<RestaurantCard />
// 			<RestaurantCard />
// 			<RestaurantCard />
// 			<RestaurantCard />
// 			<RestaurantCard />
// 		</div>
// 	);
// };

const AppLayout = () => {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
