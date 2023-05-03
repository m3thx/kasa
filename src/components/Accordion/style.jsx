import styled from 'styled-components'

import colors from '../../styles/colors';

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
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
    }

    h2 {
        color: ${colors.white};
        font-size: clamp(0.8125rem, 0.5704rem + 1.0329vw, 1.5rem);
        &.variant{
            font-size: clamp(0.8125rem, 0.7025rem + 0.4695vw, 1.125rem);
            font-weight: 400;
        }
    }

    .menuContent {
        padding: 1.76%;
        /* max-height: 249px; */
        background-color: ${colors.backgroundGrey};
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-inline: 20px;
        
        &.variant {
            height: 260px;
        }

    }

    .menuContent_hidden {
        visibility: hidden;
        padding: 0;
        height: 0;
    }

    .arrow {
        transition: all 330ms ease-in-out;
    }

    .arrow_up {
        transform: rotate(180deg);
    }

`

export default StyledMenu