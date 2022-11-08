import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer'
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);





