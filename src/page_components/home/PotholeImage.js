/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const PotholeImage = () => {
    const data = useStaticQuery(graphql`
    query {
      fissureImage: file(relativePath: { eq: "pothole.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 800, maxHeight: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
    return (
            <Img fluid={data.fissureImage.childImageSharp.fluid} className="rounded-t-xl" alt="Fissure"/>
    );
};

export default PotholeImage;
