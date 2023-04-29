import { useLocation } from "react-router-dom";

import logementList from '../../datas/logements.json'
import img_home from '../../assets/img_home.png'

import Banner from '../../styles/Banner';
import { Head } from "../Head";

import { BoxContainer, StyledBox } from "./style";
import { MainDiv } from "../../styles";

function Home() {
  document.title = 'Accueil'

    const location = useLocation().pathname
    const locationUrl = location + 'Accommodation/'
  
    return (
  
      <MainDiv>

        <Head title='Accueil' description={`Page d'accueil`}  />

        <Banner>
          <img src={img_home} alt='bord de mer'></img>
          <h1>Chez vous, partout et ailleurs</h1>
        </Banner>
  
        <BoxContainer className="boxContainer">
          {logementList.map((logement, index) =>

            <StyledBox className="box" key={`${logement.id}`}>
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
        
      </MainDiv>
    );
  }
  
  export default Home;