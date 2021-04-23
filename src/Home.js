import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RestaurantOptions from './RestaurantOptions.js';

const HomeDiv = styled.div`
	h1 {
		color: white;
		font-size: 3rem;
		text-align: center;
	}
	.linky {
		text-decoration: none;
	}

	.pizza-btn {
		border: 1px solid black;
		border-radius: 20px;
		width: 10rem;
		padding: 1rem 2rem;
		font-size: 1.5rem;
		background-color: red;
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
				<h1>Your Favorite Food, Delivered while Coding</h1>
				<Link className="linky" id="order-pizza" to="/pizza">
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
