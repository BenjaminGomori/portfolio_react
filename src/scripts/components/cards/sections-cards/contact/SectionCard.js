import React from 'react';
import Header from './header/Header';
import ContantForm from '../../../../containers/ContactForm';

function SectionCard(props) {
	if (props.isActive) {
		let nameInput = document.querySelector('.contact-form__name');
		nameInput.focus();
	}

	return (
		<div className={props.isActive ? 'section-card' : 'section-card-disabled'}>
			<Header txt={props.header} />
			<ContantForm />
		</div>
	);
}

export default SectionCard;
