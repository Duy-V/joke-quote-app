import React from "react";
function Button({ handleDislikeQuote, handleLikeQuote }) {
  return (
    <div className="buttons d-flex d-flex justify-content-center align-items-center">
      <button class=" btn-liked " type="button" onClick={handleLikeQuote}>
        This is funny
      </button>
      <button class=" btn-disliked " type="button" onClick={handleDislikeQuote}>
        This is not funny
      </button>
    </div>
  );
}

export default Button;
