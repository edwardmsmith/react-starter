import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Heading from '../components/heading'
import Counter from '../components/counter'
import { increment, decrement } from '../actions'

class App extends Component {

    render() {
        const { dispatch, counter, children } = this.props
        return (
          <div>
            <Heading>Counter</Heading>
            <Counter 
                counter = {counter}
                onIncrement = { () => 
                    dispatch(increment()) }
                onDecrement = { () =>
                    dispatch(decrement()) }
            />
            {children}
          </div>
        );
    }
}

function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);