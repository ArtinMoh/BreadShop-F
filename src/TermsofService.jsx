import React, { useEffect, useRef, useState } from "react";
// import BreadHeader from "./Bread_Header";
// import BreadFooter from "./Bread_Footer";
// import { Button } from "./UI_elements";
// import Tooltip from "@mui/material/Tooltip";

import The1stBread from "./assets/images/The1stBread.png";
import BreadImg2 from "./assets/images/BreadImg2.png";
import BreadImg3 from "./assets/images/BreadImg3.png";

import MailIcon from "./assets/images/Mail_Icon.svg";
import PhoneIcon from "./assets/images/Phone_Icon.svg";

import emptyCartImg from "./assets/images/emptyCart_Icon.svg";

import ShowPassword_Icon from "./assets/images/ShowPassword_Icon.svg";
import ShowPasswordAfter_Icon from "./assets/images/ShowPasswordAfter_Icon.svg";

// import ProductsB from "./ProductsB.js";
import TermsofServiceContents from "./TermsofServiceContents";

import EllipseBlurinmain from "./assets/images/Ellipse (Blur in main).svg";

import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// //Tag Component
// import * as theTags from "./Components/theTags.js";

//theTags
import {
  Heading1,
  Heading2,
  ParagraphHeading,
  ParagraphFooter,
  ParagraphFooterL,
  Button,
} from "./Components/theTags.js";

const TermsofService = () => {
  const scrollBarsRef = useRef([]);
  const breadImages = [The1stBread, BreadImg2, BreadImg3];
  const [breadIndex, setBreadIndex] = useState(0);
  const [slideClass, setSlideClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  const navigate = useNavigate();

  return (
    <>
      <div id="mainsContainer" style={{ height: "0" }}>
        <main>
          <Heading1>Terms of Service</Heading1>
          <ParagraphHeading>
            Effective Date:{" "}
            <span
              style={{
                color: "#d2691e",
                backgroundColor: "#fff3e0",
                fontWeight: "bold",
              }}
            >
              August 9, 2025
              <br />
            </span>
          </ParagraphHeading>
        </main>
        <aside id="asideInmain">
          <div id="Blur-in-main">
            <img src={EllipseBlurinmain} alt="" />
          </div>
        </aside>
      </div>
      <TermsofServiceContents />
    </>
  );
};

export default TermsofService;
