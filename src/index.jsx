import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Footer, Header, Main } from './containers';

ReactDOM.render(
  (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  ), document.getElementById('root')
);
