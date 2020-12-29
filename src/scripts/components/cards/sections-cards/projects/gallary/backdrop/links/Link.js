import React from 'react';

function Link(props) {
	let classesNames = 'gallery__item__backdrop__links__link';
	classesNames += props.isDisabled
		? ' gallery__item__backdrop__links__link-disabled'
		: '';

	return (
		<a
			className={classesNames}
			rel="noopener noreferrer"
			target="_blank"
			href={props.href}
		>
			{props.txt}
		</a>
	);
}

export default Link;
