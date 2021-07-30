import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageContainer, ImageGrid, Images } from './ImageElements'

const ImageSection = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {nin: ["background", "background2"]}}
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                gatsbyImageData(width: 600, height: 600)
              }
            }
          }
        }
      }
    `)

    return (
        <ImageContainer>
            <h1>View our Destinations</h1>
            <ImageGrid>
                {data.allFile.edges.map((image, key) => (
                    <Images className="image-item" key={key} alt={image.node.name} image={image.node.childImageSharp.gatsbyImageData} />
                ))}
            </ImageGrid>
        </ImageContainer>
    )
}

export default ImageSection
