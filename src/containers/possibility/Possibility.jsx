import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibiliti = () => {
  return (
    <div className="sc__possibility section__padding" id="demo">
      <div className="sc__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="sc__possibility-content">
        <h4>Solicite nuestra DEMO</h4>
        <h1 className="gradient__text">Disfrute un período de 30 días</h1>
        <p>
          Nullam in vestibulum nunc, at varius leo. Proin et dui sem.
          Pellentesque lacus justo, vestibulum ac porttitor ac, pulvinar pretium
          tortor. Fusce quis bibendum tortor. Morbi quis odio quis tellus cursus
          viverra. Suspendisse sit amet nunc in lorem volutpat viverra. Cras
          eget ipsum orci.
        </p>
        <h4>Obtenga un acceso anticipado para empezar</h4>
      </div>
    </div>
  );
};

export default Possibiliti;
