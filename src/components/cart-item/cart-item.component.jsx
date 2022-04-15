import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

const CartItem = ({ name, quantity, imageUrl, price }) => {
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={name} />
			<ItemDetails>
				<Name>{name}</Name>
				<span>
					{quantity}X${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
