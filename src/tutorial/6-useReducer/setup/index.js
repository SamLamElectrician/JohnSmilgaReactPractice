import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function that allows it to function
//similiar to redux
//you only have to import folder containing index
//commented out is if you use state
//complex states not small app archeitecture

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: '',
	//object
};
const Index = () => {
	const [name, setName] = useState('');
	// const [people, setPeople] = useState(data);
	// const [showModal, setShowModal] = useState(false);
	const [state, dispatch] = useReducer(reducer, defaultState);
	//dispatch is common practice
	//getting state value and dispatch function back for use reducer
	//reducer param --> takes old state --> action --> new state
	//defaultState is intial state of object --> best practice to use objects due to complicated structures

	//side note --> instead of hard coding our values in to the dispatch, we can set an object to soft code it
	//eg -->
	//  const action  = {
	// 	ADD: 'ADD_ITEM',
	// 	NoValue: 'NoValue'
	//  }

	//then you would change the switch statement plus dispatch to action.add or action.noValue
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			// setShowModal(true);
			// //show if modal if name is filled
			// setPeople([...people, { id: new Date().getTime().toString() }, name]);
			// setName("");
			const newItem = { id: new Date().getTime().toString(), name };
			dispatch({ type: 'ADD_ITEM', payload: newItem }); // most have prop of type:
			//dispatch calls reducer, reducer influence state
			//dispatch much have type key
			//payload is to add more properties
			// payload is usually an object in the dispatch
			//convention is using type then payload
			//convention is all uppercase with underscores
			setName('');
			//set name to empty string
		} else {
			// setShowModal(true);
			//show modal if value is empty
			//eg: fill out name
			dispatch({ type: 'NO_VALUE' });
		}
	};
	const closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' });
	};

	return (
		<>
			{/* state is the object for reducer */}
			{/* close modal allows access in modal.js */}
			{state.isModalOpen && (
				<Modal closeModal={closeModal} modalContent={state.modalContent} />
			)}
			{/* state is the object */}
			<form onSubmit={handleSubmit} className='form'>
				<div>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn'>
					Submit
				</button>
			</form>
			{/* state is the object for reducer */}
			{state.people.map((person) => {
				//you can destructure here if you want
				return (
					<div key={person.id}>
						<h4>{person.name}</h4>
						<button
							onClick={() => {
								dispatch({ type: 'REMOVE_ITEM', payload: person.id });
								//payload to remove specific person via id
							}}
						>
							Remove
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;
