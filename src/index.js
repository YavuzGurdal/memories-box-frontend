import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './bootstrap.min.css' // stil leri hazir aldim. bootswatch.com'dan. theme Sketchy

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import memoriesReducer from './reducers/memoriesReducer'; // reducer icindeki memories'i bu guncelleyecek

const reducer = combineReducers({ // tum reducerlari burda birlestiriyorum. yani combine ediyorum. sonra da store icine gondermis oluyorum
  memories: memoriesReducer  // bu global memories
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))) // bunlar her redux kurulumunda benzer sekilde oluyor

const root = ReactDOM.createRoot(document.getElementById('root'));
// App i provider ile sariyorum ve store a yukarda tanimladigim store u atiyorum
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

