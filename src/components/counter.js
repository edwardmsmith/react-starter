import React, { Component, PropTypes } from 'react';

class Counter extends Component {
	render () {
		const { counter, onIncrement, onDecrement } = this.props
		return (
			<div>
				<div>{counter}</div>
				<button onClick={onIncrement}>+</button>
				<button onClick={onDecrement}>-</button>
			</div>
		)
	}
}

Counter.propTypes = {
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	counter: PropTypes.number.isRequired
}

export default Counter