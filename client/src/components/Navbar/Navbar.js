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
            <Logo src={logo} alt="logo" />
            <NavContent><Link to="/">Home</Link></NavContent>

            {/* the dropdown menu. The items are generated separately in another component through array.map() */}
            {/* had to be done as Dropdown.Toggle instead of DropdownButton to allow for styling */}
            <NavContent>
                <Dropdown>
                    <Dropdown.Toggle as="div">
                        Products
                    </Dropdown.Toggle>
                        
                    <Dropdown.Menu>
                        {categories.map(category => {
                            return <NavCategory category={category} />
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </NavContent>

            <NavContent><Link to="/order-confirm/">Order History</Link></NavContent>
            <NavContent><Link to="/About">About Us</Link></NavContent>
            <NavContent><Link to="/Contact">Contact Us</Link></NavContent>
        </NavWrapper>
    )
}

const NavContent = styled.div `
    position: relative;
    background: white;
    margin-top: 47px;
    padding: 10px;
    /* margin-bottom: 1px; */
    border: red 1px solid;
`

const Logo = styled.img `
    height: 107px;
    position: absolute;
    left: 0;
`

const NavWrapper = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    bottom: 0;
    width: 100vw;

    /* background: red; */

    a {
        text-decoration: none;
        color: black;
    }
`
export default Navbar
