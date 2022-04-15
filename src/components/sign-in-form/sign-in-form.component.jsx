import React, { useState } from "react";
import { signInUserAuthWithEmailAndPassword } from "../../utils/firebase/firebase.config";

import ButtonBox from "../button-box/button-box.component";
import InputBox from "../input-box/input-box.component";
import { signInWithGoogle } from "../../utils/firebase/firebase.config";

import { BtnContainerForm } from "./sign-in-form.styles";

const SignInForm = () => {
	const [userCredentials, setUserCresentials] = useState({
		email: "",
		password: "",
	});

	const logGoogleUser = async () => {
		await signInWithGoogle();
	};

	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			await signInUserAuthWithEmailAndPassword(email, password);
		} catch (e) {
			alert("email and password doesn't match");
		}

		setUserCresentials({
			email: "",
			password: "",
		});
	};

	const handleChange = e => {
		const { value, name } = e.target;
		setUserCresentials({ ...userCredentials, [name]: value });
	};

	return (
		<div>
			<h1>Already have an account!</h1>
			<form onSubmit={handleSubmit}>
				<InputBox
					name='email'
					type='email'
					value={email}
					onChange={handleChange}>
					Email
				</InputBox>
				<InputBox
					name='password'
					type='password'
					value={password}
					onChange={handleChange}>
					Password
				</InputBox>

				<BtnContainerForm>
					<ButtonBox type='submit'>Sign In</ButtonBox>
					<ButtonBox type='button' onClick={logGoogleUser} google={true}>
						Google signin
					</ButtonBox>
				</BtnContainerForm>
			</form>
		</div>
	);
};

export default SignInForm;
