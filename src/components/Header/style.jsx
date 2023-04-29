import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../../styles/colors'

export const HeaderContainer = styled.header`
    min-height: 170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.backgroundLight};
    margin: 0 7%;
    max-width: 1240px;

    @media all and (min-width: 1440px) {
        width: 1420px;
        margin: 0 auto;
    }
    img {
        height: 68px
    }
`

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: space-between;
`

export const StyledLink = styled(Link)`
    margin-left: 50px;
    color: ${colors.red};
    font-size: 1.5rem;

    &.active {
        text-decoration: underline
    }
`