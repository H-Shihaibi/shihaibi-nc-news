import axios from "axios";
import React, { useState } from "react";
import "./vote.css";

const Vote = ({ article }) => {
  const [toggle, setToggle] = useState(false);
  const [votes, setVotes] = useState(article.votes);

  const handleClick = () => {
    setToggle(!toggle);
    let voteValue = 0;
    if (toggle) {
      voteValue = -1;
    } else {
      voteValue = 1;
    }
    axios
      .patch(
        `https://hstestncnews.herokuapp.com/api/articles/${article.article_id}`,
        { votes: voteValue }
      )
      .then(({ data }) => {
        setVotes(votes + voteValue);
      });
  };

  return (
    <div>
      <div>
        <p>{votes} • Votes </p>
      </div>
      <button
        className="voteButton"
        onClick={() => {
          handleClick();
        }}
      >
        {toggle ? (
          <img src="../heartFilled.svg" alt="Voted" />
        ) : (
          <img src="../heart.svg" alt="vote" />
        )}
      </button>
    </div>
  );
};

export default Vote;
