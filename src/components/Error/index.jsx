import { Link } from 'react-router-dom'

import { Head } from "../Head";

import { StyledError } from './style'

import { MainDiv } from "../../styles";

function Error() {
    return (
        <MainDiv>
            <StyledError>
                <Head title={`Page d'erreur 404`} description='Page introuvable' />
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <nav>
                    <Link to="/" >Retourner sur la page d’accueil</Link>
                </nav>
            </StyledError>
        </MainDiv>
    )
}

export default Error