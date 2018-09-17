import { createStore } from 'redux';

import rootReducer from './reducers';

let devMiddleWare = null;

if (process.mode === 'development') {
  const { composeWithDevTools } = require('redux-devtools-extension'); // eslint-disable-line
  devMiddleWare = composeWithDevTools();
}

const store = createStore(
  rootReducer,
  devMiddleWare || undefined
);

export default store;
