import React, { useEffect, useState } from "react";
import "./home.css";
import ArticleCard from "../../components/ArticleCard/articleCard/ArticleCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  console.log(articles);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://hstestncnews.herokuapp.com/api/articles", {
        params: { topic },
      })
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
  }, [topic]);
  if (isLoading) {
    <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Articles</h2>
      <div className="articles">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
