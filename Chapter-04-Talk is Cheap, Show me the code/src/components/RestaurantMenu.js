/** @format */
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
	const { resId } = useParams();

	useEffect(() => {
		getRestaurantsInfo();
	}, []);

	async function getRestaurantsInfo() {
		const data = await fetch(
			'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=379100',
		);
		const json = await data.json();
		console.log(json);
	}

	return (
		<div>
			<h1>{resId} </h1>
		</div>
	);
};

export default RestaurantMenu;
