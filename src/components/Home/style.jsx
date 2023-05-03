import styled from 'styled-components'
import colors from '../../styles/colors';

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    background-color: ${colors.backgroundGrey};
    gap: max(60px) 50px;
    padding: 50px 50px 50px 50px;
    padding-left: max(50px, 20px);
    margin-bottom: 40px;
    border-radius: 25px;

    img {
        height: 68px;
    }

    @media all and (max-width: 768px) {
      background-color: ${colors.backgroundLight};
      /* padding: 20px 0px 0 20px; */
      justify-content: baseline;
      padding: 20px 0;
    }

    @media all and (max-width: 1024px) {
      gap: 20px;
    }
`

export const StyledBox = styled.div`
    height: 340px;
    width: 340px;
    flex-grow: 1;
    
    // gradient clair
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    // gradient rouge
    /* background: linear-gradient(180deg, ${colors.red} 0%, rgba(0, 0, 0, 0.5) 100%); */
    border-radius: 10px;
    position: relative;
    overflow-y: hidden;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }

    @media all and (max-width: 768px) {
      min-width: 335px;
      height: 255px;
    }

    @media all and (max-width: 1024px) {
      flex-grow: 1;
    }

    img {
      height : 100%; 
      width : 100%;
      object-fit: cover;
      border-radius: 10px;
      opacity: 0.6;


    }

    h2{
      height: 52px;
      font-size: 18px;
      color: ${colors.white};
      line-height: 26px;
      position: absolute;
      margin: 0 5.88%;
      bottom: 5.88%;
    }
    
    a{
      overflow: hidden;
    }
`