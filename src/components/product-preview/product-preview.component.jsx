import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";

import {
	ProductPreviewContainer,
	Title,
	Preview,
} from "./product-preview.styles";

const ProductPreview = ({ title, product }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/shop/${title}`);
	};

	return (
		<ProductPreviewContainer>
			<Title onClick={handleClick}>{title}</Title>

			<Preview>
				{product
					.filter((_, idx) => idx < 4)
					.map(product => {
						return <ProductCard key={product.id} product={product} />;
					})}
			</Preview>
		</ProductPreviewContainer>
	);
};

export default ProductPreview;
