import styled from 'styled-components'

import colors from '../../styles/colors'


export const StyledError = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: clamp(6rem, 1.7746rem + 18.0282vw, 18rem);
        font-weight: 700;
        text-align: center;
        color: ${colors.red};
        margin: 66px 0;
    }

    p {
        font-size: clamp(1.125rem, 0.7289rem + 1.6901vw, 2.25rem);
        padding: 0 max(10%, 58px);
        letter-spacing: 0em;
        text-align: center;
        color: ${colors.red};
        margin-bottom: 182px;
    }


    nav{
        margin-bottom: 30px;
    }
    

    a {
        font-size: clamp(0.875rem, 0.787rem + 0.3756vw, 1.125rem);
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: ${colors.red};
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        h1{
            margin-bottom: 10px;
        }
        p{
            margin-bottom: 130px;
        }
        nav{
            margin-bottom: 30px;
        }
    }

`