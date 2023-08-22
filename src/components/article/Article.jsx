import React from "react";
import "./Article.scss";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="metal__blog-container_article">
      <div className="metal__blog-container_article-image">
        <img src={imgUrl} alt="Blogimage" />
      </div>
      <div className="metal__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
