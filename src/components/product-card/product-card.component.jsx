import ButtonBox from "../button-box/button-box.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart/cart.context";

import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { imageUrl, name, price } = product;

	const { addItemToCart } = useContext(CartContext);

	const addItem = () => addItemToCart(product);

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={name} />

			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>

			<ButtonBox invert={true} onClick={addItem}>
				Add to cart
			</ButtonBox>
		</ProductCardContainer>
	);
};

export default ProductCard;
