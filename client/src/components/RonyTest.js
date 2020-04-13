import React, { useState, useEffect } from 'react';

function RonyTest() {
    const [featured, setFeatured] = useState([]);
    const [onSale, setOnSale] = useState([]);
    const [companyItems, setCompanyItems] = useState([]);

    useEffect(() => {
    fetch('/history/351433')
        .then(res => res.json())
        .then(data => {
            // const {sale, feature} = data;
            // setOnSale(sale);
            // setFeatured(feature);

            // setCompanyItems(data);
            console.log(data);
        })

    const test = {order:{
        cartItems: [
            { 
                "quantity": '2',
                "name": "Belkin GS5 Sport Fit Armband, Black F8M918B1C00",
                "price": "$24.99",
                "body_location": "Arms",
                "category": "Fitness",
                "id": 6544,
                "imageSrc": "data:image/jpeg",
                "numInStock": 9,
                "companyId": 16384
            },
        ],
    }, };

    fetch("/purchase", {
        method: "POST",
        body: JSON.stringify(test),
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);

    

    // return <div>hi</div>

    return <>
    {companyItems.map(item => {
        return <div key={Math.random() * 1000000000}> {item.name} </div>
    })}</>
}

export default RonyTest;
