import React from 'react';

import SearchBar from '../containers/SearchBar';
import ResultsGrid from '../containers/ResultsGrid.jsx';

/**
 * Component that renders a Search Bar and the Result Grid
 */
export default function ImagesListScreen() {
    return (
        <>
            <SearchBar />
            <ResultsGrid />
        </>
    );
};