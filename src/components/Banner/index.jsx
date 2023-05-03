import { BannerContainer, BannerVariantContainer } from "./style"


export const Banner = ({src, alt, h1}) => {
    return (
        <BannerContainer>
            <img src={src} alt={alt}></img>
            <h1>{h1}</h1>
        </BannerContainer>

    )
}

// export const BannerVariant = (img) {
export const BannerVariant = ({src, alt}) => {
    return (
        <BannerVariantContainer>
            <img src={src} alt={alt}></img>
        </BannerVariantContainer>

    )
}