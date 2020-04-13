import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * Component for H1 Titles
 */
export default function TitleH1({children}){
    return (
        <h1>
            {children}
        </h1>
    );
};

TitleH1.propTypes = {
    children: PropTypes.node.isRequired
};

TitleH1.defaultProps = {
    children: {}
}