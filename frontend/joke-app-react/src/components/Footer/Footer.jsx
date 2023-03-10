import React from "react";
import FooterStyle from "./FooterStyle.css";
function Footer() {
  return (
    <div className="footer d-flex d-flex justify-content-center align-items-center flex-column">
      <p className="footer-text">
        This website is created as part of Hisolutions program. The materials
        contained on this website are provided for general information only and
        do not constitute any form of advice. HLS assumes no responsibility for
        the accuracy of any particular statement and accepts no liability for
        any loss or damage which may arise from reliance on the information
        contained on this site.
      </p>
      <span className="coppy-right">Copyright 2021 HLS</span>
     
    </div>
  );
}

export default Footer;
