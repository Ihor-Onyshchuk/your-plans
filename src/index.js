import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import './index.scss';
import App from './App';
import firebaseConfig from './config/fbConfig';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebaseConfig),
		reactReduxFirebase(firebaseConfig, {
			useFirestoreForProfile: true,
			userProfile: 'users',
			attachAuthIsReady: true
		})
	)
);

store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
	serviceWorker.unregister();
})