import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { graphql, useStaticQuery } from 'gatsby'

//import image from '../images/asphalt_paving.jpg';
import BackgroundImage from 'gatsby-background-image'

import Services from '../page_components/home/Services';


function IndexPage() {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "asphalt_paving.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  
  return (
    <Layout>
      <SEO
        keywords={[`asphalte`]}
        title="Accueil"
      />


      <section className="text-center w-full">
      <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
       <div className="flex items-baseline" style={{minHeight: '65vh', minWidth: '100hl'}}>
        <div className="flex flex-col relative mt-12">
          <div className="absolute bg-black opacity-75 w-full h-full"></div>
          <div className="z-10 mt-2"><p className="text-white text-4xl">ASPHALTE-911</p></div>
          <div className="p-2 z-10"><p className="text-white text-2xl">VOTRE ENTRPRENEUR DE CONFIANCE</p></div>
        </div>
      </div>
    </BackgroundImage>
    
    <h1 className="text-5xl text-left p-3 font-bold">Nos services</h1>
    
    <Services />

      </section>
    </Layout>
  );
}

export default IndexPage;
