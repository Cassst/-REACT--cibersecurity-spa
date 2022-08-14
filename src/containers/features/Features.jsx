import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Seguridad en la Nube y SaaS',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Acceso remoto y móvil',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Seguridad de red física y virtual',
    text: 'Sed elementum, nulla quis congue volutpat, sapien dolor dictum est, viverra bibendum odio dui at felis. Nam at porta lorem. Praesent a enim venenatis, vestibulum dui vitae, lobortis mauris. Etiam maximus neque in nunc maximus posuere. Ut commodo pretium leo. Duis porta tortor quis auctor aliquam.',
  },
  {
    title: 'Zero-Trust Network Acces',
    text: 'Fusce quis est in eros aliquet aliquam laoreet vel nunc. Nullam pretium, orci non commodo condimentum, dui orci imperdiet magna, sit amet porta nisi purus a nisi.',
  },
  {
    title: 'Email Security',
    text: 'Nam felis ligula, varius eu feugiat ut, finibus vitae neque. Quisque quis sollicitudin risus, vitae semper massa. Integer accumsan tincidunt magna quis facilisis.',
  },
];

const Features = () => {
  return (
    <div className="sc__features section__padding" id="features">
    <div className="sc__features-heading">
      <h1 className="gradient__text">Protega sus datos de la manera más segura. Disfrute del mañana</h1>
      <p>¿Que Ofrecemos?</p>
    </div>
    <div className="sc__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features