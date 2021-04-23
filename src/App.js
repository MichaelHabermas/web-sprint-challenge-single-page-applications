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
	size: '',
	sauce: '',
	specialInstructions: '',
	name: ''
};

// const dummyData = [{ name: 'Michael' }];

// const schema = yup.object().shape({
// 	name: yup.string().required('Please enter your name').min(3, 'Name needs to be 3 characters minimum')
// 	// last_name: yup.string().required('Please enter your last name').min(2, 'Name needs to be 2 characters minimum'),
// 	// email: yup.string().email('Please enter a valid email'),
// 	// password: yup.string().required('Please choose a valid password').min(8, 'Password must be 8 characters minimum'),
// 	// tos: yup.boolean().oneOf([true], 'You must agree to the Terms of Service to continue')
// }); // creates the testing criteria and error messages for the form entry fields

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
		border: 2px solid black;
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
	// const [errors, setErrors] = useState({
	// 	name: ''
	// 	// last_name: '',
	// 	// email: '',
	// 	// password: '',
	// 	// tos: false
	// }); // for the error messages to be displayed as form entry data does not meet yup criteria

	// checks for errors and displays them if conditions are not met
	// const setFormErrors = (name, value) => {
	// 	yup.reach(schema, name)
	// 		.validate(value)
	// 		.then(() => {
	// 			setErrors({ ...errors, [name]: '' }); // if conditions are met replaces an error message with an empty string
	// 		})
	// 		.catch(err => {
	// 			setErrors({ ...errors, [name]: err.errors[0] }); // this is just the way it needs to be. See Month 2 Week 2 Day 3 Lambda
	// 		});
	// };

	// this collects the inputs from the forms as they are entered, and prepares then for the submission process
	const changeHandler = e => {
		e.preventDefault();
		const { name, type, value, checked } = e.target;
		const updatedInfo = type === 'checkbox' ? checked : value;
		// setFormErrors(name, updatedInfo);
		setFormValues({ ...formValues, [name]: updatedInfo });
	};

	const submit = e => {
		e.preventDefault();
		// const newUser = {
		// 	name: formValues.first_name.trim()
		// 	// email: formValues.email.trim(),
		// 	// password: formValues.password.trim(),
		// 	// tos: formValues.first_name
		// };
		setFormValues(initialFormValues); // clears the form values
	};

	// checks to see if all fields are valid so it mat enable the submit button
	// useEffect(() => {
	// 	schema.isValid(formValues).then(valid => setDisabled(!valid));
	// }, [formValues]);

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
						// errors={errors}
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
