import React from 'react';
import Email from './link/SendEmail';
import Resume from './link/ViewResume';

function Links() {
	return (
		<div className="main-card__links">
			<Email />
			<Resume />
		</div>
	);
}

export default Links;
