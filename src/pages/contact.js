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
          <div className="w-full md:w-2/3 2xl:w-1/3  mt-4 p-4">
            <form>

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="fullname"
              >
                Nom complet
              </label>

              <input
                className="w-full mb-6 rounded-md border-gray-800"
                id="fullname"
                placeholder=""
                type="text"
              />

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="fullname"
              >
                Courriel
              </label>

              <input
                className="w-full mb-6 rounded-md border-gray-800"
                id="email"
                placeholder=""
                type="text"
              />

              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="fullname"
              >
                Téléphone
              </label>

              <input
                className="w-full mb-6 rounded-md border-gray-800"
                id="email"
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
                id="message"
                placeholder=""
                rows="8"
              />

              <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
                Envoyer
              </button>
            </form>
          </div>
          <div className="w-1/3 mt-4 p-4 2xl:w-2/3">
            Heures d&apos;ouverture
          </div>
        </div>
        <div className="w-2/3 h-36">
          <StaticImage src="../images/large_map.png" alt="Carte" height={400} />
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
