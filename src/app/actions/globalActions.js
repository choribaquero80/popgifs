import {
    SET_GLOBAL_NAME,
} from './actionTypes';

/**
 * Global Action functions, needed for handling properties that are neede across the App
 */

/**
 * 
 * @param {string} name Phrase used in the search  
 */
export const setGlobalName = name => {
    return {
        type: SET_GLOBAL_NAME,
        payload: name
    }
}
