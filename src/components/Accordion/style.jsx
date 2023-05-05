import styled from 'styled-components'

import colors from '../../styles/colors';

export const StyledMenuAccomodation = styled.div`
    width: 100%;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;

    .menuBanner {
        background-color: ${colors.backgroundRed};
        border-radius: 5px;
        height: clamp(1.875rem, 1.3908rem + 2.0657vw, 3.25rem);
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
        font-size: clamp(0.8125rem, 0.7025rem + 0.4695vw, 1.125rem);
    }

    .menuContent {
        padding: 3.4%;
        height: 249px;
        background-color: ${colors.backgroundGrey};
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .menuContent > p {
        color: ${colors.red};
        font-size: clamp(0.75rem, 0.618rem + 0.5634vw, 1.125rem);
        font-weight: 400;
        line-height: 180%;
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

    @media (max-width: 768px) {
        .menuBanner {
            height: 30px;
        }
        .menuContent {
            height: fit-content;
            min-height: 140px;
            padding: 3% 2.05% 0% 3.4%;
            line-height: 140%;
            justify-content: flex-start;
        }

        .menuContent > p {
            line-height: 142%;
        }
    }
`

export const StyledMenuAbout = styled(StyledMenuAccomodation)`
    .menuBanner {
        height: clamp(1.875rem, 1.5009rem + 1.5962vw, 2.9375rem);
    }

    h2 {
        font-size: clamp(0.8125rem, 0.5704rem + 1.0329vw, 1.5rem);
        font-weight: 400;
    }
    .menuContent {
        height: max-content;
        min-height: 140px;
        padding: 2.64% 2.64% 2% 1.9% ;
    }

    .menuContent > p{
        font-size: clamp(0.75rem, 0.4859rem + 1.1268vw, 1.5rem);
        font-weight: 400;
        font-family: Montserrat;
    }

    @media (max-width: 768px) {
        .menuContent {
            padding: 5% 2.05% 2% 3.4% ;
        }
    }

`

