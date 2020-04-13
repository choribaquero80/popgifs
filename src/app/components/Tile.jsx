import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * 
 * Component that will display a Tile containing an linkable image
 */
export default function Tile({ id, url, imageTitle, height }) {
    return (
        <div className='thumbnail' style={{height: `${height}px`}}>
            <Link to={`/gif/${id}`}>
                <img src={url} alt={imageTitle} title={imageTitle} />
                <label className='truncate'>{imageTitle}</label>
            </Link>
        </div>
    );
};

Tile.propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
    imageTitle: PropTypes.string,
    height: PropTypes.string
};

Tile.defaultProps = {
    id: '',
    url: '',
    imageTitle: '',
    height: '50'
};