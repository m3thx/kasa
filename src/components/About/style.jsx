import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 30px;
    max-width: 1023px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`
