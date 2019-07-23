import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import artistsReducer from "./redux/artists";
import setlistsReducer from "./redux/setlists";
import userReducer from "./redux/user";

import Canticle from "./components/Canticle";

const store = createStore(
  combineReducers({
    artists: artistsReducer,
    setlists: setlistsReducer,
    user: userReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Canticle />
  </Provider>,
  document.getElementById("root")
);
