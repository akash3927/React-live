/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { IMG_CDN_URL, restaurantList } from '../../config';

const RestaurantCard = ({
	cloudinaryImageId,
	name,
	cuisines,
	avgRating,
	maxDeliveryTime,
	costForTwoString,
}) => {
	return (
		<div className='card'>
			<img src={IMG_CDN_URL + cloudinaryImageId} />
			<h2>{name}</h2>
			<h4>{cuisines?.join(',')}</h4>
			<div className='card-specifications'>
				<h5>⭐{avgRating}</h5>
				<h5>{maxDeliveryTime} min</h5>
				<h5>{costForTwoString}</h5>
			</div>
		</div>
	);
};

export default RestaurantCard;
