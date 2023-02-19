/** @format */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { restaurantList } from '../../config';
import RestaurantCard from './RestaurantCard';

function filterData(searchText, restaurants) {
	const filterData = restaurants.filter((restaurant) =>
		restaurant.data.name.includes(searchText),
	);
	return filterData;
}

const Body = () => {
	const [restaurants, setRestaurants] = useState(restaurantList);

	const [searchText, setSearchText] = useState('');
	return (
		<>
			<div className='search-container'>
				<input
					type='text'
					className='search-input'
					placeholder='Search Restaurant'
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>

				<button
					className='search-btn'
					onClick={() => {
						const data = filterData(searchText, restaurants);

						setRestaurants(data);
						console.log(data);
					}}>
					🔍
				</button>
			</div>
			<div className='restaurant-List'>
				{restaurants.map((restaurant) => {
					return (
						<RestaurantCard {...restaurant.data} key={restaurant.data.id} />
					);
				})}
			</div>
		</>
	);
};

export default Body;
