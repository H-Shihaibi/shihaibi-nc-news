import React, { useEffect, useState } from "react";
import "./home.css";
import ArticleCard from "../../components/ArticleCard/articleCard/ArticleCard";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://hstestncnews.herokuapp.com/api/articles")
      .then((response) => response.json())
      .then(({ articles }) => {
        setArticles(articles);
      });
  }, []);

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
