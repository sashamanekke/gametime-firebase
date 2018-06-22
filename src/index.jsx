// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

//import components and containers
import GamesIndex from './containers/Games';
import GameShow from './containers/GameShow';

//import reducers
import gamesReducer from './reducers/gamesReducer';

// import stylesheet
import '../assets/stylesheets/application.scss';

const mySpace = prompt("What is your name?") || `myGameSpace${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  mySpace: mySpace,
  games: []
};

// State and reducers
const reducers = combineReducers({
  mySpace: (state = null, action) => state,
  games: gamesReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={GamesIndex}/>
        <Route path="/games/:id" exact component={GameShow}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
