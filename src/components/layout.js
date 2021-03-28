import PropTypes from "prop-types";
import React from "react";
import "@fontsource/maven-pro"

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
        {/**flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16 */}
      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white w-full text-center">
            © 2021 Asphalte-911. Tous droits réservés.
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
