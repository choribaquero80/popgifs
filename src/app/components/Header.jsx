import React from 'react';
import PropTypes from 'prop-types';

import TitleH1 from './TitleH1';

/**
 * 
 * Component the will display a Title
 */
export default function Header({ settings, children }) {
    // The settings Obj provides different configurations for the component
    const { _className } = settings;
    return (
        <section className={`header ${_className}`}>
            <TitleH1>{children}</TitleH1>
        </section>
    );
};

Header.propTypes = {
    settings: PropTypes.shape({
        _className: PropTypes.string
    }),
    children: PropTypes.node.isRequired
};

Header.defaultProps = {
    settings: {
        _className: ''
    },
    children: {}
};