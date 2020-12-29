import React from 'react';

function Item(props) {
	let listOfClasses = props.isActive
		? 'nav-bar__item nav-bar__item-active'
		: 'nav-bar__item';

	return (
		<div className={listOfClasses} data-first-letter={props.txt[0]}>
			{props.txt.toUpperCase()}
		</div>
	);
}

export default Item;
