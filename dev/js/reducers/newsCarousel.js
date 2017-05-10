import {LOAD_CAROUSEL_NEWS} from '../actions/constants'

let initState = [{}];
export default function (state = initState, action){
    switch(action.type) {
        case LOAD_CAROUSEL_NEWS:
            return action.payload;
        
        default:
            return state;
    }
}
