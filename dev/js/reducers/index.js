import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import newsCarousel from './newsCarousel'

const allReducers = combineReducers({
    routing: routerReducer,
    newsCarousel: newsCarousel
});

export default allReducers;