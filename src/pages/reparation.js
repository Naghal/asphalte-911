import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

function ScellantPage() {
  return (
    <Layout>
      <SEO
        keywords={[`réparation d'asphalte`, `patch`]}
        title="Réparation d&apos;asphalte"
      />


      <section className="flex flex-col p-4">
        <div className="flex flex-col items-center">
          <div className="w-full md:w-2/3 2xl:w-1/3">
            <h1 className="text-5xl text-left p-3 font-bold">Réparation d&apos;asphalte</h1>
            <p>
              En raison des changements de température, les cycles chaud/froid endommagent petit à petit votre asphalte ce qui cause des fissures, nids-de-poule et même des effondrements!
            </p>
            <div className="text-center p-4">
            <StaticImage src="../images/reparation.jpg" layout="constrained" alt="Réparation d&apos;asphalte" placeholder="blurred"></StaticImage>
              <small className="text-gray-500">Réparation d&apos;asphalte</small>
            </div>
            <p>
              Chez asphalte-911, nous utilisons l&apos;asphalte chaude pour toutes nos réparations.
            </p><br></br>
            <b>Pourquoi l&apos;asphalte chaude?</b>
            <p>
              L&apos;asphalte chaude est plus facile à travailler et beaucoup plus durable que l&apos;asphalte froide vendu en quincaillerie! Une bonne réparation d&apos;asphalte chaude peux durer 10 ans qu&apos;elle soit petite ou grosse! La réparation à l&apos;asphalte froide est davantage utilisée pour de petites réparations comme remplir les petits trous qu&apos;a causé votre abris d&apos;auto.
            </p>
            <p>La réparation d&apos;asphalte à chaud est la solution gagnante pour un résultat solide qui dure beaucoup plus longtemps!  </p>
            <br></br>
            <b>Prévention des dégats d&apos;eau</b>
            <p> Nous pouvons également corriger le dénivellement de votre asphalte afin que l&apos;eau s&apos;évacue loin de votre domicile, de quoi vous protéger contre de couteux dégâts d&apos;eau au sous-sol ou dans le garage.</p>
            <br></br>
          
            <p>
              Pour une réparations solide et durable, confiez-nous la réparation de votre asphalte!
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
