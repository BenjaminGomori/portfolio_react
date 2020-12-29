import React from 'react';
import Header from './header/Header';
import Content from './Content';

function SectionCard(props) {
	return (
		<div className={props.isActive ? 'section-card' : 'section-card-disabled'}>
			<Header txt={props.header} />
			<Content />
		</div>
	);
}

export default SectionCard;
