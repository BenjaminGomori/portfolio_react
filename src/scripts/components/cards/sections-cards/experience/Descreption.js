import React from 'react';

function Descreption(props) {
	return (
		<div className="section-card__content__descreption section-card__content__descreption-with-title">
			During my internship at &nbsp;
			<a
				className="section-card__content__descreption__link"
				target="_blank"
				rel="noopener noreferrer"
				href="https://robotmorning.com/"
			>
				Robot Morning
			</a>
			, I added many features to the company's internal managing software. These
			features, which I developed using the LAMP stack, provided managers with
			employee and business data. My responsibilities included developing the
			controllers and views for the client-side and the Restful APIs for the
			server-side.
		</div>
	);
}

export default Descreption;
