import React from 'react';
import Title from './title/Title';

function Header(props) {
	return (
		<div className="section-card__header">
			<Title txt={props.txt} />
		</div>
	);
}

export default Header;
