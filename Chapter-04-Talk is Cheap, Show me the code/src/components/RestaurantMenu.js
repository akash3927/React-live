/** @format */
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
	const { resId } = useParams();

	async function getRestaurantsInfo() {}
	return (
		<div>
			<h1>{resId} </h1>
		</div>
	);
};

export default RestaurantMenu;
