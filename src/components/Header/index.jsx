import { useLocation } from "react-router-dom";

import logo from '../../assets/logo_red.png'
import { HeaderContainer, NavContainer, StyledLink } from "./style";


function Header() {
    const location = useLocation().pathname
    return (
        <>
            <HeaderContainer>
                <img src={logo} alt="Kasa logo" />
                <NavContainer>
                    <StyledLink className={location === "/" ? "active" : ""} to="/" >Accueil</StyledLink>
                    <StyledLink className={location === "/About" ? "active" : ""} to="/About">A propos</StyledLink>
                </NavContainer>
            </HeaderContainer>
        </>
    )
}

export default Header