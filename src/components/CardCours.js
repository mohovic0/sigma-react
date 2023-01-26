import React from "react";
import "./../components/CardCours.css";
import DataSlidebar from "../DataSlidebar.json";

const CardCours = () => {

  const listeCours = DataSlidebar.DeuxiemeAc.map((it) => (
    <div key={it.title}  className="flex-container">
      <div className="card mb-4 ">
        <div className="card-body">
          <h3>{it.title}</h3>
        </div>
        <div className="card-footer d-block d-lg-flex align-items-center justify-content-between">
          <div className="card-divider1">Cours</div>
          <div className="card-divider2">Exercices </div>
          <div className="card-divider3">Examens </div>
        </div>
      </div>
    </div>
  ));

  return (
  <div className="hi">
    {listeCours}
  </div>
  );
};
export default CardCours;
