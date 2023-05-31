import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/utils";

export default function CommentsCard() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  if (comments.length === 0) {
    return <p>No comments have been written yet!</p>;
  }

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>Written by: {comment.author}</p>
            <p>{comment.created_at}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
          </li>
        );
      })}
    </ul>
  );
}
