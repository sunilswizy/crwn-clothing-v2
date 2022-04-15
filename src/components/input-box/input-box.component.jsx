import { GroupContainer, FormInput, FormInputLabel } from "./input-box.styles";

const InputBox = ({ children, ...others }) => {
	return (
		<GroupContainer>
			<FormInput {...others} />
			<FormInputLabel shrink={others.value.length}>{children}</FormInputLabel>
		</GroupContainer>
	);
};

export default InputBox;
