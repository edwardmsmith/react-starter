jest.dontMock('../heading');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Heading = require('../heading').default;

describe('Heading', () => {

	it('Contains the proper child text', () => {
		var heading = TestUtils.renderIntoDocument(
			<Heading>Test</Heading>
		);

		var headingNode = ReactDOM.findDOMNode(heading);

		expect(headingNode.textContent).toEqual('Test');
	})
	
})