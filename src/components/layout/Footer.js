import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="py-16 mt-12 lg:mt-48 mb-8 text-gray-800 ml-4 sm:ml-8 md:mx-auto">
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 w-64">
        <h2 className="text-lg font-semibold">Site</h2>

        <ul className="mt-6 leading-loose">
          <li>
            <Link to="/" title="Remonter" className="mt-5">
              Accueil
            </Link>
          </li>
          <li>
            <a href="https://github.com/PireJoseph/wwom" title="code source" className="mt-5">
              Code source
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 md:mx-12 lg:mx-40 xl:mx-60 my-8 md:my-0">
        <h2 className="text-lg font-semibold">Accueil</h2>
        <ul className="mt-6 leading-loose">
          <li>
            <Link to="/confidentialite">Confidentialité</Link>
          </li>
          <li>
            <Link to="/cookies">Cookies</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 ">
        <h2 className="text-lg font-semibold">Réseaux sociaux</h2>
        <ul className="mt-6 leading-loose">
          <li>
            <a href="https://www.facebook.com/outilwwom">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/boucheaoreille_wwom/?hl=fr">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
