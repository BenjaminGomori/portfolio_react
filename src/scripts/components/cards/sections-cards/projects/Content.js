import React from 'react';
import Gallary from './gallary/Gallary';

function Content(props) {
	return (
		<div className="section-card__content">
			<Gallary filterBy={props.filterBy} />
		</div>
	);
}

export default Content;
