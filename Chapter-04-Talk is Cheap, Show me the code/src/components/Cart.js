/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../../config';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);
	const dispatch = useDispatch();
	handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<>
			<div>
				<div className='itemcard'>
					{cartItems?.map((item) => (
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
								</div>
							</div>
						</>
					))}
				</div>
			</div>
			<button className='clear-btn' onClick={() => handleClearCart()}>
				ClearCart
			</button>
		</>
	);
};

export default Cart;
