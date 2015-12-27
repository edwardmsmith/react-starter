jest.dontMock('../heading');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Heading = require('../heading').default;

describe('Heading', () => {

	var heading = TestUtils.renderIntoDocument(
		<Heading>Test</Heading>
	);
	var headingNode = ReactDOM.findDOMNode(heading);
	
	it('Contains the proper child text', () => {
		expect(headingNode.textContent).toEqual('Test');
	});

	it('Is an H1 tag', () => {
		expect(headingNode.tagName).toEqual('H1');
	});
	
})