import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
  <Home />
  </Provider>
  </>
);


