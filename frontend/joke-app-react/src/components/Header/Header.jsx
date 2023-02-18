import React from "react";
import HeaderStyle from "./HeaderStyle.css";
import Logo from "../../assets/images/logo_img.png";
import ImgUser from "../../assets/images/user_img.png";
function Header() {
  return (
    <div className="header-bg d-flex justify-content-around ">
      <div className="logo-container">
        <img className="logo " src={Logo} />
      </div>
      <div className="account d-flex justify-content-end">
        <div className="user-text d-flex align-items-end flex-column">
          <div className="">
            <i className="user">HandiCrafted by </i>
          </div>
          <span className="name-user">Jh Jims</span>
        </div>
        <img className="user-img " src={ImgUser} />
      </div>
    </div>
  );
}

export default Header;
