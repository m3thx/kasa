import styled from 'styled-components'
// import { useState } from 'react';

import Banner from '../styles/Banner';

import img_about from '../assets/img_about.png'

import aboutDatas from '../datas/about.json'
import Accordion from '../components/Accordion'


const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 33px;
    max-width: 1023px;

`
const Main = styled.div`
    margin: 0 7% 0 7%;
`


function About() {
    return (
        <Main>
            <Banner>
                <img src={img_about} alt='test'></img>
            </Banner>
            <AboutContainer>
                {aboutDatas.map((content, index) =>
                    <Accordion key={index} {...content} />
                )}
            </AboutContainer>
        </Main>
    )
}

export default About