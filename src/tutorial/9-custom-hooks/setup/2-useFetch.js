import { useState, useEffect } from 'react';

//function takes url arguement
export const useFetch = (url) => {
	//sets states
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	//basic fetch req using async
	//uses useState hooks to set values with Json Data
	const getProducts = async () => {
		const response = await fetch(url);
		const products = await response.json();
		setProducts(products);
		setLoading(false);
	};

	//only runs once with url changes
	useEffect(() => {
		getProducts();
	}, [url]);
	// returns the state of loading and products
	return { loading, products };
};
