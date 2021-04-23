import React, { useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

const initialData = { name: '' };
const dummyData = [{ name: 'Michael' }];

const Formdiv = styled.div`
	padding: 5%;
	margin: 5%;
	border-radius: 20px;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
`;

const App = () => {
	const [list, setList] = useState(dummyData);
	const [formData, setFormData] = useState(initialData);

	const change = () => {
		console.log('hi');
	};
	const submit = () => {
		console.log('hi');
	};
	return (
		<>
			<h1>Lambda Eats</h1>
			<p>You can remove this code and create your own header</p>
		</>
	);
};
export default App;
