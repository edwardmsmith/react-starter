export default function testReducer (state={}, action) {
	switch (action.type) {
	case 'FOO':
		return state;
	default:
		return state;
	}
}