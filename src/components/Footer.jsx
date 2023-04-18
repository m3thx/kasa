import styled from 'styled-components'

import colors from '../styles/colors'
import logo from '../assets/logo_white.png'

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    background-color: ${colors.backgroundDark};
    height:200px;
    margin-top: 50px;
    
    padding-top: 65px;

    p {
        font-size: 1.5rem;
        color: ${colors.white};
        padding-top: 30px;
    }
`

function Footer() {
    return (
        <FooterContainer>
            <img src={logo} alt="Kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterContainer>

    )
}

export default Footer

