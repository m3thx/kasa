import { useLocation } from "react-router-dom";

import logo from '../../assets/logo_red.png'
import { HeaderContainer, NavContainer, StyledLink } from "./style";


function Header() {
    // Récupération de url de la page affichée
    const location = useLocation().pathname
    
    return (
        <>
            <HeaderContainer>
                <img src={logo} alt="Kasa logo" />
                <NavContainer>
                    {/* Ajout de classe si location correspond à l'url de la page */}
                    <StyledLink className={location === "/" ? "active" : ""} to="/" >Accueil</StyledLink>
                    <StyledLink className={location === "/About" ? "active" : ""} to="/About">A propos</StyledLink>
                </NavContainer>
            </HeaderContainer>
        </>
    )
}

export default Header