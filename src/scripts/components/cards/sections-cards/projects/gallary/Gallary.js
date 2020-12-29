import React from 'react';
import Backdrop from './backdrop/Backdrop';

function Gallary(props) {
	let sources = [
		'/images/projects/portfolio.jpg', //TODO
		'/images/projects/ahituv.jpg',
		'/images/projects/phone.jpg',
		'/images/projects/java_teamPlayers2.jpg',
		'/images/projects/python_bikeRental.jpg',
		'/images/projects/vb_gs.jpg',
		'/images/projects/vb_ia.jpg',
	];
	let projectNames = [
		'Portfolio',
		'Ahituv Properties',
		'Electro',
		'Team Players',
		'Bike Rental',
		'Sponsor Golfer',
		'Income Average',
	];
	let projectDesc = [
		'Personal Website',
		'Real Estate Website',
		'E-commerce for Electronics',
		'Assign Players to your Favorite Teams',
		'Console Bike Rental App',
		'Sponsor College Golfers',
		'Household Income App',
	];

	let projectTech = [
		['React', 'JavaScript', 'Webpack', 'Babel', 'Scss', 'CSS', 'HTML'],
		[
			'Node',
			'Express',
			'JavaScript',
			'Webpack',
			'Babel',
			'Scss',
			'CSS',
			'HTML',
		],
		[
			'Node',
			'Express',
			'JavaScript',
			'Webpack',
			'Babel',
			'Scss',
			'CSS',
			'HTML',
		],
		['Java', 'Meven', 'Access', 'Eclipse'],
		['Python'],
		['Visual Basic', 'Visual Studio'],
		['Visual Basic', 'Visual Studio'],
	];

	let projectLinks = [
		['', '', 'L'],
		[
			'http://benjamingomori.com/ahituv-properties/',
			'https://github.com/BenjaminGomori/real-estate',
			'L', //Live
		],
		[
			'http://benjamingomori.com/electro/',
			'https://github.com/BenjaminGomori/Electro_new',
			'L',
		],
		[
			'http://benjamingomori.com/java/downloads/team-players/exe.zip',
			'https://github.com/BenjaminGomori/TeamAndPlayers',
			'D', //Download
		],
		[
			'http://benjamingomori.com/python/downloads/bike-rental/BikeRentalSystem.exe',
			'https://github.com/BenjaminGomori/BikeRental',
			'D',
		],
		[
			'http://benjamingomori.com/vb/downloads/golfer-sponsorship/gs.exe',
			'',
			'D',
		],
		['http://benjamingomori.com/vb/downloads/income-average/ia.exe', '', 'D'],
	];

	//F for Front-End, or B for Back-End
	let projectTypes = ['F', 'F', 'F', 'B', 'B', 'B', 'B'];

	let images = [];

	for (let i = 0; i < sources.length; i++) {
		if (props.filterBy === 'A' || props.filterBy === projectTypes[i])
			images.push(
				<div key={i} className="gallery__item">
					{/* <div className="gallery__item__image-div"> */}
					<Backdrop technologies={projectTech[i]} links={projectLinks[i]} />
					<img
						className="gallery__item__image"
						src={sources[i]}
						alt="project"
					/>
					{/* </div> */}
					<h2 className="gallery__item__title">{projectNames[i]}</h2>
					<h3 className="gallery__item__sub-title">{projectDesc[i]}</h3>
				</div>
			);
	}
	return (
		<div className="section-card__content__gallery">
			<div className="gallery">{images}</div>
		</div>
	);
}

export default Gallary;
