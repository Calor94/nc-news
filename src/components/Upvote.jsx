import { useState } from "react";
import { updateVote } from "../utils/utils";

export default function Upvote({ article_id, votes }) {
  const [currentVote, setCurrentVote] = useState(votes);
  const [hasClickedUp, setHasClickedUp] = useState(false);
  const [hasClickedDown, setHasClickedDown] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleUpvote = () => {
    setCurrentVote((currVote) => currVote + 1);
    setHasClickedUp(true);
    setHasClickedDown(false);
    setIsError(false);
    // updateVote(article_id, 1).then((data) => {
    //   return data;
    // });
    updateVote(article_id, 1).catch(() => {
      setCurrentVote((currVote) => currVote - 1);
      setIsError(true);
    });
  };
  const handleDownvote = () => {
    setCurrentVote((currVote) => currVote - 1);
    setHasClickedUp(false);
    setHasClickedDown(true);
    setIsError(false);
    // updateVote(article_id, -1).then((data) => {
    //   return data;
    // });
    updateVote(article_id, -1).catch(() => {
      setCurrentVote((currVote) => currVote + 1);
      setIsError(true);
    });
  };

  return (
    <>
      <p>
        Votes:
        <button
          onClick={handleUpvote}
          className="vote-icon upvote-icon"
          disabled={hasClickedUp}
        >
          ⬆
        </button>
        {currentVote}
        <button
          onClick={handleDownvote}
          className="vote-icon downvote-icon"
          disabled={hasClickedDown}
        >
          ⬇
        </button>
      </p>
      {isError ? (
        <p className="error">
          Something went wrong! Refresh the page and try again
        </p>
      ) : null}
    </>
  );
}
