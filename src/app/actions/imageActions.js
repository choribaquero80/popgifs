import * as actionTypes from './actionTypes';
import * as giphyAPI from '../lib/giphyAPI';

/**
 * Global Action functions, needed for handling properties that are neede across the App
 */

/**
 * Used to query the API in order to get a list of items based on a search phase
 * @param {string} term Term used to search in the API
 */
export const getSearchByName = term => async dispatch => {
    dispatch({
        type: actionTypes.GET_SEARCH_REQUEST
    });
    try {
        const results = await giphyAPI.searchByName(term);
        dispatch({
            type: actionTypes.GET_SEARCH_SUCCESS,
            payload: results
        });
    } catch (e) {
        dispatch({
            type: actionTypes.GET_SEARCH_FAILURE,
            payload: e
        });
    }
};

/**
 * Used to get an specific elemen from the API
 * @param {string} id ID used to search in the API
 */
export const getSearchById = id => async dispatch => {
    dispatch({
        type: actionTypes.GET_SEARCH_ID_REQUEST
    });
    try {
        const results = await giphyAPI.searchById(id);
        dispatch({
            type: actionTypes.GET_SEARCH_ID_SUCCESS,
            payload: results.data
        });
    } catch (e) {
        dispatch({
            type: actionTypes.GET_SEARCH_ID_FAILURE,
            payload: e
        });
    }
};

/**
 * Used to get trending elements from the API
 */
export const getTrending = () => async dispatch => {
    dispatch({
        type: actionTypes.GET_TRENDING_REQUEST
    });
    try {
        const results = await giphyAPI.getTrending();
        dispatch({
            type: actionTypes.GET_TRENDING_SUCCESS,
            payload: results.data
        });
    } catch (e) {
        dispatch({
            type: actionTypes.GET_TRENDING_FAILURE,
            payload: e
        });
    }
};