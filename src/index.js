import { compose, pipe } from 'lodash/fp';
import store from './store';
import { bugAdded, bugRemoved } from './actions';

store.subscribe(() => {
	console.log('Store changed!', store.getState());
});

store.dispatch();

store.dispatch({
	type: actions.BUG_REMOVED,
	payload: {
		id: 1,
	},
});
