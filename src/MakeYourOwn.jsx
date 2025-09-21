import React, { useEffect, useRef, useState } from "react";
// import BreadHeader from "./Bread_Header";
// import BreadFooter from "./Bread_Footer";
// import { Button } from "./UI_elements";
// import Tooltip from "@mui/material/Tooltip";

import The1stBread from "./assets/images/The1stBread.png";
import BreadImg2 from "./assets/images/BreadImg2.png";
import BreadImg3 from "./assets/images/BreadImg3.png";

import MYOBoard from "./assets/images/MYOBoard.png";

import MailIcon from "./assets/images/Mail_Icon.svg";
import PhoneIcon from "./assets/images/Phone_Icon.svg";

import emptyCartImg from "./assets/images/emptyCart_Icon.svg";

import ShowPassword_Icon from "./assets/images/ShowPassword_Icon.svg";
import ShowPasswordAfter_Icon from "./assets/images/ShowPasswordAfter_Icon.svg";

// import ProductsB from "./ProductsB.js";

import EllipseBlurinmain from "./assets/images/Ellipse (Blur in main).svg";

import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// //Tag Component
// import * as theTags from "./Components/theTags.js";
import PrivacyPolicyContents from "./PrivacyPolicyContents";

//theTags
import {
  Heading1,
  Heading2,
  ParagraphFooter,
  ParagraphFooterL,
  ParagraphHeading,
} from "./Components/theTags.js";

const MakeYourOwn = () => {
  const scrollBarsRef = useRef([]);
  const breadImages = [The1stBread, BreadImg2, BreadImg3];
  const [breadIndex, setBreadIndex] = useState(0);
  const [slideClass, setSlideClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  const navigate = useNavigate();

  const [checkedSesame, setCheckedSesame] = useState(false);
  const [checkedDill, setCheckedDill] = useState(false);

  return (
    <>
      <div id="mainsContainer" style={{ height: "0", padding: "0" }}>
        <div
          id="mainMYOContent"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "85%",
            minHeight: "60px",
            height: "auto",
            position: "absolute",
            transition: "0.3s ease-in-out",
            textAlign: "center",
          }}
        >
          <Heading1>
            Make Your Own{" "}
            <span
              style={{
                color: "#d2691e",
                backgroundColor: "#fff3e0",
                fontWeight: "bold",
              }}
            >
              Bread
              <br />
            </span>
            or{" "}
            <span
              style={{
                color: "#d2691e",
                backgroundColor: "#fff3e0",
                fontWeight: "bold",
              }}
            >
              Cake!
              <br />
            </span>
          </Heading1>
        </div>
      </div>
      <div id="MYOContainer">
        <div id="MYOContent">
          <div id="MYOBoard">
            <img src={MYOBoard} alt="" />
          </div>
          <aside id="MYOAside">
            <ParagraphFooterL>Add the things:</ParagraphFooterL>
            <hr
              style={{
                width: "35%",
                height: "1px",
                background: "gray",
                border: "none",
              }}
            />
            <div
              id="MYOItems"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "2px",
                flexDirection: "column",
              }}
            >
              <span id="MYOTheItem-1">
                <span
                  onClick={() => setCheckedSesame(!checkedSesame)}
                  className={
                    checkedSesame
                      ? "MYOItems-checked MYOcheckBox"
                      : "MYOItems-unchecked MYOcheckBox"
                  }
                >
                  <span
                    className={
                      checkedSesame
                        ? "MYOcheckBoxRadioTrue MYOcheckBoxRadio"
                        : "MYOcheckBoxRadio"
                    }
                  ></span>
                </span>
                <ParagraphFooter>Sesame</ParagraphFooter>
              </span>
              <span id="MYOTheItem-2">
                <span
                  onClick={() => setCheckedDill(!checkedDill)}
                  className={
                    checkedDill
                      ? "MYOItems-checked MYOcheckBox"
                      : "MYOItems-unchecked MYOcheckBox"
                  }
                >
                  <span
                    className={
                      checkedDill
                        ? "MYOcheckBoxRadioTrue MYOcheckBoxRadio"
                        : "MYOcheckBoxRadio"
                    }
                  ></span>
                </span>
                <ParagraphFooter>Dill</ParagraphFooter>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default MakeYourOwn;
