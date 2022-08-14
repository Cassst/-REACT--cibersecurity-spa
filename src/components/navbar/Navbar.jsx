import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/mainlogo.png';

import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Inicio</a></p>
    <p><a href="#us">Nosotros</a></p>
    <p><a href="#services">Servicios</a></p>
    <p><a href="#features">Características</a></p>
    <p><a href="#demo">DEMO</a></p>
    <p><a href="#contact">Contacto</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sc__navbar">
      <div className="sc__navbar-links">
        <div className="sc__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="sc__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="sc__navbar-sign">
        <p>Registrarse</p>
        <button type="button">Ingresar</button>
      </div>
      <div className="sc__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="sc__navbar-menu_container scale-up-center">
          <div className="sc__navbar-menu_container-links">
            <Menu/>
          </div>
          <div className="sc__navbar-menu_container-links-sign">
            <p>Registrarse</p>
            <button type="button">Ingresar</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar