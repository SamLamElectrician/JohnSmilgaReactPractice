import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch';
//good for multiple api calls

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
	//destructuring array
	//calls useFetch to return and get the objects
	const { loading, products } = useFetch(url);
	return (
		<div>
			{/* if loading is true show loading if not show data */}
			<h2>{loading ? 'loading...' : 'data'}</h2>
		</div>
	);
};

export default Example;
