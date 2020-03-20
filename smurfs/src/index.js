import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import "./index.css";
import App from "./components/App";
import { smurfReducer } from "./reducer/smurfReducer";

const store = createStore(smurfReducer, applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store} >
  <App />
</Provider>, 
document.getElementById("root"));
