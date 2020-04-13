import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import imageReducer from '../reducers/imageReducer';
import globalReducer from '../reducers/globalReducer';

export default createStore(
    combineReducers({
        imageReducer,
        globalReducer
    }),
    {},
    applyMiddleware(thunk)
);