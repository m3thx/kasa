import styled from 'styled-components'

import colors from '../styles/colors';

const StyledMenu = styled.div`
    width: 100%;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;

    .menuBanner {
        background-color: ${colors.backgroundRed};
        border-radius: 5px;
        height: 47px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 3.23% 0 1.77%;
        cursor: pointer;
    }

    h2 {
        color: ${colors.white};
        font-size: 1.5rem;

    }

    .menuContent {
        padding: 1.76%;
        height: fit-content;
        background-color: ${colors.backgroundGrey};
        font-size: 24px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
        border-radius: 5px;

    }

    .menuContent_hidden {
        visibility: hidden;
        padding: 0;
        height: 0;
    }

`

export default StyledMenu