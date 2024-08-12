import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

const Footer = () => {
	return (
		<AppContext.Consumer>
			{({ user }) => (
				<div className='footer'>
					{user.isLoggedIn && (
						<p>
							<a>Contact us</a>
						</p>
					)}
					<p>
						Copyright {getFullYear()} - {getFooterCopy(true)}
					</p>
				</div>
			)}
		</AppContext.Consumer>
	);
};

export default Footer;

