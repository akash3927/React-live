/** @format */

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { restaurantList } from '../../config';
import RestaurantCard from './RestaurantCard';
import ShimmerUi from './ShimmerUi';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
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
		try {
			const data = await fetch('https://skyfood.onrender.com/api/restaurants');
			const json = await data.json();
			console.log(json.data);
			setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
			setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		} catch (error) {
			console.log(error);
		}
	}

	const online = useOnline();

	if (!online) return <h1>you are offline buddy...😔</h1>;

	if (!allRestaurants) return null;
	// if (filterdRestaurants?.length === 0) return <h1>No Matches Found 😔</h1>;

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
						<Link
							to={'/restaurant/' + restaurant.data.id}
							key={restaurant.data.id}>
							<RestaurantCard {...restaurant.data} />
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Body;
