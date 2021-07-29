import styled from 'styled-components'
import HeroBg from '../../images/background2.jpg'

export const HeroContainer = styled.div`
    background: url(${HeroBg}) no-repeat center;;
    height: 100vh;
    width: 100%auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
    object-fit: contain;
    margin-top: -80px;

    h1 {
        color: #fff;
        font-size: 100px;
        margin-top: 0px;
    }

    p {
        margin-top: 8px;
        color: #fff;
        font-size: 32px;
    }

    @media screen and (max-width: 960px) {
        h1 {
            font-size: 70px;
        }
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 60px;
        }

        p {
            font-size: 30px;
        }
    }
`

export const HeroBtns = styled.div`
    margin-top: 32px;
`