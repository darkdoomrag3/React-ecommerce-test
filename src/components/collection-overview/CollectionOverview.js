import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.style.scss';
import Preview from '../preview-collection/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selector';


const CollectionOverview = ({ collections }) => (

    <div className='collection-overview'>

        {collections.map(({ id, ...otherCollectionProps }) => (
            <Preview key={id} {...otherCollectionProps} />
        ))

        }


    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);
