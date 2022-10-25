import React, { useState } from 'react';

//ways to conditionally show components
// 1.short-circuit evaluation
// 2.ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const firstValue = text || 'hello world';
	//or operator(uses text or helloworld)
	const secondValue = text && 'hello world';
	//and operator
	//if first one is truthy, 2nd condition prints
	//jsx has to return value/expression
	const [isError, setIsError] = useState(false);

	return (
		<>
			{/* {/* <h1>{firstValue}</h1>
      <h2>value:{secondValue}</h2> */}
			{/* <h1>{text || "JohnDoe"}</h1> */}
			{/* since this is truthy and there is no text, it returns john doe, if falsy, it would return whatever the text would contain */}
			{/* <h2>{text && "JohnDoe"} </h2> */}
			{/* if text is truthy, :john doe would be returned, if it is falsy, nothing would get returned */}
			{/* <h2>{!text && "Falsy"} </h2> */}
			{/* if text is falsy, it returns 2nd arguement*/}
			{/* <button className='btn'>Change Text</button> */}

			<h1>{text || 'john Doe'}</h1>
			<button className='btn' onClick={() => setIsError(!isError)}>
				Error
			</button>
			{/* calling error and setting it as false */}
			{isError && <h1>Error...</h1>}
			{isError ? <p>There is an error</p> : <p>Error</p>}
		</>
	);
};

// ternary operator will return 1 thing if true and 1 thing if false
// condition ? expression if true : expression if false

export default ShortCircuit;
