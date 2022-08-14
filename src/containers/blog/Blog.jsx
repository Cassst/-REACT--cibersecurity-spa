import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="sc__blog section__padding" id="blog">
    <div className="sc__blog-heading">
      <h1 className="gradient__text">Están sucediendo muchas cosas, <br />Estamos pendientes sobre ello.</h1>
    </div>
    <div className="sc__blog-container">
      <div className="sc__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 29, 2021" text="La carrera tecnológica para garantizar la ciberseguridad ha comenzado." />
      </div>
      <div className="sc__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Laboral Kutxa sufre un ataque informático contra el servicio de correspondencia de su clientela" />
        <Article imgUrl={blog03} date="Sep 22, 2021" text="Los ciberataques contra empresas están aumentando, aunque muchas no lo denuncian" />
        <Article imgUrl={blog04} date="Sep 11, 2021" text="¿Cómo puedo tener una contraseña segura para proteger mi información?" />
        <Article imgUrl={blog05} date="Sep 02, 2021" text="Según los expertos, nadie está 100 % preparado para hacer frente a un ciberataque" />
      </div>
    </div>
  </div>
  )
}

export default Blog