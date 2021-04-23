import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header.js';
import Home from './Home.js';
import PizzaForm from './PizzaForm.js';
import ConfirmedPage from './ConfirmedPage.js';
import img from './Assets/Pizza.jpg';

const initialFormValues = {
	name: '',
	size: '',
	sauce: '',
	specialInstructions: '',
	pepperoni: false,
	sausage: false,
	canadianBacon: false,
	spicyItalianSausage: false,
	grilledChicken: false,
	onions: false,
	greenPeppers: false,
	dicedTomatoes: false,
	blackOlives: false,
	roastedGarlic: false,
	artichokeHearts: false,
	threeCheese: false,
	pineapple: false,
	extraCheese: false
};

const schema = yup.object().shape({
	name: yup.string().required('Name is required').min(2, 'Your Name must be at least 2 characters'),
	size: yup.string().required('Must choose a size'),
	sauce: yup.string().required('Must choose a sauce'),
	specialInstructions: yup.string(),
	pepperoni: yup.boolean(),
	sausage: yup.boolean(),
	canadianBacon: yup.boolean(),
	spicyItalianSausage: yup.boolean(),
	grilledChicken: yup.boolean(),
	onions: yup.boolean(),
	greenPeppers: yup.boolean(),
	dicedTomatos: yup.boolean(),
	blackOlives: yup.boolean(),
	roastedGarlic: yup.boolean(),
	artichokeHearts: yup.boolean(),
	threeCheese: yup.boolean(),
	pineapple: yup.boolean(),
	extraCheese: yup.boolean()
}); // creates the testing criteria and error messages for the form entry fields

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
		border: 1px solid black;
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
		/* border: 1px solid black; */
		box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		width: 70%;
		margin: 0 auto 5%;
	}
	.main-image {
		background-image: url(${img});
		background-position: center;
		display: flex;
		flex-direction: column;
		height: 60vh;
		justify-content: center;
		align-items: center;
	}
`;

const App = () => {
	// const [list, setList] = useState(dummyData);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [disabled, setDisabled] = useState(true); // determines if the submit button is useable
	const [errors, setErrors] = useState({
		name: '',
		size: '',
		sauce: '',
		specialInstructions: '',
		pepperoni: false,
		sausage: false,
		canadianBacon: false,
		spicyItalianSausage: false,
		grilledChicken: false,
		onions: false,
		greenPeppers: false,
		dicedTomatoes: false,
		blackOlives: false,
		roastedGarlic: false,
		artichokeHearts: false,
		threeCheese: false,
		pineapple: false,
		extraCheese: false
	}); // for the error messages to be displayed as form entry data does not meet yup criteria

	// checks for errors and displays them if conditions are not met
	const setFormErrors = (name, value) => {
		yup.reach(schema, name)
			.validate(value)
			.then(() => {
				setErrors({ ...errors, [name]: '' }); // if conditions are met replaces an error message with an empty string
			})
			.catch(err => {
				setErrors({ ...errors, [name]: err.errors[0] }); // this is just the way it needs to be. See Month 2 Week 2 Day 3 Lambda
			});
	};

	// this collects the inputs from the forms as they are entered, and prepares then for the submission process
	const changeHandler = e => {
		const { name, type, value, checked } = e.target;
		const updatedInfo = type === 'checkbox' ? checked : value;
		setFormErrors(name, updatedInfo);
		setFormValues({ ...formValues, [name]: updatedInfo });
	};

	const submit = e => {
		e.preventDefault();
		const newOrder = {
			name: '',
			size: '',
			sauce: '',
			specialInstructions: '',
			pepperoni: false,
			sausage: false,
			canadianBacon: false,
			spicyItalianSausage: false,
			grilledChicken: false,
			onions: false,
			greenPeppers: false,
			dicedTomatoes: false,
			blackOlives: false,
			roastedGarlic: false,
			artichokeHearts: false,
			threeCheese: false,
			pineapple: false,
			extraCheese: false
		};
		axios
			.post('https://reqres.in/api/orders', newOrder)
			.then(res => {
				console.log(res);
				// setUsers(res.data.data);  // what I would use if the POST request was real
				// setUsers([...users, newUser]);
				// setUsers([...res.data.data, newUser]); // useful in this instance, for demo purposes
				setFormValues(initialFormValues); // clears the form values
			})
			.catch(err => {
				console.log(err);
			});
	};

	// checks to see if all fields are valid so it mat enable the submit button
	useEffect(() => {
		schema.isValid(formValues).then(valid => setDisabled(!valid));
	}, [formValues]);

	return (
		<Appdiv>
			<Header />
			<Switch>
				<Route path="/pizza-ordered">
					<ConfirmedPage />
				</Route>
				<Route path="/pizza">
					<PizzaForm
						values={formValues}
						submit={submit}
						changeHandler={changeHandler}
						disabled={disabled}
						errors={errors}
					/>
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Appdiv>
	);
};
export default App;
