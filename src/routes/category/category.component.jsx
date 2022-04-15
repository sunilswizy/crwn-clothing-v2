import { useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/products/product.context";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
	const { category } = useParams();
	const { products } = useContext(ProductContext);

	const [product, setProduct] = useState(products[category]);

	useEffect(() => {
		setProduct(products[category]);
	}, [category, products]);

	return (
		<>
			<Title>{category}</Title>
			<CategoryContainer>
				{product ? (
					product.map(item => <ProductCard key={item.id} product={item} />)
				) : (
					<h1>Loading</h1>
				)}
			</CategoryContainer>
		</>
	);
};

export default Category;
