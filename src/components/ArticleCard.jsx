import { getArticles } from "../utils/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArticleCard() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <h2>
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
            </h2>
            <img src={article.article_img_url} alt=" " />
            <p>votes: {article.votes}</p>
            <p>comments: {article.comment_count}</p>
          </li>
        );
      })}
    </ul>
  );
}
