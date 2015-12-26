import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Heading from '../components/heading'

class App extends Component {
  render() {
    return (
      <div>
        <Heading>App Container stuff</Heading>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {};
}

export default connect(mapStateToProps)(App);