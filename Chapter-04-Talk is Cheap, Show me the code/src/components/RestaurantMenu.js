/** @format */
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { FETCH_MENU_URL, IMG_CDN_URL } from '../../config';
// import useRestaurant from '../utils/useRestaurant';
import ShimmerUi from './ShimmerUi';

const RestaurantMenu = () => {
	const { resId } = useParams();

	// const restaurant = useRestaurant(resId);
	// const items = useRestaurant(resId);
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
		// 	// console.log(
		// 	// 	json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
		// 	// 		?.card,
		// 	// );
		// 	// const resName = setRestaurant(json?.data?.cards[0]?.card?.card?.info?.name);
		// 	// const resImg =
		// 	// 	IMG_CDN_URL + json?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId;
	}

	return !restaurant ? (
		<ShimmerUi />
	) : (
		<div>
			<h1>{restaurant.name}</h1>
			<img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
			<div>
				<ul>
					{items?.itemCards?.map((item) => (
						<li>{item?.card?.info?.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
