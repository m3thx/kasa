import styled from 'styled-components'
import colors from '../../styles/colors';

export const BannerContainer = styled.div`
    height: 220px;
    max-width: 1240px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #000000;
    border-radius: 25px;
    position: relative;
    overflow: hidden;
    margin-bottom: 45px;
    
    img {
      width: 100%;
      object-fit: fill;
      mix-blend-mode: exclusion;
      opacity: 0.6;
    }
    
    h1 {
    color: ${colors.white};
    position: absolute;
    font-size: clamp(1.5rem, 0.9718rem + 2.2535vw, 3rem);
    text-align: center;
    width: 100%;
    padding: 0 15px;

    }
    @media all and (max-width: 1024px) {
        height: 160px;
    }

    @media all and (max-width: 768px) {
        height: 110px;
        margin-bottom: 0;
    }
    @media all and (max-width: 480px) {
      h1{
        font-size: 24px;
        width: 220px;
        text-align: left;
        left : 16px;
        padding: 0;
      }  
    }
    
`

export const BannerVariantContainer = styled(BannerContainer)`
  @media all and (max-width: 768px) {
        margin-bottom: 20px;
    }
  
  @media all and (max-width: 1024px) {
        height: 223px;
    
  }

`

