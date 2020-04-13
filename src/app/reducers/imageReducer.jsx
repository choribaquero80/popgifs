import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: {},
  selected: [],
  pending: true,
  pendingForID: false,
  trending: []
}

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_REQUEST:
      return { ...state, pending: true };
    case actionTypes.GET_SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        selected: [],
        pending: false
      };
    case actionTypes.GET_SEARCH_FAILURE:
      return state;

    case actionTypes.GET_SEARCH_ID_REQUEST:
      return { ...state, pendingForID: true };
    case actionTypes.GET_SEARCH_ID_SUCCESS:
      return {
        ...state,
        selected: [action.payload],
        pendingForID: false
      };
    case actionTypes.GET_SEARCH_ID_FAILURE:
      return state;

    case actionTypes.GET_TRENDING_REQUEST:
      return state;
    case actionTypes.GET_TRENDING_SUCCESS:
      return {
        ...state,
        trending: action.payload,
        pending: false
      };
    case actionTypes.GET_TRENDING_FAILURE:
      return state;
    default:
      return state;
  }
};

export default imageReducer;