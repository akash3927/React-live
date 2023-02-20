/** @format */

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { restaurantList } from '../../config';
import RestaurantCard from './RestaurantCard';
import ShimmerUi from './ShimmerUi';

function filterData(searchText, restaurants) {
	const filterData = restaurants.filter((restaurant) =>
		restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()),
	);
	return filterData;
}

const Body = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filterdRestaurants, setFilterdRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		getRestaurants();
	}, []);

	async function getRestaurants() {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING',
		);
		const json = await data.json();
		console.log(json);
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}

	if (!allRestaurants) return null;
	if (filterdRestaurants?.length === 0) return <h1>No Matches Found 😔</h1>;

	return allRestaurants.length === 0 ? (
		<ShimmerUi />
	) : (
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
						const data = filterData(searchText, allRestaurants);

						setFilterdRestaurants(data);
					}}>
					🔍
				</button>
			</div>
			<div className='restaurant-List'>
				{filterdRestaurants.map((restaurant) => {
					return (
						<RestaurantCard {...restaurant.data} key={restaurant.data.id} />
					);
				})}
			</div>
		</>
	);
};

export default Body;