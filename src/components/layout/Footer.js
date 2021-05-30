import React from 'react';

const Footer = () => (
  <footer className="py-16 mt-48 mb-8 text-gray-800 ml-4 sm:ml-8 md:mx-auto">
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 w-64">
        <h2 className="text-lg font-semibold">Site</h2>
        <ul className="mt-6 leading-loose">
          <li>
            <p className="mt-5">Sitemap</p>
          </li>
          <li>
            <a href="https://codebushi.com">Built Gatsbyjs and tailwindcss</a>
          </li>
          <li>
            <a href="https://codebushi.com">By Joseph Pire</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 md:mx-12 lg:mx-40 xl:mx-60 my-8 md:my-0">
        <h2 className="text-lg font-semibold">Juridique</h2>
        <ul className="mt-6 leading-loose">
          <li>
            <p className="mt-5">Tous droits réservés à Up To You srl</p>
          </li>
          <li>
            <a href="https://codebushi.com">Politique de confidentialité</a>
          </li>
          <li>
            <a href="https://codebushi.com">Politique des cookies</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 ">
        <h2 className="text-lg font-semibold">Réseaux sociaux</h2>
        <ul className="mt-6 leading-loose">
          <li>
            <a href="https://www.facebook.com/outilwwom">facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/boucheaoreille_wwom/?hl=fr">instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
