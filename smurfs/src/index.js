import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

//Redux imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { smurfReducer } from "./reducer/smurfReducer";

import "./index.css";
import App from "./components/App";

const store = createStore(smurfReducer, applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store} >
  <App />
</Provider>, 
document.getElementById("root"));
