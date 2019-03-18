
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, authIsReady } from 'react-redux-firebase';
import fbConfig from './components/config/fbConfig';


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsRead: true}), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

authIsReady(store).then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

})


