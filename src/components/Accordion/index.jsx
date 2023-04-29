import { useState } from 'react';

import StyledMenu from './style';
import arrow from '../../assets/arrow.png';

const Accordion = ({...props}) => {
    const [collapse, setCollapse] = useState(false)

    const toggle = () => {
        setCollapse(!collapse)
    }

    return (
    <StyledMenu key={props.id} >
        <div className='menuBanner' onClick={toggle}>
            <h2  className={props.className} >{props.title}</h2>
            <img src={arrow} alt="flèche" className= {collapse ? 'arrow arrow_up' : 'arrow arrow_down'}/>
        </div>
        
        <div  // eslint-disable-next-line
        className={collapse ? 'menuContent' + ' ' + props.className : 'menuContent_hidden'} $>
             {Array.isArray(props.content) ? props.content.map((item, index) => {
                        return (
                            // eslint-disable-next-line
                            <p key={index} className='accordion_list'>{item}</p>
                        )
                    }) : <p >{props.content}</p>
                }
        </div>
    </StyledMenu>
)}

export default Accordion