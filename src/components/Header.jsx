import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../styles/colors'
import logo from '../assets/logo_red.png'

import { useLocation } from "react-router-dom";
// import { useState } from 'react';

const HeaderContainer = styled.div`
    height: 170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.backgroundLight};
    margin: 0 7% 0 7%;

    img {
        height: 68px
    }
`

const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: space-between;
`

const StyledLink = styled(Link)`
    margin-left: 100px;
    color: ${colors.red};
    font-size: 24px;

    &.active {
        text-decoration: underline
    }
`

function Header() {
    const location = useLocation().pathname
    return (
        <HeaderContainer>
            <img src={logo} alt="Kasa logo" />
            <NavContainer>
                <StyledLink className={location === "/" ? "active" : ""} to="/" >Accueil</StyledLink>
                <StyledLink className={location === "/About" ? "active" : ""} to="/About">A propos</StyledLink>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header