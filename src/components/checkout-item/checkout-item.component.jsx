import { useContext } from "react";
import { CartContext } from "../../context/cart/cart.context";

import {
	CheckoutItemContainer,
	ImageContainer,
	Items,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ product }) => {
	const { imageUrl, name, quantity, price } = product;

	const { addItemToCart, removeItemFromCart, removeItemCart } =
		useContext(CartContext);

	const addItem = () => {
		addItemToCart(product);
	};

	const removeItem = () => {
		removeItemFromCart(product);
	};

	const remove = () => {
		removeItemCart(product);
	};

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>

			<Items>{name}</Items>

			<Quantity>
				<Arrow onClick={removeItem}>{"<"}</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItem}>{">"}</Arrow>
			</Quantity>

			<Items>${price}</Items>
			<RemoveButton onClick={remove}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
