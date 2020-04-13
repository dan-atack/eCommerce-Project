import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import styled from "styled-components"

// I had to use a onMouseEnter event rather than an onClick event because 
// the <Link> component is too fast and would not wait for a state variable.
// 
// I attempted to use a regular variable but for whatever reason it refused
// to recognize that variable. Maybe the value was lost during the link redirect?
// -Rony.

function NavCategory({category}) {
    const [redirect, setRedirect] = useState("");

    return (<>
        <Category onMouseEnter={(e) => {
            setRedirect(e.target.textContent);
            }}>
                <Link to={`/category/${redirect}`}>
                    <Dropdown.Item as="div">{category}</Dropdown.Item>
                </Link>
        </Category>
    </>)
}

const Category = styled.div `
    width: 175px;
    padding: 10px;
    border: black 1px solid;
    background: whitesmoke;

    &:hover {
        background: gray;
    }
`

export default NavCategory
