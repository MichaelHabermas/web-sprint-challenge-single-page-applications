import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RestaurantOptions from './RestaurantOptions.js';

const HomeDiv = styled.div`
	.pizza-btn {
		border: 2px solid black;
		width: 10rem;
		padding: 1rem 2rem;
		font-size: 1.5rem;
		text-decoration: none;
		background-color: white;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.bottom-home {
		padding: 1rem 5%;
	}
`;

export default function Home(props) {
	// const {  } = props;

	return (
		<HomeDiv>
			<div className="main-image">
				<h1>This is the Home Page</h1>
				<Link id="order-pizza" to="/pizza">
					<div className="pizza-btn">Pizza?</div>
				</Link>
			</div>
			<div className="bottom-home">
				<h3>Food Delivery in Gotham City</h3>
				<RestaurantOptions />
			</div>
		</HomeDiv>
	);
}
