import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const understanding = (state = 5, action) => {
    if (action.type==='SET_UNDERSTANDING'){
      return  action.payload;
    }

    return state;
  }

  
  const feeling = (state = 5, action) => {
    if (action.type==='SET_FEELING'){
      return  action.payload;
    }

    return state;
  }

  const support = (state = 5, action) => {
    if (action.type==='SET_SUPPORT'){
      return  action.payload;
    }

    return state;
  }

  
  
const reduxStore = createStore(
    combineReducers({
        support,
        feeling,
      understanding,
    }),
    applyMiddleware(logger)
  );


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));


registerServiceWorker();
