import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
	toggleCart: false,
	cartItem: [],
	addItemToCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
	const check = cartItems.find(item => item.id === productToAdd.id);

	if (check) {
		const newCart = cartItems.map(item =>
			item.id === productToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);

		return newCart;
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
	const check = cartItems.find(item => item.id === productToRemove.id);

	if (check.quantity !== 1) {
		const newCart = cartItems.map(item =>
			item.id === productToRemove.id
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
		return newCart;
	}

	return cartItems.filter(item => item.id !== productToRemove.id);
};

const CartProvider = ({ children }) => {
	const [toggleCart, setToggleCart] = useState(false);
	const [cartItem, setCartItem] = useState([]);
	const [itemCount, setItemCount] = useState(0);
	const [total, setTotal] = useState(0);

	const handleToggle = () => setToggleCart(!toggleCart);

	const addItemToCart = productToAdd => {
		setCartItem(addCartItem(cartItem, productToAdd));
	};

	const removeItemFromCart = productToRemove => {
		setCartItem(removeCartItem(cartItem, productToRemove));
	};

	const removeItemCart = productToRemove => {
		const newCart = cartItem.filter(item => productToRemove.id !== item.id);
		setCartItem(newCart);
	};

	useEffect(() => {
		const newCount = cartItem.reduce((acc, value) => acc + value.quantity, 0);
		const newTotal = cartItem.reduce(
			(acc, value) => acc + value.quantity * value.price,
			0
		);
		setTotal(newTotal);
		setItemCount(newCount);
	}, [cartItem]);

	return (
		<CartContext.Provider
			value={{
				toggleCart,
				handleToggle,
				cartItem,
				addItemToCart,
				itemCount,
				removeItemFromCart,
				removeItemCart,
				total,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
