import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from './Assets/Pizza.jpg';

const HomeDiv = styled.div`
	.main-image {
		background-image: url(${img});
		display: flex;
		flex-direction: column;
		height: 60vh;
		justify-content: center;
		align-items: center;
	}

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
`;

export default function Home(props) {
	const { formData, submit, change } = props;

	return (
		<HomeDiv>
			<div className="main-image">
				<h1>This is the Home Page</h1>
				<Link id="order-pizza" to="/pizza">
					<div className="pizza-btn">Pizza?</div>
				</Link>
			</div>
		</HomeDiv>
	);
}
