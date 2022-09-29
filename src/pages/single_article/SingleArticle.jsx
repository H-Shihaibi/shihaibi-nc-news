import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import "./singleArticle.css";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_Id } = useParams();

  useEffect(() => {
    axios
      .get(`https://hstestncnews.herokuapp.com/api/articles/${article_Id}`)
      .then(({ data }) => {
        setArticle(data.article);
        setIsLoading(false);
      });
  }, [article_Id]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <div className="singleArticleContent">
        <h2>{article.title}</h2>
        <p className="singleArticleAuthor">{article.author}</p>
        <p className="singleArticleInfo">{article.created_at}</p>
        <p className="singleArticleBody">{article.body}</p>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
};

export default SingleArticle;
