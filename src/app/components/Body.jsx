import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

/**
 * 
 * Component in charge of rendenring the header section of the APP
 */
export default function Body({ children }) {
    return (
        <>
            <section className='grid'>
                <Header settings={{ _className: '' }}>Pop<span>Gifs</span>!</Header>
                <aside>{children}</aside>
            </section>
        </>
    );
};

Body.propTypes = {
    children: PropTypes.node.isRequired
};

Body.defaultProps = {
    children: {}
};