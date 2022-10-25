import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

//prop drilling is not proper term
//side effect of multiple components, passing state from top component tree to bottom
//unoffical term for passing data through several nested children compenents when there is no need for it
//extra components used as a medium to pass it down through the component needed

//useContext will fix it

//PropDrilling function passes people thrugh list --> list function takes people and passes id through single person --> people maps each item

//removePerson is passed through list unnessarially to get to Singleperson function
//can be fixed by useContext/ContextAPI

const PropDrilling = () => {
	//data is passed through the state
	const [people, setPeople] = useState(data);
	const removePerson = (id) => {
		//practice state function with a function
		setPeople((people) => {
			//returns a filtered list if person id does not equal to person id
			return people.filter((person) => person.id !== id);
		});
	};
	// returning the component
	return (
		<section>
			<h3>prop drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};

//list value
const List = ({ people, removePerson }) => {
	return (
		<>
			{people.map((person) => {
				// returning items created by singlePerson Function
				//spread operator keeps everything else in the the person object
				return (
					<SinglePerson
						key={person.id}
						{...person}
						removePerson={removePerson}
					/>
				);
			})}
		</>
	);
};

//destructing person id, name
const SinglePerson = ({ id, name, removePerson }) => {
	//returning item
	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>Remove</button>
		</div>
	);
};

export default PropDrilling;
