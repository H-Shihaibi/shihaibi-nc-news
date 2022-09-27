import React from "react";
import "./articleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard" value={article.article_id}>
      <div>
        <h2 className="articleTitle">{article.title}</h2>
        <div className="articleInfo">
          <p>Author: {article.author}</p>
          <p>Created: {article.created_at}</p>
        </div>
        <div>
          <p>{article.body.slice(0, 150)} ...</p>
        </div>
      </div>
      <div className="stats">
        <p>{article.comment_count} • Comments </p>
        <p>{article.votes} • Votes </p>
      </div>
    </div>
  );
};

export default ArticleCard;
