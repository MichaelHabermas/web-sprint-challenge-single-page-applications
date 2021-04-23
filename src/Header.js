import React from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<nav>
				<h2>Lambda Eats</h2>
				<div className="navlinks">
					<Link className="navlink homelink" to="/">
						<div className="navlink homelink">Home</div>
					</Link>
					<div className="navlink">Help</div>
				</div>
			</nav>
		</header>
	);
}
