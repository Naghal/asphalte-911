import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactHeader from "../page_components/contact/ContactHeader";
import { StaticImage } from "gatsby-plugin-image"

function ContactPage() {
 
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <ContactHeader />
        <div className="flex flex-col 2xl:flex-row">
          <div className="w-full md:w-2/3 2xl:w-1/3  mt-4 p-4 flex align-end">
            <form className="w-full flex flex-col" method="post" action="https://getform.io/f/56a11a74-5acd-4cc9-8cec-ee9f7d8b0fab">

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="fullname"
              >
                Nom complet
              </label>

              <input
                className="w-full mb-6 rounded-md border-gray-800"
                name="name"
                placeholder=""
                type="text"
              />

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="email"
              >
                Courriel
              </label>

              <input
                className="w-full mb-6 rounded-md border-gray-800"
                name="email"
                placeholder=""
                type="text"
              />

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="phone"
              >
                Téléphone
              </label>

              <input
                className="w-full mb-6 rounded-md border-gray-800"
                name="phone"
                placeholder="Optionnel"
                type="text"
              />


              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="w-full mb-6 rounded-md border-gray-800"
                name="message"
                placeholder=""
                rows="8"
              />

              <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
                Envoyer
              </button>
            </form>
          </div>
          <div className="w-full">
            <div className="xl:w-1/3 mt-4 p-4 2xl:w-2/3">
              <b>Heures d&apos;ouverture</b><br></br>
              Nous sommes ouvert 7 jours sur 7 de 8h à 20h.
            </div>
            <div className="w-full">
              <div className="hidden md:block"><StaticImage src="../images/large_map.png" alt="Carte" layout="constrained" quality={100} height={800} /></div>
              <div className="md:hidden"><StaticImage src="../images/map.png" alt="Carte" layout="constrained" quality={100} height={800} /></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
