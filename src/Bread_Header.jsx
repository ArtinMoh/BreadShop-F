// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadShopLogo from "./assets/images/BreadShop - Logo.svg";
import theBucket from "./assets/images/Header-Icons/BreadShop - Bucket.svg";
import bucketFull from "./assets/images/Header-Icons/BreadShop - Bucket Full.svg";
import breadImg1 from "./assets/images/Header-Icons/BreadShop - Bread.svg";
import breadImg2 from "./assets/images/Header-Icons/BreadShop - Bread2.svg";

/** Bread Header Component */
const BreadHeader = () => {
  const navigate = useNavigate();

  return (
    <header>
      <img src={BreadShopLogo} alt="BreadShop" />
      <div></div>
      <ul id="headerItems">
        <li className="headerItems-li" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="headerItems-li" onClick={() => navigate("/Products")}>
          Products
        </li>
        <li className="headerItems-li" onClick={() => navigate("/About-Us")}>
          About Us
        </li>
        <li
          onClick={() => navigate("/Cart")}
          data-tooltip="See Your Cart"
          id="bucket"
          className="headerItems-li tooltip-small-bottom"
        >
          <img src={theBucket} alt="Bucket" />
        </li>
      </ul>
      <img
        id="breadDrop1"
        src={breadImg1}
        alt="Bread 1"
        className="falling-bread bread-one"
      />
      <img
        id="breadDrop2"
        src={breadImg2}
        alt="Bread 2"
        className="falling-bread bread-two"
      />
    </header>
  );
};

export default BreadHeader;
