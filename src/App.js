import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { onAuthStateChanged } from "firebase/auth";
import {
	auth,
	createUserDocumenetFromAuth,
} from "./utils/firebase/firebase.config";

import { userContext } from "./context/user/user.context";
import { useContext } from "react";

const App = () => {
	const { setCurrentUser } = useContext(userContext);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				setCurrentUser(user);
				await createUserDocumenetFromAuth({
					uid: user.uid,
					displayName: user.displayName,
					email: user.email,
					photoUrl: user.photoURL,
				});
			} else {
				setCurrentUser(null);
			}
		});
		return unsubscribe;
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
