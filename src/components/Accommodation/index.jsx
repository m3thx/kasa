import { useParams } from 'react-router-dom'

import { AccTitleContainer, TagRateContainer, AccAccordion } from './style'
import { MainDiv } from "../../styles";

import starWhite from '../../assets/starWhite.png'
import starRed from "../../assets/starRed.png"

import Accordion from '../Accordion/index'
import { Slideshow, } from '../Slideshow'
import Error from '../Error'
import { Head } from "../Head";

import logementList from '../../datas/logements.json'



function Accommodation() {
    // destructuration permet de recueillir directement l'id dans l'url
    let { idAccommodation } = useParams()

    // recherche du logement à afficher en fonction de son id
    const accommodation = logementList.find(logement => idAccommodation === logement.id)
    // console.log(accommodation)

    // gestion des erreurs try / catch et renvoi de page 404
    try {
        return (
            
            <MainDiv>
                <Head title={`Offre d'hébergement`} description={`Page détaillant les caractériques d'une offre d'hébergement`} />
                <Slideshow {...accommodation} />
                <div>
                    <img src='' alt=''></img>
                    <AccTitleContainer>
                        <div className='AccTitleContainer-title'>
                            <h2 className='AccTitleContainer-title_title'>{`${accommodation.title}`}</h2>
                            <p className='AccTitleContainer-title_location'>{`${accommodation.location}`}</p>
                        </div>
                        <div className='AccTitleContainer-profile'>
                            <p className='AccTitleContainer-profile_text'>{`${accommodation.host.name}`}</p>
                            <img src={`${accommodation.host.picture}`} alt="Profil" />
                        </div>
                    </AccTitleContainer>
                    <TagRateContainer>
                        <div className='tagContainer' >
                            {accommodation.tags.map((content, index) =>
                                <li key={accommodation + index} className='tag'> {content}</li>
                            )}
                        </div>
                        <div className='rateContainer' >
                            <img src={accommodation.rating > 0 ? starRed : starWhite} alt="star" className='star' />
                            <img src={accommodation.rating > 1 ? starRed : starWhite} alt="star" className='star' />
                            <img src={accommodation.rating > 2 ? starRed : starWhite} alt="star" className='star' />
                            <img src={accommodation.rating > 3 ? starRed : starWhite} alt="star" className='star' />
                            <img src={accommodation.rating > 4 ? starRed : starWhite} alt="star" className='star' />
                        </div>
                    </TagRateContainer>
                    <AccAccordion >
                        <Accordion key={accommodation.id + Math.random() * 100} title='Description' content={accommodation.description} className='variant' />
                        <Accordion key={accommodation.id + Math.random() * 100} title='Équipements' content={accommodation.equipments} className='variant'/>
                    </AccAccordion>
                </div>
            </MainDiv>
        )
    } catch (error) {
        return <Error />
    }
}

export default Accommodation