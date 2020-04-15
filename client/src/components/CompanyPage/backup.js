import React, {useEffect, useState} from 'react';
import {Route, useParams} from "react-router-dom";
import styled from "styled-components";

import ItemCard from '../ItemCard';

function CompanyPage() {
    const {companyId} = useParams();

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

    return (<>
        <h2>All products by {name} :</h2>
        <CompanyProducts>
            <Route>
            {companyItems.map(item => {
                return <ItemCard product={item} />
            })}
            </Route>
        </CompanyProducts>
    </>)
}

const CompanyProducts = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export default CompanyPage
