import React from 'react';
import Technologies from './technologies/Technologies';
import Links from './links/Links';

function Backdrop(props) {
	return (
		<div className="gallery__item__backdrop">
			<div className="gallery__item__backdrop__title">Technologies</div>
			<Technologies technologies={props.technologies} />
			<Links links={props.links} />
		</div>
	);
}

export default Backdrop;
