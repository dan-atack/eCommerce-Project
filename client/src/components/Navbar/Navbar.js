import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'

import logo from "../../assets/Shady-sellers.png"
import NavCategory from "./NavCategory"

function Navbar() {
    // used to render the dropdown menu
    const [categories, setCategories] = useState([]);

    // fetches all the categories from the back end
    useEffect(() => {
        fetch("/list/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])

    return (
        <NavWrapper>
            <Link to="/"><Logo src={logo} alt="logo" /></Link>
            <Link to="/"><NavContent>Home</NavContent></Link>

            {/* the dropdown menu. The items are generated separately in another component through array.map() */}
            {/* had to be done as Dropdown.Toggle (old method) instead of DropdownButton (new method) to allow for styling */}
            <Dropdown>
                <Dropdown.Toggle as={NavContent}>
                    Products
                </Dropdown.Toggle>
                    
                <Dropdown.Menu>
                    {categories.map(category => {
                        return <NavCategory category={category} />
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Link to="/order-confirm/search"><NavContent>Order History</NavContent></Link>
        </NavWrapper>
    )
}

const NavContent = styled.div `
    padding: 10px;
    margin: 56px 10px 0px;
    font-size: 1.2em;
    color: lightgray;
    transition: background-color 500ms;

    &:hover {
        color: black;
        border-bottom: crimson solid 2px;
        background-color: lightgray;
    }
`

const Logo = styled.img `
    height: 107px;
    position: absolute;
    left: 0;
`

const NavWrapper = styled.div `
    display: flex;
    position: relative;
    justify-content: flex-end;
    z-index: 1;

    a {
        text-decoration: none;
        color: black;
    }
`
export default Navbar
