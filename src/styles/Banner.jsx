import styled from 'styled-components'
import colors from '../styles/colors';

const Banner = styled.div`
    height: 220px;
    width: 100%;
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
    font-size: 3rem;
    }
`

export default Banner