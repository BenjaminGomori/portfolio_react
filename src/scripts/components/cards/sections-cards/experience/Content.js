import React from 'react';
import Title from './ContentTitle';
import Descreption from './Descreption';

function Content(props) {
	return (
		<div className="section-card__content">
			<Title />
			<Descreption />
		</div>
	);
}

export default Content;
