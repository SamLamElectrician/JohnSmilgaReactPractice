import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
		//checks current width of window
	};

	useEffect(() => {
		console.log('add');
		window.addEventListener('resize', checkSize);
		//window has event listener of resizing and calls check size function whenever resized
		return () => {
			console.log('minus');
			window.removeEventListener('resize', checkSize);
			//cleanup function good for component appearing/disappearing
		};
	});
	//running it with empty array will work in this situation--> will have one event listener
	//clean up function is used for when components disappear and appear --> every single time the componenent appears, an add event listener will appear and remain causing memory leakage
	//clean up function is also used for conditional rendering

	//each time window is resized, event listener is added, might cause memory leak

	return (
		<>
			<h1>window </h1>
			<h2>{size} PX</h2>
		</>
	);
};

export default UseEffectCleanup;
