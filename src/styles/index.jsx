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
        margin: 0;
        
        @media all and (min-width: 1440px) {
        font-size: 18px;
        }
        @media all and (max-width: 800px) {
        font-size: 12px;
        }
    }
`

export const BodyDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const MainDiv = styled.section`
    margin: 0 7%;
    max-width: 1240px;
    @media all and (min-width: 1440px) {
        width: 1420px;
        margin: 0 auto;
    }
`