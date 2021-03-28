import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

function ScellantPage() {
  const data = useStaticQuery(graphql`
  query {
    scellantApplictionImage: file(relativePath: { eq: "application_scellant.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);
  return (
    <Layout>
      <SEO
        keywords={[`scellant`, `asphalte`, `bitume`, `black mac`]}
        title="Scellant"
      />

      <section className="flex flex-col p-4">
        <div className="flex flex-col items-center">
          <div className="w-full md:w-2/3 2xl:w-1/3">
            <h1 className="text-5xl text-left p-3 font-bold">Application de scellant</h1>
            <p>
              À chaque été, plusieurs compagnies se promènent dans votre quartier en vous offrant un scellant sans trop vous expliquer en détails leurs produits.
              Ici chez Asphalte-911, il est important pour nous de vous conscientiser et vous informer des bons produits à appliquer. 
            </p>
            <p>
              Notre entreprise utilise des produits professionnels dont notre scellant le Black Mac, notre meilleur vendeur. 
              Le Black Mac est un scellant au bitume à base de pétrole. Le bitume est l&apos;élément liquide qui sert à regrouper la roche et le sable pour former l&apos;élément appelé asphalte. 
            </p>
            <div className="text-center p-4">
              <Img fluid={data.scellantApplictionImage.childImageSharp.fluid} className="rounded-lg" alt="Application de scellant"/>
              <small className="text-gray-500"> Application de scellant</small>
            </div>
            <p>
              <b>Pourquoi appliquer un scellant? </b><br></br>
              Avec les années, l&apos;oxydation et les conditions climatiques font en sorte qu&apos;il a une perte de bitume ne laissant en surface que la roche et le sable sur votre asphalte. Si vous la laissez se degrader l&apos;aspect de votre asphalte deviendra vieille, poreuse et sèche. Après 5 ans d&apos;usure, la longévité de votre asphalte sera réduite de 50%. 
            </p>
            <br></br>
            <p>
            <b>Pourquoi opter pour un scellant au Bitume plutôt qu&apos;à l&apos;acrylique ou au goudron? </b><br></br>
              L&apos;acrylique et le goudron sont des produits faciles d&apos;application que vous pouvez retrouver à la quincaillerie pour une somme de plus ou moins 150$ par année. Par contre, ces deux éléments ne pénètrent pas votre asphalte. Ils restent tout deux à la surface, ce qui empêche votre asphalte de bien respirer et ne règle en rien l&apos;assèchement interne qui va continuer de se dégrader avec le temps. 
            </p>
            <br></br>
            <p>
              Le bitume fait partie des éléments dont l&apos;asphalte est composée. L&apos;application du bitume pulvérisé pénètre à l&apos;intérieur comme à la surface, le rendant ainsi le meilleur choix pour entretenir votre asphalte! Nous recommandons une application tous les deux ans. Les coûts reliés au bitume s&apos;élève à plus ou moins 300$. 
            </p>
            <br></br>
            <p>
              En conclusion, Le bitume vient travailler en profondeur donc le résultat est beaucoup plus durable que l&apos;acrylique et le goudron. Pour des coûts similaires, mais moins d&apos;entretien, le Black Mac est la solution!
            </p>
          </div>
          <div className="w-1/3">
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ScellantPage;
