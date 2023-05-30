import { getArticles } from "../utils/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <h2>{article.title}</h2>
            <p>votes: {article.votes}</p>
            <p>comments: {article.comment_count}</p>
          </li>
        );
      })}
    </ul>
  );
}
