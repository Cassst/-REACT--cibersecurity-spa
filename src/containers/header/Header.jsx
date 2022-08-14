import React from "react";
import people from "../../assets/people.png";
import identidadV from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="sc__header section__padding" id="home">
    <div className="sc__header-content">
      <h1 className="gradient__text">¿Tienes a resguardo tu identidad virtual?</h1>
      <p>También conocida como identidad 2.0, por definición engloba todas las acciones que nos identifican en Internet. A medida que su consumo va creciendo, nuestra identidad digital se ve cada vez más expuesta.</p>

      <div className="sc__header-content__input">
        <input type="email" placeholder="Ingresa tu correo electrónico" />
        <button type="button">Suscribirse</button>
      </div>

      <div className="sc__header-content__people">
        <img src={people} alt="personas"/>
        <p>1,600 Protegen su privacidad en la red con nosotros</p>
      </div>
    </div>

    <div className="sc__header-image">
      <img src={identidadV} alt="Virtual"/>
    </div>
  </div>
);

export default Header;
