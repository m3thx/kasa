import styled from "styled-components"
import colors from "../../styles/colors"

export const AccTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
 
    h2 {
        font-size: clamp(1.125rem, 0.7289rem + 1.6901vw, 2.25rem);
        text-align: left;
        color: ${colors.red};
    }
    
    p {
        color: ${colors.red};
    }

    .AccTitleContainer-title {
        display: flex;
        flex-direction: column;
        line-height: 51px;
    }

    .AccTitleContainer-title_location {
        font-size: 18px;
        line-height: normal;
        margin-top: 5px;
    }

    .AccTitleContainer-profileRate {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .AccTitleContainer-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        word-spacing: 100px;
    }

    .AccTitleContainer-profile_text {
        font-size: clamp(0.75rem, 0.618rem + 0.5634vw, 1.125rem);
        height: 52px;
        width: 90px;
        line-height: normal;
        text-align: right;
        margin-right: 10px;
        display: flex;
        align-items:center;
    }

    img {
        height: 64px;
        width: 64px;
        border-radius: 100%;
    }

    .rateContainer {
        max-width: 196px;
        display: flex;
        gap: 15px;
        padding-bottom: 40px;
    }

    .star {
        height: 24px;
        /* margin-top: 16px; */

    }

    @media (max-width: 768px) {
        margin-top: 15px;

        .AccTitleContainer-title {
        line-height: 26px;
        }

        img {
        height: 32px;
        width: 32px;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    
        .AccTitleContainer-profile_text {
            height: 33px;
        }
        .AccTitleContainer-profileRate {
            flex-direction: row-reverse;
            align-items: center;
            margin-bottom: 16px;
        }
        .rateContainer {
            padding-bottom: 0px;
            gap: 6px;
        }
        .star {
            width: 13px;
            height: 13px;

        }
    }
`

export const TagRateContainer = styled.div`
    display: flex;
    gap: 10px;
    max-width: 1240px;
    margin: 20px 0 24px;

    .tag {
        display: flex;
        align-items: center;
        padding: 5px 30px ;
        background: ${colors.red};
        border-radius: 10px;
        list-style: none;
        font-family: Montserrat;
        font-size: clamp(0.625rem, 0.537rem + 0.3756vw, 0.875rem);
        text-align: center;
        color: ${colors.white};
        
        @media (max-width: 768px) {
        height: 18px;
        padding-left: max(3%, 5px);
        padding-right: max(3%, 5px);
        }
    }

   
`

export const AccAccordion = styled.div`
    display: flex;
    gap: 75px;
    max-width: 1240px;
    margin: auto;
    padding-bottom: 30px;

    .fix_height {
        height: 250px;
    }

    p{
        font-size: 1.125rem;
        color: ${colors.red};
        font-weight: 400;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 20px;
        }
`