import React from 'react';
import { data } from '../../../data';
//use state can be imported or be used via React.useState()
//multiple times is better to use import

const UseStateArray = () => {
	const [people, setPeople] = React.useState(data);
	//uses info from data object
	const removeItem = (id) => {
		let newPeople = people.filter((person) => person.id !== id);
		//only id that is passed through is removed from array
		setPeople(newPeople);
		//sets people as new array
		// setPeople(people.filter((person) => person.id !== id));
		//can be refactored to this
	};
	return (
		<>
			{people.map((person) => {
				const { id, name } = person;
				//maps out all id, name of data object
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
						<button className='btn' onClick={() => removeItem(id)}>
							remove
						</button>
					</div>
				);
			})}
			<button
				className='btn'
				onClick={() => {
					setPeople([]);
				}}
				//arrow function so it invokes on click
				//empty array to clear list of setPeople
			>
				clear items
			</button>
		</>
	);
};

//<> </> short cut for fragment

export default UseStateArray;
