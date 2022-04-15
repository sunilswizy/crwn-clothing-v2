import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.config.js";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [products, setproducts] = useState({});

	useEffect(() => {
		const fetching = async () => {
			const data = await getCollectionAndDocuments();
			setproducts(data);
		};

		fetching();
	}, []);

	return (
		<ProductContext.Provider value={{ products, setproducts }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
