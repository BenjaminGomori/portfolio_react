import React, { Component } from 'react';
import NavAndConentWrapper from '../components/NavAndConentWrapper';

class App extends Component {
	state = {
		activeNavLink: 'A', //About
		navLinkNames: ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CONTACT'],
	};

	render() {
		return (
			<div className="app">
				<NavAndConentWrapper
					navLinkNames={this.state.navLinkNames}
					activeNavLink={this.state.activeNavLink}
					onNavClick={this.onNavClick.bind(this)}
				/>
			</div>
		);
	}

	onNavClick(event) {
		event.stopPropagation();
		let activeLink = event.target.getAttribute('data-first-letter');
		if (activeLink && activeLink !== this.state.activeNavLink)
			this.setState((state) => {
				return { activeNavLink: activeLink };
			});
	}
}

export default App;
