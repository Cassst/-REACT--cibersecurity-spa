import React from 'react';
import logo from '../../assets/mainlogo.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="sc__footer section__padding" id="contact">
    <div className="sc__footer-heading">
      <h1 className="gradient__text">Comience a asegurar su vida digital</h1>
    </div>

    <div className="sc__footer-btn">
      <p>Solicitar Acceso</p>
    </div>

    <div className="sc__footer-links">
      <div className="sc__footer-links_logo">
        <img src={logo} alt="sc_logo" />
        <p>Argentina, Mendoza <br /> Todos los derechos reservados</p>
      </div>
      <div className="sc__footer-links_div">
        <h4>Compañia</h4>
        <p>Términos & Condiciones </p>
        <p>Políticas de privacidad</p>
        <p>Ubicación</p>
      </div>
      <div className="sc__footer-links_div">
        <h4>Contactos</h4>
        <p>Mendoza, Argentina</p>
        <p>261-132567</p>
        <p>cyberident@payme.net</p>
      </div>
    </div>

    <div className="sc__footer-copyright">
      <p>@2022 CyberIdent.</p>
    </div>
  </div>
  )
}

export default Footer