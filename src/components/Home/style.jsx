import styled from 'styled-components'
import colors from '../../styles/colors';



export const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    background-color: ${colors.backgroundGrey};
    gap: min(20px);
    padding: 50px 50px 0 50px;
    padding-left: max(50px, 20px);
    margin-bottom: 40px;
    border-radius: 25px;

    img {
        height: 68px;
    }
`

export const StyledBox = styled.div`
    height: 340px;
    width: 340px;
    // gradient clair
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    // gradient rouge
    /* background: linear-gradient(180deg, ${colors.red} 0%, rgba(0, 0, 0, 0.5) 100%); */
    border-radius: 10px;
    margin-bottom: 50px;
    position: relative;
    overflow-y: hidden;

    img {
      height : 100%; 
      max-width : 100%;
      object-fit: cover;
      border-radius: 10px;
      opacity: 0.6;
    }

    div{
      height: 52px;
      font-size: 1.125rem;
      color: ${colors.white};
      line-height: 26px;
      position: absolute;
      margin: 0 5.88%;
      bottom: 5.88%;
      mix-blend-mode: lighten;      
    }
    
    a{
      overflow: hidden;
    }
`