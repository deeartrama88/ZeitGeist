import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { applyMiddleware, createStore } from 'redux'
import allReducers from './reducers'
import MainWrap from './containers/MainWrap'
import News from './containers/NewsPage/News'
import Main from './containers/MainPage/Main'

const loggerMiddleware = createLogger();

const store = createStore(
    allReducers,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )

);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MainWrap} >
                <IndexRoute component={Main}/>
                <Route path="news" component={News} />
                <Route path="main" component={Main} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
