import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

function ScellantPage() {
  return (
    <Layout>
      <SEO
        keywords={[`fissure`]}
        title="Fissure"
      />

<section className="flex flex-col p-4">
        <div className="flex flex-col items-center">
          <div className="w-full md:w-2/3 2xl:w-1/3">
            <h1 className="text-5xl text-left p-3 font-bold">Réparation de fissure</h1>
            <p>
              Chez Asplhate-911, nous utilisons toujours la technique de réparation la plus adaptée à votre situation.
            </p>
            <p>
              Nous offrons la réparation à chaud ainsi qu&apos;au sable polymère.
            </p>
            <div className="text-center p-4">
              <StaticImage src="../images/fissure.jpg" layout="constrained" alt="Réparation d&apos;asphalte" placeholder="blurred"></StaticImage>
              <small className="text-gray-500">Réparation de fissure</small>
            </div>
            <b>Réparation à chaud</b>
            <p>
              La méthode fissure à chaud consiste à mettre un bloc de caoutchouc à base de pétrole dans une bouillotte chauffée à 350°f pendant 15 minutes. Pendant ce temps, le caoutchouc devient liquide et prêt pour l&apos;application. Par la suite, nous installation notre machine à fissure aux endroits indiqués. Après seulement quelques que minutes, le caoutchouc redevient dur et solide ce qui vient colmater notre fissure a 100 % !
            </p><br></br>
            <p>Pour plus de durabilité et solidité que quelconque produit acheté en quincaillerie, la réparation de fissure à chaud est la solution numéro un dans sa catégorie !</p>
            <br></br>
            <b>Réparation au sable polymère</b>
            <p>
            La Méthode fissure sable polymère s&apos;applique quant à elle aux petites fissures ! La méthode consiste à étendre le sable sur la fissure puis, à l&apos;aide d&apos;un tapeur, égaliser le tout.
            </p>

            <br></br>
          
            <p>
            Pour un résultat exemplaire, combinez la réparation de fissure avec l&apos;application d&apos;un scellant au bitume!
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
