import styled from "styled-components"
import colors from "../../styles/colors"

export const AccTitleContainer = styled.div`

    display: flex;
    justify-content: space-between;
    max-width: 1240px;
    margin: auto;
    
    h2, p {
        font-family: Montserrat;
        font-size: 36px;
        font-weight: 500;
        line-height: 51px;
        letter-spacing: 0em;
        text-align: left;
        color: ${colors.red};
        padding-bottom: -5px;
    }

    .AccTitleContainer-title_location {
        font-size: 18px;
        line-height: normal;
    }

    img {
        height: 64px;
        width: 64px;
        border-radius: 100%;
    }

    .AccTitleContainer-title {
        display: flex;
        flex-direction: column;
    }

    .AccTitleContainer-profile {
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .AccTitleContainer-profile_text {
        font-size: 18px;
        height: 52px;
        width: 93px;
        line-height: normal;
        text-align: right;
        margin-right: 10px;
        display: flex;
        align-items:center;
    }
`

export const TagRateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1240px;
    margin: auto;

    .tagContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 25px;
        gap: 20px;
        margin: 25px 0 25px 0;
    }
    .tag {
        min-width: 115px;
        padding: 5px 30px ;
        background: ${colors.red};
        border-radius: 10px;

        list-style: none;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        color: ${colors.white};
        
        }

    .rateContainer {
        display: flex;
        gap: 15px;
    }

    .star {
        height: 24px;
    }
`

export const AccAccordion = styled.div`
    display: flex;
    gap: 80px;
    max-width: 1240px;
    margin: auto;

    .fix_height {
        height: 250px;
    }

    p{
        font-size: 1.125rem;
        color: ${colors.red};
        font-weight: 400;
    }
`