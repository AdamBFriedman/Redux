import { compose, pipe } from 'lodash/fp';
import store from './store';
import * as actions from './actionTypes';

store.subscribe(() => {
	console.log('Store changed!', store.getState());
});

store.dispatch({
	type: actions.BUG_ADDED,
	payload: {
		description: 'Bug 1',
	},
});

store.dispatch({
	type: actions.BUG_REMOVED,
	payload: {
		id: 1,
	},
});
