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
  Button,
} from "./Components/theTags.js";

const Login = () => {
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
          <Heading1>Login / Sign Up</Heading1>
          <ParagraphHeading>
            Let's get into the{" "}
            <span
              style={{
                color: "#d2691e",
                backgroundColor: "#fff3e0",
                fontWeight: "bold",
              }}
            >
              BreadShop
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
      <div id="loginPanel">
        <div id="loginPanelContainer">
          <div id="login&signUpContainer">
            <div id="login&signUpBg">
              <div id="loginSection" className="loginandsignUpButtonsActive">
                Continue
              </div>
              <div
                id="signUpSection"
                className="loginandsignUpButtonsNotActive"
              >
                Sign Up
              </div>
            </div>
          </div>
          <form id="form">
            <div id="formContainer">
              <div className="LoginInfo">
                <div className="LoginInfoInputAndTexts">
                  <div style={{ marginLeft: "8px" }}>Username:</div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="infoInputs"
                  />
                </div>
                <div className="LoginInfoInputAndTexts">
                  <div style={{ marginLeft: "8px" }}>Password:</div>
                  <div id="passwordContainer">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="infoInputs"
                    />
                    <button
                      style={{ cursor: "pointer" }}
                      type="button"
                      id="showPassword"
                      onClick={() => {
                        const passwordInput =
                          document.getElementById("password");
                        const showPasswordIcon =
                          document.getElementById("ShowPassword_Icon");
                        if (passwordInput.type === "password") {
                          passwordInput.type = "text";
                          showPasswordIcon.src = ShowPasswordAfter_Icon;
                        } else {
                          passwordInput.type = "password";
                          showPasswordIcon.src = ShowPassword_Icon;
                        }
                      }}
                    >
                      <img
                        src={ShowPassword_Icon}
                        alt=""
                        id="ShowPassword_Icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div id="loginPanelDividerContainer">
                <div id="loginPanelDivider"></div>
                <div style={{ display: "contents" }}>or</div>
                <div id="loginPanelDivider"></div>
              </div>
              <div className="LoginInfoThirds">
                <div className="auth-box">
                  <button className="auth-btn auth-google">
                    <img
                      src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/google-icon.svg"
                      alt="Google logo"
                    />
                    Continue with Google
                  </button>

                  <button className="auth-btn auth-microsoft">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                      alt="Microsoft logo"
                    />
                    Continue with Microsoft
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
