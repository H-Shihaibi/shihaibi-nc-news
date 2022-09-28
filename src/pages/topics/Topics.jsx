import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = ({ topic, setTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get("https://hstestncnews.herokuapp.com/api/topics").then(
      ({ data }) => {
        setTopics(data.topics);
      },
      [topics]
    );
  });
  return (
    <div>
      <h2>Topics</h2>
      <div className="topics">
        {topics.map((topic) => (
          <Link key={topic.slug} to={`/topics/${topic.slug}`}>
            <button
              onClick={(e) => setTopic(e.target.value)}
              value={topic.slug}
            >
              {topic.slug}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topics;
