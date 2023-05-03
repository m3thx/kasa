import styled from "styled-components"

export const SlideshowStyle = styled.div`
    position: relative;
    height: 415px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1024px) {
        height: 335px;
    }

    .slideshow_image {
        object-fit: cover;
        border-radius: 25px;
        overflow: hidden;
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

    }
`

