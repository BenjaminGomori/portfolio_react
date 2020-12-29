import React from 'react';
import Filter from './filter/Filter';

function Filters(props) {
	const filtersNames = [
		<Filter key="A" txt="All" isActive={props.activeFilter === 'A'} />,
		<Filter key="F" txt="Front-End" isActive={props.activeFilter === 'F'} />,
		<Filter key="B" txt="Back-End" isActive={props.activeFilter === 'B'} />,
	];

	return (
		<div
			className="section-card__header__filters projects-filters"
			onClick={props.onFilterProjects}
		>
			{filtersNames}
		</div>
	);
}

export default Filters;
