import React from 'react';
import Link from './Link';

function Links(props) {
	let links = [
		<Link
			key={0}
			txt={props.links[2] === 'D' ? 'Download' : 'Live'}
			href={props.links[0]}
			isDisabled={props.links[0] === ''}
		/>,
		<Link
			key={1}
			txt="Code"
			href={props.links[1]}
			isDisabled={props.links[1] === ''}
		/>,
	];

	return <div className="gallery__item__backdrop__links">{links}</div>;
}

export default Links;
