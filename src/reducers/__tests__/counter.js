jest.dontMock('../counter');

import { INCREMENT, DECREMENT } from '../../actions';

const counter = require('../counter').default;

describe('The counter reducer', () =>{
	it('Should handle initial state', () => {
		expect(counter(undefined,{})).toBe(0);
	})

	it('Should handle INCREMENT action', () => {
		expect(counter(1, {type: INCREMENT})).toBe(2)
	})

	it('Should handle DECREMENT action', () => {
		expect(counter(1, {type: DECREMENT})).toBe(0)
	})

	it('Should handle undefined action type', () => {
		expect(counter(1, {type: undefined})).toBe(1)
	})
})