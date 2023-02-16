import React from "react";
function Button({ handleVotedQuote }) {
  return (
    <div className="buttons d-flex d-flex justify-content-center align-items-center">
      <button class=" btn-liked " type="button" onClick={handleVotedQuote}>
        This is funny
      </button>
      <button class=" btn-disliked " type="button" onClick={handleVotedQuote}>
        This is not funny
      </button>
    </div>
  );
}

export default Button;
