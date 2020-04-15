import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import styled from "styled-components"

function NavCategory({category}) {
    const [redirect, setRedirect] = useState("");

    return (<>
        {/* Link is faster than onClick, used onMouseEnter and state instead */}
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
        background: lightgray;
    }
`

export default NavCategory
