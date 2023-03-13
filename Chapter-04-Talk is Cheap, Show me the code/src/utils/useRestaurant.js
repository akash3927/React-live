/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { FETCH_MENU_URL } from '../../config';

const useRestaurant = (resId) => {
	const [restaurant, setRestaurant] = useState(null);
	const [items, setItems] = useState({});

	useEffect(() => {
		getRestaurantsInfo();
	}, []);

	async function getRestaurantsInfo() {
		const data = await fetch(FETCH_MENU_URL + resId);
		const json = await data.json();
		console.log(json.data);
		setRestaurant(json?.data?.cards[0]?.card?.card?.info);
		// console.log(json?.data?.cards[0]?.card?.card?.info?.name);
		setItems(
			json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
				?.card,
		);
		// console.log(
		// 	json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
		// 		?.card,
		// );
		// const resName = setRestaurant(json?.data?.cards[0]?.card?.card?.info?.name);
		// const resImg =
		// 	IMG_CDN_URL + json?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId;
	}

	return restaurant;
};

export default useRestaurant;
