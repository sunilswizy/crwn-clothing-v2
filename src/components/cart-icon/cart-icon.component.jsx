import { CartIconContainer, ShoopingIcon, ItemCount } from "./cart-icon.styles";

import { useContext } from "react";
import { CartContext } from "../../context/cart/cart.context";

const Cart = () => {
	const { handleToggle, itemCount } = useContext(CartContext);

	return (
		<CartIconContainer onClick={handleToggle}>
			<ShoopingIcon />
			<ItemCount>{itemCount}</ItemCount>
		</CartIconContainer>
	);
};

export default Cart;
