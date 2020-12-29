import React from 'react';
import NavBar from './nav/Bar';
import ContentWrapper from './ContentWrapper';

function NavAndContentWrapper(props) {
	return (
		<div className="nav-content-wrapper">
			<NavBar
				navLinkNames={props.navLinkNames}
				onNavClick={props.onNavClick}
				activeNavLink={props.activeNavLink}
			/>
			<ContentWrapper
				activeNavLink={props.activeNavLink}
				navLinkNames={props.navLinkNames}
			/>
		</div>
	);
}

export default NavAndContentWrapper;
