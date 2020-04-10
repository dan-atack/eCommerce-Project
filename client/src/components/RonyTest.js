import React, { useState, useEffect } from 'react';

function RonyTest() {
    const [featured, setFeatured] = useState([]);
    const [onSale, setOnSale] = useState([]);
    const [companyItems, setCompanyItems] = useState([]);

    useEffect(() => {
    fetch('/products/search/fitness')
        .then(res => res.json())
        .then(data => {
            // const {sale, feature} = data;
            // setOnSale(sale);
            // setFeatured(feature);

            setCompanyItems(data);
            // console.log(data);
        });
    }, []);

    // return <div>hi</div>

    return <>
    {companyItems.map(item => {
        return <div key={Math.random() * 1000000000}> {item.name} </div>
    })}</>
}

export default RonyTest;
