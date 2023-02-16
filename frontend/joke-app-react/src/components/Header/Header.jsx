import React from "react";
import HeaderStyle from "./HeaderStyle.css";
import Logo from "../../assets/images/logo-interview.png";
import ImgUser from "../../assets/images/img-user.png";
function Header() {
  return (
    <div className="header-bg d-flex justify-content-around ">
      <div className="logo ">
        <img src={Logo} />
      </div>
      <div className="account d-flex justify-content-end">
        <div>
          <h6>Was careated by </h6>
          <span>Jh Jims</span>
        </div>
        <img src={ImgUser} />
      </div>
    </div>
  );
}

export default Header;
