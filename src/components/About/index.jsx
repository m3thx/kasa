import Banner from '../../styles/Banner';

import img_about from '../../assets/img_about.png'

import aboutDatas from '../../datas/about.json'
import Accordion from '../Accordion'
import { Head } from "../Head";

import { AboutContainer } from './style';
import { MainDiv } from '../../styles';


function About() {
    return (
        <MainDiv>
            <Head title='À propos' description='Informations complémentaires sur Kasa et ses services' />
            <Banner>
                <img src={img_about} alt='test'></img>
            </Banner>
            <AboutContainer>
                {aboutDatas.map((content, index) =>
                    <Accordion key={index} {...content} />
                )}
            </AboutContainer>
        </MainDiv>
    )
}

export default About;