import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Heading from '../components/heading'
import Counter from '../components/counter'
import * as Actions from '../actions'

class App extends Component {
    render() {
        const { increment, decrement, counter, children } = this.props
        return (
          <div>
            <Heading>Counter</Heading>
            <Counter 
                counter = {counter}
                onIncrement = { () => 
                    increment() }
                onDecrement = { () =>
                    decrement() } />
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

function mapDispatchToProps (dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);