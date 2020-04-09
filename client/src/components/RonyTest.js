import React, { useState, useEffect } from 'react';

function RonyTest() {
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
    fetch('/products/Fitness')
        .then(res => res.json())
        .then(data => setFeatured(data));
    }, []);

    // return <div>hi</div>

    return <>{featured.map(item => {
        return <div key={Math.random() * 1000000000}> {item.name} </div>
    })}</>
}

export default RonyTest;
