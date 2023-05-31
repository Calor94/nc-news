import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/utils";

export default function IndividualReview() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      <p>created on {article.created_at}</p>
      <p>votes: {article.votes}</p>
    </article>
  );
}
