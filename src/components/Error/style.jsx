import styled from 'styled-components'

import colors from '../../styles/colors'


export const StyledError = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    left: 0px;
    top: 0px;
    border-radius: nullpx;

    h1 {
        font-family: Montserrat;
        font-size: 288px;
        font-weight: 700;
        line-height: 411px;
        letter-spacing: 0em;
        text-align: center;
        color: ${colors.red};
    }

    p {
        font-family: Montserrat;
        font-size: 36px;
        font-weight: 500;
        line-height: 51px;
        letter-spacing: 0em;
        text-align: left;
        color: ${colors.red};
    }

    nav{
        margin-top: 180px;
    }

    a {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: ${colors.red};
        text-decoration: underline;
    }

`