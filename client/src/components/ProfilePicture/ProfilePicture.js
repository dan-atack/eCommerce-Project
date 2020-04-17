// component is used to export user's profile picture

import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

import { useAuth0 } from "../../auth0/react-auth0-spa";

function ProfilePicture() {
    const COLORS = useSelector((state) => state.designSetting);

    const StyledPicture = styled.img `
    margin: 5px 10px;
    height: 45px;
    border-radius: 100px;

    &:hover {
        border: ${COLORS.main} 3px solid;
    }
`
    const {user} = useAuth0();

    let picSrc;
    if (user) picSrc = user.picture;

    return (
        <Link to="/profile"><StyledPicture src={picSrc || ""} alt="profile" /></Link>
    )
}

export default ProfilePicture
