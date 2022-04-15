import React, { useState } from "react";

import InputBox from "../input-box/input-box.component";
import ButtonBox from "../button-box/button-box.component";

import {
	createUserAuthWithEmailAndPassword,
	createUserDocumenetFromAuth,
} from "../../utils/firebase/firebase.config";

const SignUpForm = () => {
	const [userCredentials, setUserCresentials] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { userName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Password and confirm password doesn't match");
			return;
		}

		try {
			const { user } = await createUserAuthWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumenetFromAuth({
				uid: user.uid,
				displayName: userName,
				email: user.email,
				photoUrl: user.photoURL,
			});
		} catch (e) {
			alert(e.message);
		}

		setUserCresentials({
			userName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	const handleChange = e => {
		const { value, name } = e.target;
		setUserCresentials({ ...userCredentials, [name]: value });
	};

	return (
		<div>
			<h1>Don't have an account?</h1>
			<form onSubmit={handleSubmit}>
				<InputBox
					onChange={handleChange}
					name='userName'
					value={userName}
					type='text'>
					Username
				</InputBox>
				<InputBox
					onChange={handleChange}
					name='email'
					value={email}
					type='email'>
					Email
				</InputBox>
				<InputBox
					onChange={handleChange}
					name='password'
					value={password}
					type='password'>
					Password
				</InputBox>
				<InputBox
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
					type='password'>
					confirm Password
				</InputBox>

				<ButtonBox type='submit'>Sign in </ButtonBox>
			</form>
		</div>
	);
};

export default SignUpForm;
