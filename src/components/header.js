import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          contact_phone
        }
      }
    }
  `);

  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "font-bold text-yellow-300 ml-6" } : {}
  }

  return (
    <header className="bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
        <Link to="/">
          <div className="flex align-baseline">
          <h1 className="flex items-center text-yellow-300 no-underline text-3xl">
            <span className="text-3xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
          <p className="flex text-white no-underline items-end">{site.siteMetadata.contact_phone}</p>
          </div>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Accueil`,
            },
            {
              route: `/fissure`,
              title: `Réparation de fissure`,
            },
            {
              route: `/scellant`,
              title: `Application de scellant`,
            },
            {
              route: `/reparation`,
              title: `Réparation d'asphalte`,
            },
            {
              route: `/soumission`,
              title: `Soumission`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
              getProps={isActive}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
