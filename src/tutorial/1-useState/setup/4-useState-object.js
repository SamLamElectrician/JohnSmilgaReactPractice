import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: 24,
		message: 'Random Message',
	});

	//you can use as many state values as you want or an object
	//with object, you need spread to perserve the rest of the key:values
	// const [name, setName] = useState('peter');
	// const [age, setAge] = useState(24);
	// const [old, setOld] = useState(true);
	// const [ages, setAges] = useState([]);
	// const [Message, setMessage] = useState('Random Message')

	const changeMessage = () => {
		setPerson({ ...person, message: 'hello world' });
		// with an object, use spread operator to keep object the same and change the message with this example

		useState({
			name: 'peter',
			age: 24,
			message: 'hello world',
		});
	};
	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button className='btn' onClick={changeMessage}>
				YURR
			</button>
		</>
	);
};

export default UseStateObject;
