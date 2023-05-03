import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../../styles/colors'

export const HeaderContainer = styled.header`
    height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.backgroundLight};
    width: 86%;
    max-width: 1240px ;
    object-fit: contain;
    margin: 40px auto 60px;

    @media all and (max-width: 768px) {
        height: 47px;
        width: 90%;
        margin: 20px auto 27px;
    }

    img {
        object-fit: contain;
        height: 100%
    }
`

export const NavContainer = styled.nav`
    
`

export const StyledLink = styled(Link)`
    margin-left: 50px;
    color: ${colors.red};
    font-size: clamp(0.75rem, 0.4859rem + 1.1268vw, 1.5rem);

    &.active {
        text-decoration: underline
    }

    @media all and (max-width: 768px) {
        height: 47px;
        margin-left: 10px;
    }

`