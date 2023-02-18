/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
	<img
		className='logo'
		src='https://static.takeaway.com/images/restaurants/fr/RRPR5PR1/logo_465x320.png'
		alt='logo'
	/>
);

const HeaderComponent = () => {
	return (
		<div className='header'>
			<Title />
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const restaurantList = [
	{
		type: 'restaurant',
		data: {
			type: 'F',
			id: '200193',
			name: 'Bebe Di Rasoi - Punjabi',
			uuid: '72a41fbe-920c-43c9-983a-ae74ff0e5df7',
			city: '6',
			area: 'Senapati Bapat Road',
			totalRatingsString: '1000+ ratings',
			cloudinaryImageId: 'qwokyvfzdond2snolvzw',
			cuisines: [
				'North Indian',
				'Punjabi',
				'Biryani',
				'Kebabs',
				'Mughlai',
				'Desserts',
				'Beverages',
			],
			tags: [],
			costForTwo: 30000,
			costForTwoString: '₹300 FOR TWO',
			deliveryTime: 41,
			minDeliveryTime: 40,
			maxDeliveryTime: 50,
			slaString: '40-50 MINS',
			lastMileTravel: 3.799999952316284,
			slugs: {
				restaurant: 'bebe-di-rasoi-shivaji-nagar-shivaji-nagar',
				city: 'pune',
			},
			cityState: '6',
			address:
				'NICE Foods, ETERNIA Rooftop, Terrace Level, B Wing, MCCIA Trade Tower, Next to Pavilion Mall, SB Road, Pune ',
			locality: 'SB Road',
			parentId: 230548,
			unserviceable: false,
			veg: false,
			select: false,
			favorite: false,
			tradeCampaignHeaders: [],
			aggregatedDiscountInfo: {
				header: '50% off',
				shortDescriptionList: [
					{
						meta: '50% off | Use WELCOME50',
						discountType: 'Percentage',
						operationType: 'RESTAURANT',
					},
				],
				descriptionList: [
					{
						meta: '50% off up to ₹100 | Use code WELCOME50',
						discountType: 'Percentage',
						operationType: 'RESTAURANT',
					},
				],
				subHeader: '',
				headerType: 0,
				superFreedel: '',
			},
			aggregatedDiscountInfoV2: {
				header: '50% OFF',
				shortDescriptionList: [
					{
						meta: 'Use WELCOME50',
						discountType: 'Percentage',
						operationType: 'RESTAURANT',
					},
				],
				descriptionList: [
					{
						meta: '50% off up to ₹100 | Use code WELCOME50',
						discountType: 'Percentage',
						operationType: 'RESTAURANT',
					},
				],
				subHeader: '',
				headerType: 0,
				superFreedel: '',
			},
			ribbon: [
				{
					type: 'PROMOTED',
				},
			],
			chain: [],
			feeDetails: {
				fees: [],
				totalFees: 0,
				message: '',
				title: '',
				amount: '',
				icon: '',
			},
			availability: {
				opened: true,
				nextOpenMessage: '',
				nextCloseMessage: '',
			},
			longDistanceEnabled: 0,
			rainMode: 'NONE',
			thirdPartyAddress: false,
			thirdPartyVendor: '',
			adTrackingID: 'cid=5830537~p=1~eid=00000186-651f-0918-0e18-415e008b0126',
			badges: {
				imageBased: [],
				textBased: [],
				textExtendedBadges: [],
			},
			lastMileTravelString: '3.7 kms',
			hasSurge: false,
			sla: {
				restaurantId: '200193',
				deliveryTime: 41,
				minDeliveryTime: 40,
				maxDeliveryTime: 50,
				lastMileTravel: 3.799999952316284,
				lastMileDistance: 0,
				serviceability: 'SERVICEABLE',
				rainMode: 'NONE',
				longDistance: 'NOT_LONG_DISTANCE',
				preferentialService: false,
				iconType: 'EMPTY',
			},
			promoted: true,
			avgRating: '4.0',
			totalRatings: 1000,
			new: false,
		},
		subtype: 'basic',
	},
];

const RestaurantCard = ({ restaurant }) => {
	return (
		<div className='card'>
			<img
				src={
					'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
					restaurantList[0].data?.cloudinaryImageId
				}
			/>
			<h2>{restaurantList[0].data?.name}</h2>
			<h4>{restaurantList[0].data?.cuisines.join(' , ')}</h4>
			<div className='card-specifications'>
				<h5>⭐{restaurantList[0].data?.avgRating}</h5>
				<h5>{restaurantList[0].data?.maxDeliveryTime} min</h5>
				<h5>{restaurantList[0].data?.costForTwoString}</h5>
			</div>
		</div>
	);
};

const Body = () => {
	return (
		<div className='restaurant-List'>
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
		</div>
	);
};
const Footer = () => {
	return <h2>idea</h2>;
};
const AppLayout = () => {
	return (
		<>
			<HeaderComponent />
			<Body />
			<Footer />
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
