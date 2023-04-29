import { useState } from 'react'

import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import { SlideshowStyle } from './style'




export const Slideshow = ({...accommodation}) => {
    // const picturesLastIndex = accommodation.pictures.length - 1
    // console.log(picturesLastIndex)
    const [indexPicture, setindexPicture] = useState(0)
    const HandleClickLeft = () => {
        if (indexPicture === 0) {
            setindexPicture(accommodation.pictures.length - 1)
        } else {
            setindexPicture(indexPicture - 1)
        }
    }
    const HandleClickRight = () => {
        if (indexPicture === accommodation.pictures.length - 1) {
            setindexPicture(0)
        } else {
            setindexPicture(indexPicture + 1)
        }
    }
    return (
        <SlideshowStyle>
            <img className='slideshow_image' src={accommodation.pictures[indexPicture]} alt="" />
            {/* si une seule image les flèches n'apparaissent pas */}
            {accommodation.pictures.length - 1 > 1 &&
                <div className='slideshow_arrowBox'>
                    <img className='slideshow_arrow' src={arrow_left} alt="Arrow left" onClick={HandleClickLeft} />
                    <img className='slideshow_arrow' src={arrow_right} alt="Arrow left" onClick={HandleClickRight} />
                </div>
            }
        </SlideshowStyle>
    )
}