import { useState } from "react";
import { addComment } from "../utils/utils";

export default function PostComment({ article_id, setComments, comments }) {
  const [clicked, setClicked] = useState(false);
  const [usernameValue, setUserNameValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [isError, setIsError] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  function handleSelect(e) {
    setUserNameValue(e.target.value);
  }

  function handleBody(e) {
    setBodyValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setClicked(false);
    const newComment = {
      author: usernameValue,
      body: bodyValue,
      created_at: new Date().toLocaleDateString("en-us"),
      votes: 0,
      comment_id: comments.length + 1,
    };
    setComments((currComments) => [newComment, ...currComments]);
    addComment(article_id, { username: usernameValue, body: bodyValue }).catch(
      () => {
        setComments((currComments) => currComments);
        setIsError(true);
      }
    );
  }

  return (
    <>
      {clicked ? (
        <section className="form-wrapper">
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="username">Username:</label>
            <select
              name="username"
              id="username"
              defaultValue="Select user"
              onChange={handleSelect}
              required
            >
              <option value="Select user" disabled>
                Select user
              </option>
              <option value="tickle122">tickle122</option>
              <option value="grumpy19">grumpy19</option>
              <option value="happyamy2016">happyamy2016</option>
              <option value="cooljmessy">cooljmessy</option>
              <option value="weegembump">weegembump</option>
              <option value="jessjelly">jessjelly</option>
            </select>
            <label htmlFor="body">Comment:</label>
            <textarea id="body" onChange={handleBody} required />
            <button className="submit-btn">Submit</button>
          </form>
        </section>
      ) : (
        <button onClick={handleClick} className="comment-btn">
          Comment
        </button>
      )}
      {isError ? (
        <p className="error">
          Something went wrong! Refresh the page and try again
        </p>
      ) : null}
    </>
  );
}
