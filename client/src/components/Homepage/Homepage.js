import React from 'react'
import { useSelector } from 'react-redux';
import FetchInitItems from '../StateTests/FetchInitItems';
import { parseInitialItems, displayLoadState } from '../../reducers';

import ItemCard from '../ItemCard';

function Homepage() {
    // GET INITIAL ITEMS FROM SERVER INTO STATE, THEN FROM STATE INTO AN ARRAY THAT WE CAN MAP:
    FetchInitItems();
    let catalogItems = useSelector(parseInitialItems);
    let loadStatus = useSelector(displayLoadState);

    return (
        <div>
            <h2>Home</h2>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                Sale Items:
                {loadStatus === 'complete' ? (
                    catalogItems.saleItems.map((item) => {
                        return <ItemCard product={item} />;
                    })
                ) : (
                    <></>
                )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                Featured Items:
                {loadStatus == 'complete' ? (
                    catalogItems.featuredItems.map((item) => {
                        return <ItemCard product={item} />;
                    })
                ) : (
                    <></>
                )}
                </div>
            </div>
        </div>
    )
}

export default Homepage
