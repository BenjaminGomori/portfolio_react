import React from 'react';

function Filter(props) {
	let classesNames = 'projects-filters__filter';
	classesNames += props.isActive ? ' projects-filters__filter-active' : '';

	return <div className={classesNames}>{props.txt}</div>;
}

export default Filter;
