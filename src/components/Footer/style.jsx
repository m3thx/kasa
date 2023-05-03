import styled from 'styled-components'

import colors from '../../styles/colors'


export const FooterContainer = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;    
    background-color: ${colors.backgroundDark};
    min-height:200px;
    margin-top: auto;
    padding-top: 65px;
    margin-left: 0;

    p {
        font-size: clamp(0.75rem, 0.4859rem + 1.1268vw, 1.5rem);
        color: ${colors.white};
        padding-top: 30px;
}
`