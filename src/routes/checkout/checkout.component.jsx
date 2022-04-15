import {
	CheckoutContainer,
	CheckoutHeader,
	Total,
	HeaderBlock,
} from "./checkout.styles";

import { useContext } from "react";
import { CartContext } from "../../context/cart/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
	const { cartItem, total } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Name</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItem.map(product => {
				return <CheckoutItem key={product.id} product={product} />;
			})}

			<Total>${total}</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
