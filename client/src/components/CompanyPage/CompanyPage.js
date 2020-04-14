import React, {useEffect, useState, useParams} from 'react'
import {BrowserRouter as Router} from "react-router-dom"

import ItemCard from '../ItemCard';

function CompanyPage() {
    const companyId = useParams();

    const [companyItems, setCompanyItems] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetch(`/companyName/${companyId}`)
            .then(res => res.json())
            .then(data => setName(data.companyName))
            .then(
                fetch(`/products/sort/${companyId}`)
                    .then(res => res.json())
                    .then(data => setCompanyItems(data))
            )
    }, [companyId])

    return (
        <div>
            <Router>
            <h2>All products by {name} :</h2>
            {companyItems.map(item => {
                return <ItemCard item={item} />
            })}
            </Router>
        </div>
    )
}

export default CompanyPage
