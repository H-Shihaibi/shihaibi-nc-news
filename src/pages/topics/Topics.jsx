import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://hstestncnews.herokuapp.com/api/topics").then(
      ({ data }) => {
        setTopics(data.topics);
        setIsLoading(false);
      },
      [topics]
    );
  });

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <div className="topics">
        <Link key="allTopics" to={"/"}>
          <button>All</button>
        </Link>
        {topics.map((topic) => (
          <Link key={topic.slug} to={`/topics/${topic.slug}`}>
            <button value={topic.slug}>{topic.slug}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topics;
