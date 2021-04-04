import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
	handleTitleTextChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title)
	}

	render() {
		return (
		<header>
			<Title title={this.props.title} />
			<input value={this.props.title} onChange={this.handleTitleTextChange.bind(this)} />
		</header>
		);
	}
}