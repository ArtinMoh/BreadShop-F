import React from "react";

import XIcon from "./assets/images/SocialMedia-Icons/X.svg";
import InstagramIcon from "./assets/images/SocialMedia-Icons/Instagram.svg";
import BreadShopLogo from "./assets/images/BreadShop - Logo.svg";

const BreadFooter = () => {
  return (
    <footer>
      <div id="footerContainer">
        <div id="footerContentStart">
          <div id="footerLogo">
            <img src={BreadShopLogo} alt="Bread Shop Logo" />
          </div>
          <div id="footerTextforlogo">
            <p>© 2025 Bread Shop. All rights reserved.</p>
          </div>
          <div
            id="footerDividerSmallWidth"
            style={{
              display: "none",
              width: "65%",
              height: "1px",
              placeSelf: "center",
              background: "#e0c4a8",
              borderRadius: "100px",
            }}
          ></div>
          <div id="footerLinks">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="footerDivider"></div>

        <div id="footerContentEnd">
          <span>
            You just visited BreadShop!
            <br />
            Born in Manhattan in 2021, BreadShop is your cozy online corner for
            fresh-baked goodness.
            <br />
            We craft artisan breads and tasty companion products with care,
            passion, and a pinch of joy. Whether you're here for a classic loaf
            or a new flavor twist, we hope you savor every bite. Thanks for
            stopping by—and remember: life’s too short for bad bread. 🍞❤️
          </span>
          <span className="TextCondensedMedium">Find us on social media!</span>
          <div id="SocialMedia-Icons-Buttons-Container">
            <a
              className="SocialMedia-Icons-Buttons tooltip"
              data-tooltip="X (Twitter): @BreadShop"
              href="http://google.com"
            >
              <img src={XIcon} alt="X" />
            </a>
            <a
              className="SocialMedia-Icons-Buttons tooltip"
              data-tooltip="Instagram: @BreadShop"
              href="http://google.com"
            >
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BreadFooter;
