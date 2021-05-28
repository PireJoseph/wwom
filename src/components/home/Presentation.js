import React from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';

const Presentation = ({ className, children }) => (
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-5xl font-semibold">Présentation</h2>
    <div className="flex flex-col sm:flex-row sm:-mx-3">
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <p className="mb-8">
            WWOM est un outil en ligne indispensable pour générer de nouveaux clients. Passez plus
            de temps avec vos clients, moins de temps à en chercher.
          </p>
          <Button className="text-sm">Découvrir</Button>
          <p className="font-semibold text-2xl mt-12">Comment obtenir plus de clients ?</p>
          <p className="mt-4">WWOM améliore le bouche à oreille de votre business !</p>
        </Card>
      </div>
    </div>
  </div>
);
export default Presentation;
