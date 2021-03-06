import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './reducers/'
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
