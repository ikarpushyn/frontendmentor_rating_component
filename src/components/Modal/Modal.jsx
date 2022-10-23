import React from 'react';
import './Modal.css';

const Modal = ({ stars }) => {
	return (
		<div className="mainCard">
			<div className="textArea">
				<div>{`You selected ${stars} out of 5`}</div>
				<br />
				<br />
				<h2>Thank you</h2>
				<br />
				<br />

				<h3>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus neque reiciendis
					voluptatem illum odio aliquam similique nisi velit voluptatum facere accusantium, nihil
					exercitationem, animi ipsam fugit corporis in fuga. Corporis.
				</h3>
			</div>
		</div>
	);
};

export default Modal;
