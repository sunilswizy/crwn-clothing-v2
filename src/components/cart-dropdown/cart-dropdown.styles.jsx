import styled from "styled-components";
import { ButtonContainer } from "../button-box/button-box.styles";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 290px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	${ButtonContainer} {
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.div`
	height: 290px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;
