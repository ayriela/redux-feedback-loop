import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux'; 
//import { applyMiddleware } from 'redux';
//import logger from 'redux-logger';

const understanding = (state = 5, action) => {
    if (action.type==='SET_UNDERSTANDING'){
      return  action.payload;
    } else if (action.type==='RESET'){
        return 5;
    }
    return state;
  }

  const feeling = (state = 5, action) => {
    if (action.type==='SET_FEELING'){
      return  action.payload;
    } else if (action.type==='RESET'){
        return 5;
    }
    return state;
  }

  const support = (state = 5, action) => {
    if (action.type==='SET_SUPPORT'){
      return  action.payload;
    } else if (action.type==='RESET'){
        return 5;
    }
    return state;
  }

  const comments = (state = '', action) => {
    if (action.type==='SET_COMMENTS'){
      return  action.payload;
    } else if (action.type==='RESET'){
        return ''
    }
    return state;
  }
  
const reduxStore = createStore(
    combineReducers({
        comments,
        support,
        feeling,
      understanding,
    }),
    //applyMiddleware(logger)
  );


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));


registerServiceWorker();
