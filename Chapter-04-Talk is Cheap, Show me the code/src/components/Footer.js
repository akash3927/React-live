/** @format */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='footer'>
			<h1 className='follow-us'>Follow Us</h1>
			<ul>
				<li>
					<FaGithub />
				</li>
				<li>
					<FaLinkedin />
				</li>
				<li>
					<FaTwitter />
				</li>
			</ul>
			<h1>Made By ❤️ AKASH</h1>
		</div>
	);
};

export default Footer;
