import React from 'react';
import SelfImage from './SelfImage';
import Name from './Name';
import Occupation from './Occupation';
import Icons from './icons/Icons';
import Links from './links/Links';

function MainCard() {
	return (
		<div className="main-card">
			<SelfImage />
			<Name />
			<Occupation />
			<Icons />
			<Links />
		</div>
	);
}

export default MainCard;
