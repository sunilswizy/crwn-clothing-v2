import { ButtonContainer } from "./button-box.styles";

const ButtonBox = ({ children, ...props }) => {
	return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default ButtonBox;
