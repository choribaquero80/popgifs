import { SET_GLOBAL_NAME } from '../actions/actionTypes';

const initialState = {
    name: ''
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GLOBAL_NAME:
            return {
                ...state, name: action.payload
            };

        default:
            return state;
    }
};

export default globalReducer;