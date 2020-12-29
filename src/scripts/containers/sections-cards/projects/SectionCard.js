import React, { Component } from 'react';
import Header from '../../../components/cards/sections-cards/projects/header/Header';
import Content from '../../../components/cards/sections-cards/projects/Content';

class SectionCard extends Component {
	state = { activeFilter: 'A', filterNames: ['All', 'Front-End', 'Back-End'] };

	onFilterProjects(event) {
		let txt = event.target.innerText;
		if (txt[0] === 'A' && this.state.activeFilter !== 'A') {
			this.setState((state) => {
				return { activeFilter: 'A' };
			});
		} else if (txt[0] === 'F' && this.state.activeFilter !== 'F') {
			this.setState((state) => {
				return { activeFilter: 'F' };
			});
		} else if (txt[0] === 'B' && this.state.activeFilter !== 'B') {
			this.setState((state) => {
				return { activeFilter: 'B' };
			});
		}
	}

	render() {
		return (
			<div
				className={
					this.props.isActive ? 'section-card' : 'section-card-disabled'
				}
			>
				<Header
					txt={this.props.header}
					onFilterProjects={this.onFilterProjects.bind(this)}
					activeFilter={this.state.activeFilter}
				/>
				<Content filterBy={this.state.activeFilter} />
			</div>
		);
	}
}

export default SectionCard;
