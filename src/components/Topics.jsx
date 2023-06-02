import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/utils";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (e) => {
    console.log(e.target.innerText);
  };

  if (isLoading) {
    return <p className="Loading">Loading...</p>;
  }

  return (
    <>
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <h2 className="topic-h2" onClick={handleClick}>
                {topic.slug}
              </h2>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
