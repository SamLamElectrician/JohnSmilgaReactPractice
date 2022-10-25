import React from 'react';
import PropTypes from 'prop-types';
//from packages
import defaultImage from '../../../assets/default-image.jpeg';
//imports image to be used

//short circuit operator or defaultProp can be used

const Product = ({ image, name, price }) => {
	// if image is there get the image.url if image exist
	//if not, returns undefined
	const url = image && image.url;
	//need url for the image.url will be undefined so you will be short circuiting the undefined image.url
	return (
		<article className='product'>
			<h4>{name}</h4>
			{/* if url is true, returns true  */}
			{/* if url is falsy, returns the default Image import */}
			{/* image obect would be undefined */}

			{/* <img src={image.url} alt={name} /> */}
			<img src={url || defaultImage} alt={name} />
			<p>${price || 3.99}</p>
			{/* what happems when price isnt there */}
			{/* return static items instead of dynamically to find error-->line by line  */}
		</article>
	);
};

//proptype checks if its there --> similiar to typeOf function
//use short circuit operator
//checks prop follows propType
Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

//creates a default prop if a value is missing
// Product.defaultProps = {
// 	name: 'default Name',
// 	price: 3.99,
// 	image: defaultImage,
//   //loads in default image and params
// };

export default Product;
