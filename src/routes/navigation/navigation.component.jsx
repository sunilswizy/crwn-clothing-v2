import React from "react";
import { Outlet } from "react-router-dom";

import {
	NavigationContainer,
	LogoContainer,
	NavlinksContainer,
	NavLink,
} from "./navigation.styles";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../utils/firebase/firebase.config";
import { signOut } from "firebase/auth";

import { userContext } from "../../context/user/user.context";
import { useContext } from "react";
import { CartContext } from "../../context/cart/cart.context";

import Cart from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";

const Navigation = () => {
	const logSignOut = () => {
		signOut(auth);
	};

	const { currentUser } = useContext(userContext);
	const { toggleCart } = useContext(CartContext);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>

				<NavlinksContainer>
					<NavLink to='/shop'>SHOP</NavLink>
					<NavLink as='div'>
						<Cart />
					</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={logSignOut}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
				</NavlinksContainer>
				{toggleCart && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
