import React from "react";
import BannerStyle from "./BannerStyle.css";
function Banner() {
  return (
    <div className="banner-bg d-flex d-flex justify-content-center align-items-center flex-column">
      <h3 className="banner-text">A Joke a day keeps doctor away</h3>
      <span class="banner-text-small">If you joke wrong way, your teeth have to pay. (Serious)</span>
    </div>
  );
}

export default Banner;
