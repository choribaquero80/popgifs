import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Flickity from "react-flickity-component";

import Tile from '../components/Tile';

/**
 * 
 * Container to hold and load images as a carousel
 */
function ImageCarousel({ originalId, imageReducer }) {
    const [data, setData] = useState([]);
    const { results, trending } = imageReducer;

    useEffect(() => {
        setData(typeof results.data !== 'undefined' ? results.data : (
            trending.length > 0 ? trending : []));
    }, [results.data, trending]);

    if (data.length === 0) {
        return '';
    }

    /**
     * method for building the images to display
     */
    const showSuggestions = () => {
        let suggestions = [];
        data.forEach(element => {
            if (originalId === element.id) {
                return;
            }
            const id = element.id,
                key = `item-${id}`,
                url = element.images.fixed_width_downsampled.url,
                imageTitle = element.title,
                height = element.images.fixed_width_still.height;

            suggestions.push(
                <Tile
                key={key}
                id={id}
                url={url}
                imageTitle={imageTitle}
                height={height}
            />
            );
        });
        return suggestions;
    };

    return (
        <Flickity
            options={{
                initialIndex: 1,
                pageDots: false,
                cellAlign: 'left'
            }}
        >
            {showSuggestions()}
        </Flickity>
    );
};


function mapStateToProps(state, ownProps) {
    const { imageReducer } = state;
    return { imageReducer };
};

export default connect(
    mapStateToProps
)(ImageCarousel); 