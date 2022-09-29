import React, { useEffect, useState } from "react";
import "./home.css";
import ArticleCard from "../../components/article_card/ArticleCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    axios
      .get("https://hstestncnews.herokuapp.com/api/articles", {
        params: { topic },
      })
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{topic} Articles</h2>
      <div className="articles">
        {articles.map((article) => (
          <ArticleCard
            article={article}
            setArticles={setArticles}
            articles={articles}
            key={article.article_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
