import React, { useRef } from 'react';

import { connect } from 'react-redux';
import { getSearchByName } from '../actions/imageActions';
import { setGlobalName } from '../actions/globalActions';

/**
 * 
 * Container for the search bar
 */
function SearchBar({ store, onSearchByName }) {
    const targetRef = useRef();

    const handleOnClick = () => {
        onSearchByName(targetRef.current.value)
    }

    return (
        <section className='searchBar'>
            <label htmlFor="search">Search your interests</label>
            <div>
                <input
                    ref={targetRef}
                    type="text"
                    name="search"
                    id="search"
                    className="Input" />
                <button
                    className="search-button"
                    onClick={handleOnClick}
                >
                    Search
            </button>
            </div>
        </section>
    );
};

function mapStateToProps(state, ownProps) {
    const store = state;
    return { store };
};

function mapDispatchToProps(dispatch, props) {
    return {
        onSearchByName: async (name) => {
            dispatch(setGlobalName(name));
            await dispatch(getSearchByName(name));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar); 