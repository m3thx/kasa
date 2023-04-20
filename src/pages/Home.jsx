import styled from 'styled-components'
import { useLocation } from "react-router-dom";

import colors from '../styles/colors';
import logementList from '../datas/logements.json'
import img_home from '../assets/img_home.png'
import Banner from '../styles/Banner';

const HomeContainer = styled.div`
    margin: 0 7% 0 7%;
`

// const Banner = styled.div`
//     height: 220px;
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     background: #000000;
//     border-radius: 25px;
//     position: relative;
//     overflow: hidden;
//     margin-bottom: 45px;
    
  
//     img {
//       width: 100%;
//       object-fit: fill;
//       mix-blend-mode: exclusion;
//       opacity: 0.6;
      
//     }
    
//     h1 {
//     color: ${colors.white};
//     position: absolute;
//     font-size: 3rem;
//     }
// `

const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    background-color: ${colors.backgroundGrey};
    gap: min(10px);
    padding: 50px;
    border-radius: 25px;

    img {
        height: 68px
    }
`
const StyledBox = styled.div`
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

function Home() {
  console.log(logementList)
  const location = useLocation().pathname
  const locationUrl = location + 'Accommodation/'

  return (
    <HomeContainer>

      <Banner>
        <img src={img_home} alt='bord de mer'></img>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>

      <BoxContainer>
        {logementList.map((logement, index) =>
          
          <StyledBox key={`${logement.id}`}>
            <a href={locationUrl+`${logement.id}`} >
              <img src={`${logement.cover}`} alt={`${logement.title}`}>
                </img>
                </a>
            <div>
              {`${logement.title}`}
            </div>
          </StyledBox>
        )}

      </BoxContainer>
      
    </HomeContainer>
  );
}

export default Home;
