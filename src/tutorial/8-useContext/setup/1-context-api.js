import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
//useful for nested 2-3 plus levels
//set up globally one time

const PersonContext = React.createContext();
// two components - Provider, Consumer
// provider is wrapped around component or app in some cases
//consumer renders something based on context changes

const ContextAPI = () => {
	const [people, setPeople] = useState(data);
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};
	//Provider gives the value that needs to be passed down using value key
	// in this case, an object is passed down
	return (
		<PersonContext.Provider value={{ removePerson, people }}>
			<h3>Context API / useContext</h3>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	//takes data from the provider using hook useContext(name)
	//returns an object
	const mainData = useContext(PersonContext);
	console.log(mainData);
	return (
		<>
			{/* mainData is an object  */}
			{mainData.people.map((person) => {
				return <SinglePerson key={person.id} {...person} />;
			})}
		</>
	);
};

const SinglePerson = ({ id, name }) => {
	//gives access to function by destructuring
	const { removePerson } = useContext(PersonContext);

	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};

export default ContextAPI;
