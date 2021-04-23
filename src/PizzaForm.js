import React from 'react';
import { Link } from 'react-router-dom';

export default function PizzaForm(props) {
	const { formData, submit, change } = props;

	return (
		<>
			<form id="pizza-form" onSubmit={submit}>
				<label>
					Name:
					<input
						name="name"
						id="name"
						type="text"
						placeholder="Enter Name..."
						onChange={change}
						value={formData.value}
					></input>
				</label>

				<Link to="/pizza-ordered">
					<button>Submit</button>
				</Link>
			</form>
		</>
	);
}
