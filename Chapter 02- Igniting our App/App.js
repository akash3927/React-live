/** @format */
/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
	'h1',
	{
		id: 'title',
	},
	'Heading 1 for parcel',
);

const heading2 = React.createElement(
	'h2',
	{
		id: 'title',
	},
	'Heading 2',
);

const container = React.createElement(
	'div',
	{
		id: 'container',
		hello: 'world',
	},
	[heading, heading2],
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside the root
