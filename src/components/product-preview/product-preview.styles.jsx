import styled from "styled-components";

export const ProductPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const Title = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
	text-align: center;
	text-transform: uppercase;
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
`;
