import React from 'react';
import styled from 'styled-components';

const LastPage = styled.div`
	h1 {
		color: white;
		font-size: 3rem;
	}

	.doggycard {
		text-align: center;
		margin-top: 8rem;
	}
`;

export default function ConfirmedPage(props) {
	// const { thing } = props;

	return (
		<LastPage>
			<div className="main-image">
				<h1>Congrats! Pizza is on its way!</h1>
			</div>

			<div className="doggycard">
				<h3>Enjoy this dog with Pizza!</h3>
				<img src="https://media1.giphy.com/media/9fuvOqZ8tbZOU/giphy-downsized-large.gif" alt="dog and pizza" />
				>
			</div>
		</LastPage>
	);
}
