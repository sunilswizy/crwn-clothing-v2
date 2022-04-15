import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { SignInUpContainer } from "./authentication.styles";

const Authentication = () => {
	return (
		<SignInUpContainer>
			<SignInForm />
			<SignUpForm />
		</SignInUpContainer>
	);
};

export default Authentication;
