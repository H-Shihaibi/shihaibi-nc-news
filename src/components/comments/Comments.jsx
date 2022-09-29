import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_Id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://hstestncnews.herokuapp.com/api/articles/${article_Id}/comments`
      )
      .then(({ data }) => {
        setComments(data.article);
        setIsLoading(false);
      });
  }, [article_Id]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <div className="commentSection">
        <h2>Comments</h2>
        <div className="allComments">
          {comments.map((comment) => (
            <div className="singleComment" key={comment.comment_id}>
              <h2>{comment.author}</h2>
              <p className="commentBody">{comment.body}</p>
              <p className="commentInfo">{comment.created_at}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
