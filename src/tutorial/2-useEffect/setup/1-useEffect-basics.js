import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (value >= 1) {
			document.title = `New Message (${value})`;
		}
	}, [value]);
	//passing value as 2nd param, it will run once value changes
	useEffect(() => {
		console.log('hello World');
	}, []);
	//empty array of dependecies will cause use effect to only occur once
	//will render after every render if no dependecies by default
	return (
		<>
			<h1>{value}</h1>
			<h2>{document.title}</h2>
			<button className='btn' onClick={() => setValue(value + 1)}>
				Increase
			</button>
		</>
	);
};
//use effect will rerender by default
//every time button is clicked, use effect is called
//use effect is used when you need a side effect outside of the component --> datafetching, listening events, subscription sign up --> default  will run after every render
//to make hooks conditional, set it up inside the hook
//second param --> can be passed array of dependecies --> only runs on intial render
//empty array as second param --> use effect only occurs on initial
//you can have as many use effects as you want
//side effect for each rerender, side effect for

export default UseEffectBasics;
