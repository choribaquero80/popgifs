import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSearchById, getTrending } from '../actions/imageActions';

import ImageCarousel from './ImageCarousel';

/**
 * 
 * Container to hold and load the main image and call the carosel
 */
function ImageDetailScreen({ match, imageReducer, setImageItem, setTrending }) {
    const [title, setTitle] = useState('');
    const { selected, pendingForID } = imageReducer;
    const { params } = match;

    useEffect(() => {
        setImageItem(params.id);
        setTrending();
    }, [params , setImageItem, setTrending]);

    useEffect(() => {
        if (selected.length > 0 && selected.title !== '') {
            setTitle(selected[0].title);
        }
    }, [selected, pendingForID]);

    // emtpy validarion
    if (selected.length === 0 && pendingForID) return '';

    const url = () => {
        return selected.length === 0 && pendingForID === false ?
            'https://giphy.com/static/img/error_pages/text/oops.gif' :
            selected[0].images.original.url
    };

    return (
        <>
            <section className='imgTitle'>
                <Link to="/">{`< ${title}`}</Link>
            </section>
            <section className='main-image'>
                <img className="width-500" src={url()} alt={title} title={title} />
            </section>
            <section>
                See other popular images
            </section>
            <section>
                <ImageCarousel
                    originalId={selected.length > 0 ? selected[0].id : 0}
                />
            </section>
        </>
    );
};

ImageDetailScreen.propTypes = {
    match: PropTypes.object
};

ImageDetailScreen.defaultProps = {
    match: {}
};

function mapStateToProps(state, ownProps) {
    const { imageReducer } = state;
    return { imageReducer };
};

function mapDispatchToProps(dispatch, props) {
    return {
        setTrending: async () => {
            await dispatch(getTrending());
        },
        setImageItem: async (id) => {
            await dispatch(getSearchById(id));
        }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageDetailScreen); 