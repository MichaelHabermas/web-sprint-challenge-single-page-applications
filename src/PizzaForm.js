import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.div`
	header,
	header h2 {
		text-align: center;
		background-color: red;
	}

	h1 {
		margin: 5% 5%;
	}

	h2 {
		color: white;
	}

	h3,
	h4 {
		padding: 0;
		margin: 0;
	}

	h3 {
		font-size: 1.5rem;
	}

	h4 {
		font-size: 0.8rem;
	}

	.section-label {
		background-color: red;
		color: white;
		padding: 3% 5%;
	}

	select {
		margin: 3% 5%;
		font-size: 1.3rem;
	}

	.radio-btns {
		display: flex;
		flex-direction: column;
		margin: 3% 5%;
		font-size: 1.3rem;
	}

	.checkboxes {
		display: flex;
		justify-content: space-between;
		margin: 3% 5%;
		font-size: 1.3rem;
	}

	.err {
		color: red;
		font-size: 15%;
	}

	.box-column {
		display: flex;
		flex-direction: column;
		width: 50%;
	}
	.box-column input {
		margin: 3% 5%;
	}

	#specialInstructions {
		margin: 3% 5%;
		width: 80%;
	}

	.name-section {
		margin: 3% 5%;
		font-size: 1.3rem;
	}

	.link-btn {
		margin: 1.5rem auto;
	}
	.sub-btn {
		justify-content: center;
		padding: 1rem 2rem;
		font-size: 1.5rem;
		border-radius: 20px;
		background-color: lightgreen;
	}

	input {
		top: auto;
		/* position: fixed; */
	}
`;

export default function PizzaForm(props) {
	const { submit, changeHandler, values, disabled, errors } = props;

	return (
		<Form>
			<form id="pizza-form">
				<header>
					<h2>Build Your Own Pizza</h2>
					<div className="main-image"></div>
				</header>
				<h1>Build Your Own Pizza</h1>
				<div>
					<div className="section-label">
						<h3>Choice of Size</h3>
						<h4>Required</h4>
					</div>
					<select id="size-dropdown" onChange={changeHandler} value={values.size} name="size">
						<option value="">Select</option>
						<option value="Small">Small - 10"</option>
						<option value="Medium">Medium - 14"</option>
						<option value="Large">Large - 20"</option>
						<option value="HomeWrecker">HomeWrecker - 30"</option>
					</select>
				</div>

				<div>
					<div className="section-label">
						<h3>Choice of Sauce</h3>
						<h4>Required</h4>
					</div>
					<div className="radio-btns">
						<label>
							<input
								name="sauce"
								type="radio"
								onChange={changeHandler}
								checked={values.sauce === 'OriginalRed'}
								value="OriginalRed"
							/>{' '}
							Original Red
						</label>
						<label>
							<input
								name="sauce"
								type="radio"
								onChange={changeHandler}
								checked={values.sauce === 'GarlicRanch'}
								value="GarlicRanch"
							/>{' '}
							Garlic Ranch
						</label>
						<label>
							<input
								name="sauce"
								type="radio"
								id="BBQSauce"
								onChange={changeHandler}
								checked={values.sauce === 'BBQSauce'}
								value="BBQSauce"
							/>{' '}
							BBQ Sauce
						</label>
						<label>
							<input
								name="sauce"
								type="radio"
								id="SpinachAlfredo"
								onChange={changeHandler}
								checked={values.sauce === 'SpinachAlfredo'}
								value="SpinachAlfredo"
							/>{' '}
							Spinach Alfredo
						</label>
					</div>
				</div>

				<div>
					<div className="section-label">
						<h3>Add Toppings</h3>
						<h4>Choose as Many as you Like. Go crazy, ya Freakin' Animal.</h4>
					</div>
					<div className="checkboxes">
						<div className="leftboxes box-column">
							<label>
								<input
									name="pepperoni"
									id="pepperoni"
									type="checkbox"
									onChange={changeHandler}
									checked={values.pepperoni}
								/>{' '}
								Pepperoni
							</label>
							<label>
								<input
									name="sausage"
									id="sausage"
									type="checkbox"
									onChange={changeHandler}
									checked={values.sausage}
								/>{' '}
								Sausage
							</label>
							<label>
								<input
									name="canadianBacon"
									id="canadianBacon"
									type="checkbox"
									onChange={changeHandler}
									checked={values.canadianBacon}
								/>{' '}
								Canadian Bacon
							</label>
							<label>
								<input
									name="spicyItalianSausage"
									id="spicyItalianSausage"
									type="checkbox"
									onChange={changeHandler}
									checked={values.spicyItalianSausage}
								/>{' '}
								Spicy Italian Sausage
							</label>
							<label>
								<input
									name="grilledChicken"
									id="grilledChicken"
									type="checkbox"
									onChange={changeHandler}
									checked={values.grilledChicken}
								/>{' '}
								Grilled Chicken
							</label>
							<label>
								<input
									name="onions"
									id="onions"
									type="checkbox"
									onChange={changeHandler}
									checked={values.onions}
								/>{' '}
								Onions
							</label>
							<label>
								<input
									name="greenPepper"
									id="greenPepper"
									type="checkbox"
									onChange={changeHandler}
									checked={values.greenPepper}
								/>{' '}
								Green Pepper
							</label>
						</div>

						<div className="rightboxes box-column">
							<label>
								<input
									name="dicedTomatos"
									id="dicedTomatos"
									type="checkbox"
									onChange={changeHandler}
									checked={values.dicedTomatos}
								/>{' '}
								Diced Tomatos
							</label>
							<label>
								<input
									name="blackOlives"
									id="blackOlives"
									type="checkbox"
									onChange={changeHandler}
									checked={values.blackOlives}
								/>{' '}
								Black Olives
							</label>
							<label>
								<input
									name="roastedGarlic"
									id="roastedGarlic"
									type="checkbox"
									onChange={changeHandler}
									checked={values.roastedGarlic}
								/>{' '}
								Roasted Garlic
							</label>
							<label>
								<input
									name="artichokeHearts"
									id="artichokeHearts"
									type="checkbox"
									onChange={changeHandler}
									checked={values.artichokeHearts}
								/>{' '}
								Artichoke Hearts
							</label>
							<label>
								<input
									name="threeCheese"
									id="threeCheese"
									type="checkbox"
									onChange={changeHandler}
									checked={values.threeCheese}
								/>{' '}
								Three Cheese
							</label>
							<label>
								<input
									name="pineapple"
									id="pineapple"
									type="checkbox"
									onChange={changeHandler}
									checked={values.pineapple}
								/>{' '}
								Pineapple
							</label>
							<label>
								<input
									name="extraCheese"
									id="extraCheese"
									type="checkbox"
									onChange={changeHandler}
									checked={values.extraCheese}
								/>{' '}
								Extra Cheese
							</label>
						</div>
					</div>
				</div>

				<div className="err">{errors.specialInstructions}</div>
				<div>
					<div className="section-label">
						<h3>Special Instructions</h3>
					</div>
					<div className="name-section">
						<input
							name="specialInstructions"
							id="special-text"
							type="text"
							placeholder="Is there anything else you'd like to add?"
							onChange={changeHandler}
							value={values.specialInstructions}
						/>
					</div>
				</div>

				<div className="err">{errors.name}</div>
				<div>
					<div className="section-label">
						<h3>Personal Details</h3>
						<h4>Required</h4>
					</div>
					<div className="name-section">
						<label htmlFor="name">
							Name:
							<input
								name="name"
								id="name-input"
								type="text"
								placeholder="Enter Name..."
								onChange={changeHandler}
								value={values.name}
							/>
						</label>
					</div>
				</div>

				<Link className="link-btn" to="/pizza-ordered">
					<button onClick={submit} id="order-button" className="sub-btn" disabled={disabled}>
						Submit Order
					</button>
				</Link>
			</form>
		</Form>
	);
}
