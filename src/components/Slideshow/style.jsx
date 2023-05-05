import styled from "styled-components"
import colors from "../../styles/colors"

export const SlideshowStyle = styled.div`
    position: relative;
    height: 415px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;


    @media (max-width: 1024px) {
        height: 255px;
    }

    .slideshow_image {
        object-fit: cover;
        border-radius: 25px;
        overflow: hidden;
        object-position: center;
        height: 100%;
    }

    .slideshow_arrowBox {
        position: absolute;
        width: 100%;
        padding: 0 20px 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .slideshow_arrow {
        cursor: pointer;
        
        @media (max-width: 1024px) {
            height: 60px;
        }
        @media (max-width: 768px) {
            height: 40px;
        }
        @media (max-width: 480px) {
            height: 20px;
        }
    }

    .pictureCount {
        position: absolute;
        bottom: 25px;
        /* left: 50%; */
        width: 100%;

        p{
            font-family: Montserrat;
            font-size: 18px;
            font-weight: 500;
            line-height: 26px;
            letter-spacing: 0em;
            text-align: center;
            color: ${colors.white};
        }
        
    }

    
`