import React from "react";
import { Link } from "react-router-dom";
import Vote from "../vote/Vote";
import "./articleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard" value={article.article_id}>
      <div>
        <Link to={`/articles/${article.article_id}`}>
          <h2 className="articleTitle">{article.title}</h2>
        </Link>
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
        <Vote article={article} />
      </div>
    </div>
  );
};

export default ArticleCard;
