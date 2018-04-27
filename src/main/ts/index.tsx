import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import App from './components/App';

import store from './store'

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>
, document.getElementById('app'),
);