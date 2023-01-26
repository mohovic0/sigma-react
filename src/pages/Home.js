import React from "react";
import Navbar from "../components/navbar";

import Titre from "../components/Titre";
import CardCours from "../components/CardCours";
import Particle from "../components/Particle";
import Footer from "../components/Footer";


export default class Home extends React.Component {
  render() {
    return (
      <>
          <Particle/>
          <Navbar />
          <div className="container" style={{position : "relative"}}>
            <Titre niveau="2ème Année Collège" pth="/PremierAcCours" />
            <div className="container">
              <div className="row">
                <div style={{position : "relative"}} className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                  <h1 >Listes des cours</h1>
                  <CardCours />
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block col-lg-3 col-xl-3 col-xxl-3">
                  <h4>Espace pub</h4>
                </div>
              </div>
            </div>

            
          </div>
          <Footer />
      </>
      
    );
  }
}
