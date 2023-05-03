import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

// Style globale 
export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        text-decoration: none;
        color: #000000;
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 16px;
        margin: 0;
    }
`

// Permet de garder le footer en bas de page
export const BodyDiv = styled.div`
    height: 100vh; // Desktop
    height: 100svh; // Mobile
    display: flex;
    flex-direction: column;

`
// Div permettant de gérer les marges
export const MainDiv = styled.section`
    width: 86%;
    max-width: 1240px;
    min-width: 335px;
    margin: 0 auto;
    position: relative;

    @media (max-width: 768px) {
       width: 90%;
    }
`