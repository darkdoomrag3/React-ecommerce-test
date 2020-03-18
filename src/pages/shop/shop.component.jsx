import React from 'react';
import { connect } from 'react-redux';
import Preview from '../../components/preview-collection/preview-collection.component';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';



const ShopPage = ({ collections }) => (

    <div className='shop-page'>
        
    <CollectionOverview/>   

    </div>

)


export default  ShopPage;
