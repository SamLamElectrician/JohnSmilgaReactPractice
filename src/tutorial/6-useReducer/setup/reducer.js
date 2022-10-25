import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

export const reducer = (state, action) => {
	//takes to params, state (before update) and action( what we are trying to do)
	//returns some state
	//where we deal with state
	//more boilerplate, less errors/bugs
	if (action.type === 'ADD_ITEM') {
		const newPeople = [...state.people, action.payload];
		//add people plus payload property
		//action.type refers to dispatch key: value
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'Item Added',
		};
	}
	if (action.type === 'NO_VALUE') {
		return {
			...state,
			isModalOpen: true,
			modalContent: 'Please Enter value',
			//if no value, instructs user to enter value
			//...state shows previous people
		};
	}
	//action to close modal
	if (action.type === 'CLOSE_MODAL') {
		return {
			...state,
			isModalOpen: false,
			modalContent: 'Please Enter value',
		};
	}
	//action to remove items from people list
	if (action.type === 'REMOVE_ITEM') {
		const newPeople = state.people.filter(
			(person) => person.id !== action.payload

			//payload gives aaccess to id to check to remove payload from filtered list
		);
		return { ...state, people: newPeople };
	}
	throw new Error('No matching action type');
	//throws error if theres no match with type
};
