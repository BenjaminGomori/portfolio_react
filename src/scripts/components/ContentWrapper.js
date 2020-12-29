import React from 'react';
import MainCard from './cards/main-card/MainCard';
import SectionsCards from './cards/sections-cards/SectionsCards';

function ContentWrapper(props) {
	return (
		<div className="content-wrapper">
			<MainCard />
			<SectionsCards
				activeNavLink={props.activeNavLink}
				navLinkNames={props.navLinkNames}
			/>
		</div>
	);
}

export default ContentWrapper;
