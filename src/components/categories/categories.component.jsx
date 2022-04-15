import React from "react";
import { useNavigate } from "react-router-dom";

import {
	CategoryContainer,
	BackgroundImage,
	CategoryContainerBody,
} from "./categories.styles";

const CategoriesItem = ({ title, imageUrl }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`shop/${title}`);
	};

	return (
		<CategoryContainer onClick={handleClick}>
			<BackgroundImage imageUrl={imageUrl} />
			<CategoryContainerBody>
				<h2>{title}</h2>
				<p>Show Now</p>
			</CategoryContainerBody>
		</CategoryContainer>
	);
};

export default CategoriesItem;
