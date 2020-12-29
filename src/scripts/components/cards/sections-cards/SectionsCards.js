import React from 'react';
import SectionCardAbout from './about/SectionCard';
import SectionCardExperience from './experience/SectionCard';
import SectionCardProject from '../../../containers/sections-cards/projects/SectionCard';
import SectionCardContactForm from './contact/SectionCard';

function SectionsCards(props) {
	let sectionsCards = [];

	for (let i = 0; i < props.navLinkNames.length; i++) {
		if (props.navLinkNames[i][0] === 'P') {
			sectionsCards.push(
				<SectionCardProject
					key={i}
					header={props.navLinkNames[i]}
					isActive={props.activeNavLink === props.navLinkNames[i][0]}
				/>
			);
		} else if (props.navLinkNames[i][0] === 'C') {
			sectionsCards.push(
				<SectionCardContactForm
					key={i}
					header={props.navLinkNames[i]}
					isActive={props.activeNavLink === props.navLinkNames[i][0]}
				/>
			);
		} else if (props.navLinkNames[i][0] === 'E') {
			sectionsCards.push(
				<SectionCardExperience
					key={i}
					header={props.navLinkNames[i]}
					isActive={props.activeNavLink === props.navLinkNames[i][0]}
				/>
			);
		} else {
			sectionsCards.push(
				<SectionCardAbout
					key={i}
					header={props.navLinkNames[i]}
					isActive={props.activeNavLink === props.navLinkNames[i][0]}
				/>
			);
		}
	}
	return <React.Fragment>{sectionsCards}</React.Fragment>;
}

export default SectionsCards;
