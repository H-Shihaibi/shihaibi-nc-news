import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const { article_Id } = useParams();

  useEffect(() => {
    axios
      .get(`https://hstestncnews.herokuapp.com/api/articles/${article_Id}`)
      .then(({ data }) => {
        setArticle(data.article);
      });
  });

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
