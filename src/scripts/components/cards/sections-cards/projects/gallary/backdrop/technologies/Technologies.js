import React from 'react';
import Technology from './Technology';

function Technologies(props) {
	let technologList = [];

	for (let i = 0; i < props.technologies.length; i++) {
		technologList.push(<Technology key={i} txt={props.technologies[i]} />);
	}
	return (
		<div className="gallery__item__backdrop__technologies">{technologList}</div>
	);
}

export default Technologies;
