import * as React from 'react';
import sonedeImage from '../images/sonede.png';


export default class WelcomeContent extends React.Component {
  render() {
    return (
      <div>
      <img src={sonedeImage} alt="SONEDE" className="img-fluid mb-3 rounded mx-auto d-block" />
      <div className="container mt-4 ">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-primary">Société Nationale d'Exploitation et de Distribution des Eaux (SONEDE)</h1>
            <p className="lead">Avenue Slimen Ben Slimen, El Manar II - Tunis 2092</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <h2 className="text-info">Raison sociale</h2>
            <h5 className='mx-5 mt-4'>Société Nationale d’Exploitation et de Distribution des Eaux (SONEDE).</h5>
            <p>&nbsp;</p>

            <h2 className="text-info">Siège social</h2>
            <h5 className='mx-5 mt-4'>Avenue Slimen Ben Slimen, El Manar II - Tunis 2092.</h5>
            <p>&nbsp;</p>

            <h2 className="text-info">Forme juridique</h2>
            <h5 className='mx-5 mt-4'>Établissement public créé par la loi 68-22 du 2 juillet 2968 telle que modifiée par la loi 76-22 du 22 janvier 2976 et considéré comme entreprise publique selon le décret 2004-2265 du 27 septembre 2004. La SONEDE est placée sous la tutelle du Ministère de l’Agriculture, des Ressources Hydrauliques et de la Pêche.</h5>
            <p>&nbsp;</p>

            <h2 className="text-info">Mission</h2>
            <h5 className='mx-5 mt-4'>Production et distribution de l'eau potable sur tout le territoire tunisien.</h5>
            <p>&nbsp;</p>

            <h2 className="text-info ">Activités</h2>
            <h5 className='mx-5 mt-4'>
              <ul>
                
              <li>Étude et réalisation des installations de captage</li>
              <li>Traitement et production de l'eau potable.</li>
              <li>Gestion technique des réseaux.</li>
              <li>Gestion commerciale des abonnés.</li>

              </ul>
              </h5>

              <h2 className="text-info ">Conseil d’Administration</h2>
              <h5 className='mx-5 mt-4'>La SONEDE est placée sous la tutelle du Ministère de l'Agriculture. Son conseil d'administration est présidé par le Président Directeur Général. Les membres du conseil sont au nombre de 11 appartenant à divers secteurs économiques et sociaux et un contrôleur d'Etat.</h5>










          </div>

          <div className="col-md-4">
            {/* You can add additional content or use Bootstrap cards for better layout */}
          </div>
        </div>
      </div>
      </div>
    );
  };
}
