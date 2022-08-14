import React from 'react';
import Feature from '../../components/feature/Feature';
import './what.css';

const What = () => {
  return (
    <div className="sc__whatsc section__margin" id="wsc">
    <div className="sc__whatsc-feature">
      <Feature title="CyberIdent" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    </div>
    <div className="sc__whatsc-heading">
      <h1 className="gradient__text">Protección más allá de tu imaginación</h1>
      <p>Descubre más opciones</p>
    </div>
    <div className="sc__whatsc-container">
      <Feature title="Actualizaciones Constantes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in massa nunc. Maecenas non venenatis sem. Interdum et malesuada fames ac ante ipsum primis in." />
      <Feature title="Redes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies." />
      <Feature title="Seguridad contra Hackers" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere ornare nulla, ac dapibus ligula euismod id. Fusce eu orci arcu. Nullam semper imperdiet libero in vehicula. Vivamus at fringilla velit. Sed urna ex, vehicula nec ornare et, pulvinar malesuada." />
    </div>
  </div>
  )
}

export default What