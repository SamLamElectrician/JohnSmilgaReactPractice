import React, { useState, useEffect } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState('Default user');

	useEffect(() => {
		fetch(url)
			.then((resp) => {
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json(); // without error
				} else {
					//for 404 errors
					setIsLoading(false);
					setIsError(true);
					throw new Error(resp.statusText);
					//for error code
				}
			})
			.then((user) => {
				const { login } = user; // login from api r3esponse
				setUser(login); //sets user
				setIsLoading(false); //not loading no more
			})
			.catch((error) => console.log(error));
		//.catch only catches network error not 404
	}, []);

	//user effect--> fetch req--> if statments -->renders

	if (isLoading) {
		return (
			<div>
				<h2>Loading</h2>
			</div>
		);
	}
	if (isError) {
		return (
			<div>
				<h2>Error</h2>
			</div>
		);
	}
	return (
		<div>
			<h2>{user}</h2>
		</div>
	);
};

export default MultipleReturns;

//return one piece of content or another
//conditional statement
//naming convention for boolen is adding is, eg--> isError --> true

//change network to fast 3g to see how fast it happens
