import logo from '../../assets/logo_white.png'
import { FooterContainer } from './style'


function Footer() {
    return (
        <FooterContainer>
            <img src={logo} alt="Kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterContainer>
    )
}

export default Footer

