import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/utils";
import CommentsCard from "./CommentsCard";
import Upvote from "./Upvote";
import PostComment from "./PostComment";

export default function Article() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  return (
    <article className="article">
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>Written by: {article.author}</p>
      <img src={article.article_img_url} alt=" " />
      <p>{article.body}</p>
      <p>created on {new Date(article.created_at).toLocaleDateString()}</p>
      <Upvote article_id={article_id} votes={article.votes} />
      <PostComment
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
      <section>
        <CommentsCard comments={comments} setComments={setComments} />
      </section>
    </article>
  );
}
