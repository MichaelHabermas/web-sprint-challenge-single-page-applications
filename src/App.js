import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header.js';
import Home from './Home.js';
import PizzaForm from './PizzaForm.js';
import ConfirmedPage from './ConfirmedPage.js';

const initialData = { name: '' };
const dummyData = [{ name: 'Michael' }];

const Appdiv = styled.div`
	nav {
		display: flex;
		margin: 2% 5%;
		justify-content: space-between;
	}
	.navlinks {
		display: flex;
	}
	.navlink {
		border: 2px solid black;
		width: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.homelink {
		color: white;
		background-color: black;
		text-decoration: none;
	}
	#pizza-form {
		display: flex;
		flex-direction: column;
	}
`;

const App = () => {
	const [list, setList] = useState(dummyData);
	const [formData, setFormData] = useState(initialData);

	const change = () => {
		console.log('hi');
	};
	const submit = e => {
		e.preventDefault();
		console.log('hi');
	};

	return (
		<Appdiv>
			<Header />
			<Switch>
				<Route path="/pizza-ordered">
					<ConfirmedPage />
				</Route>
				<Route path="/pizza">
					<PizzaForm submit={submit} formData={formData} change={change} />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Appdiv>
	);
};
export default App;
