/** @format */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import { FETCH_MENU_URL, IMG_CDN_URL } from '../../config';
import { addItem } from '../utils/cartSlice';
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
	const dispatch = useDispatch();
	const addFoodItem = (item) => {
		dispatch(addItem(item));
	};

	return !restaurant ? (
		<ShimmerUi />
	) : (
		<>
			<div className='menu-card'>
				<div className='restrau-details'>
					<h1>{restaurant.name}</h1>
					<h1>{restaurant.city + ',' + restaurant.locality}</h1>
					<h1 className>{restaurant.avgRating}⭐</h1>
					<h1>{restaurant.totalRatingsString}</h1>
				</div>
				<img
					className='restrau-image'
					src={IMG_CDN_URL + restaurant.cloudinaryImageId}
				/>
			</div>
			<div className='itemcard'>
				{items?.itemCards?.map((item) => (
					<>
						<div className='itembox'>
							<div className='item-details'>
								<h1>{item?.card?.info?.name}</h1>
								<h1>{item?.card?.info?.category}</h1>
								<h1>Rs.{item?.card?.info?.price / 100 + '.00'}</h1>
								<p>{item?.card?.info?.description}</p>
							</div>
							<div className='itemimg'>
								<img
									className='item-img'
									src={IMG_CDN_URL + item?.card?.info?.imageId}
								/>
								<button onClick={() => addFoodItem(item)} className='item-btn'>
									ADD
								</button>
							</div>
						</div>
					</>
				))}
			</div>
		</>
	);
};

export default RestaurantMenu;
