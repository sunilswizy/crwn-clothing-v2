import ButtonBox from "../button-box/button-box.component";
import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";
import { CartContext } from "../../context/cart/cart.context";
import { useNavigate } from "react-router-dom";

import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const { cartItem, handleToggle } = useContext(CartContext);
	const history = useNavigate();

	const handleClick = () => {
		handleToggle();
		history("/checkout");
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItem.length ? (
					<>
						{cartItem.map(({ id, ...other }) => {
							return <CartItem key={id} {...other} />;
						})}
					</>
				) : (
					<EmptyMessage>Cart is empty!</EmptyMessage>
				)}
			</CartItems>
			<ButtonBox onClick={handleClick}>Go TO CHECKOUT</ButtonBox>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
