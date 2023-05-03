import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

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
        font-size: 16px;
        margin: 0;
    }
`

export const BodyDiv = styled.div`
    height: 100vh;
    height: 100svh;
    display: flex;
    flex-direction: column;

`
export const MainDiv = styled.section`
    width: 86%;
    max-width: 1240px;
    margin: 0 auto;
    position: relative;

    @media (max-width: 768px) {
       width: 90%;
    }
`