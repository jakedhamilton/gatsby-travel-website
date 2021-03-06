import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";

export const ImageContainer = styled.div`
    text-align: center;
    margin: 150px 0;

    h1 {
        margin-bottom: 64px;
    }
`

export const ImageGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 32px;
    width: 100%;
    
    .image-item img {
        transition: 0.6s all ease !important;
    }

    .image-item img:hover {
        transform: scale(1.1);
        transition: 0.6s all ease !important;
        cursor: pointer;
    }
`

export const Images = styled(GatsbyImage)`

    &:nth-child(5) {
        grid-column-end: span 2;
    }

    &:nth-child(9) {
        grid-row-start: 4;
        grid-column-end: span 2;
    }
`

