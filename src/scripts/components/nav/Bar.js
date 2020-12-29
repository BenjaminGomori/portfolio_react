import React from 'react';
import Item from './Item';

function Bar(props) {
	let navItems = [];

	for (let i = 0; i < props.navLinkNames.length; i++) {
		navItems.push(
			<Item
				key={i}
				txt={props.navLinkNames[i]}
				isActive={props.activeNavLink === props.navLinkNames[i][0]}
			/>
		);
	}
	return (
		<div className="nav-bar" onClick={props.onNavClick}>
			{navItems}{' '}
		</div>
	);
}

export default Bar;
