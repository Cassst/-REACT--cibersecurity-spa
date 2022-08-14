import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="sc__blog-container_article">
    <div className="sc__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="sc__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Seguir leyendo...</p>
    </div>
  </div>
  )
}

export default Article