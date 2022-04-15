import React, { useContext } from "react";
import { ProductContext } from "../../context/products/product.context";

import ProductPreview from "../../components/product-preview/product-preview.component";

const CategoryPreview = () => {
	const { products } = useContext(ProductContext);

	return (
		<>
			{Object.keys(products).map(title => {
				return (
					<ProductPreview key={title} title={title} product={products[title]} />
				);
			})}
		</>
	);
};

export default CategoryPreview;
