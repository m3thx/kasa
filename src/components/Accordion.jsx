import vector from '../assets/vector.png';
import { useState } from 'react';

import StyledMenu from '../styles/Accordion';

const Accordion = ({...content}) => {
    const [collapse, setCollapse] = useState(false)

    const toggle = () => {
        setCollapse(!collapse)
    }

    return (
    <StyledMenu key={content.id}>
        <div className='menuBanner' onClick={toggle}>
            <h2>{content.title}</h2>
            <img src={vector} alt="flèche" />
        </div>
        <div className={collapse ? 'menuContent' : 'menuContent_hidden'}>
            <p >{content.content}</p>
        </div>
    </StyledMenu>
)}

export default Accordion