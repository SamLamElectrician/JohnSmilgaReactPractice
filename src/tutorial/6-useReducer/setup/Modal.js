import React, { useEffect } from 'react';

//close modal given access
const Modal = ({ modalContent, closeModal }) => {
	useEffect(() => {
		setTimeout(() => {
			closeModal();
		}, 3000);
	});
	return (
		<div className='modal'>
			<p>{modalContent}</p>
		</div>
	);
};

export default Modal;
