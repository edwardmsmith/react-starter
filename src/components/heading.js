import React, { Component } from 'react';

export default class extends Component {
	render () {
		return <h2>{this.props.children}</h2>
	}
}