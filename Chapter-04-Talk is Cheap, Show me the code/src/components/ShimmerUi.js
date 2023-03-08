/** @format */

const ShimmerUi = () => {
	return (
		<div className='restaurant-shimmer'>
			{Array(10)
				.fill('')
				.map((e) => (
					<div className='shimmer-card'>
						<div className='shimmer-img'></div>
						<div className='shimmer-name'></div>
						<div className='shimmer-cuisines'></div>
						<div className='shimmer-specifications'></div>
					</div>
				))}
		</div>
	);
};
export default ShimmerUi;
