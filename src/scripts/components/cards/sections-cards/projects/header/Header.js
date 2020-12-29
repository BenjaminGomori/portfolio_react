import React from 'react';
import Title from './title/Title';
import Filters from './filters/Filters';

function Header(props) {
	return (
		<div className="section-card__header">
			<Title txt={props.txt} />
			<Filters
				onFilterProjects={props.onFilterProjects}
				activeFilter={props.activeFilter}
			/>
		</div>
	);
}

export default Header;
