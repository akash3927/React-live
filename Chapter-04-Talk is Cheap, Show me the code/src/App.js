/** @format */

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
// import Body from './components/Body';
import Footer from './components/Footer';
import RestaurantCard from './components/RestaurantCard';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import ShimmerUi from './components/ShimmerUi';
// import Instamart from './components/instaMart';

const Instamart = lazy(() => import('./components/Instamart'));

const AppLayout = () => {
	return (
		<>
			<Header />
			{/* <Body /> */}
			<Outlet />
			<Footer />
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/restaurant/:resId',
				element: <RestaurantMenu />,
			},
			{
				path: '/instamart',
				element: (
					<Suspense fallback={<ShimmerUi />}>
						<Instamart />
					</Suspense>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
