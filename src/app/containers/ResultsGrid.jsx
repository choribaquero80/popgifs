import React from 'react';

import { connect } from 'react-redux';

import Tile from '../components/Tile';

/**
 * 
 * Container for the image results as a grid
 */
function ResultsGrid({ imageReducer, globalReducer }) {
    if (Object.entries(imageReducer.results).length === 0 &&
        globalReducer.name === '') return '';

    if (imageReducer.pending) {
        return <h2>LOADING...</h2>;
    }

    const data = typeof imageReducer.results.data !== 'undefined' ? imageReducer.results.data : [];

    if (data.length === 0) {
        return <h3>{`No GIFs found for ${globalReducer.name}`}</h3>
    }

    const populateGrid = () => {
        let populatedGrid = [];
        populatedGrid = data.map(item => {
            const id = item.id,
                key = `item-${id}`,
                url = item.images.fixed_width_downsampled.url,
                imageTitle = item.title,
                height = item.images.fixed_width_downsampled.height;
                
            return <Tile
                key={key}
                id={id}
                url={url}
                imageTitle={imageTitle}
                height={height}
            />;
        });

        return populatedGrid;
    }

    return (
        <section className='resulsGrid'>
            {populateGrid()}
        </section>
    );
};

function mapStateToProps(state, ownProps) {
    const { imageReducer, globalReducer } = state;
    return { imageReducer, globalReducer };
};

export default connect(
    mapStateToProps
)(ResultsGrid); 