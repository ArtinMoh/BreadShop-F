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
} from "./Components/theTags.js";

const Cart = () => {
  const scrollBarsRef = useRef([]);
  const breadImages = [The1stBread, BreadImg2, BreadImg3];
  const [breadIndex, setBreadIndex] = useState(0);
  const [slideClass, setSlideClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  const navigate = useNavigate();

  const setActiveBar = (index) => {
    scrollBarsRef.current.forEach((bar, i) => {
      if (bar) {
        bar.classList.toggle("active-Scrollbar", i === index);
        bar.classList.toggle("non-active-Scrollbar", i !== index);
      }
    });
  };

  useEffect(() => {
    setActiveBar(0);

    const featuredSection = document.getElementById("mainsContainer");
    const footerSection = document.querySelector("footer");

    const featuredObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveBar(entry.isIntersecting ? 0 : 1);
        });
      },
      { threshold: 0.2 }
    );

    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveBar(entry.isIntersecting ? 2 : 1);
        });
      },
      { threshold: 0.2 }
    );

    if (featuredSection) featuredObserver.observe(featuredSection);
    if (footerSection) footerObserver.observe(footerSection);

    return () => {
      featuredObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const handleScrollBarClick = (index) => {
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (index === 2) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="mainsContainer" style={{ height: "0" }}>
        <main>
          <Heading1>Your Cart</Heading1>
          <ParagraphHeading>
            Hope you enjoy the{" "}
            <span
              style={{
                color: "#d2691e",
                backgroundColor: "#fff3e0",
                fontWeight: "bold",
              }}
            >
              Breads
              <br />
            </span>
            you'll eat!
          </ParagraphHeading>
        </main>

        <aside id="asideInmain">
          <div id="Blur-in-main">
            <img src={EllipseBlurinmain} alt="" />
          </div>
        </aside>
      </div>

      <div id="scrollBar">
        {[0, 1, 2].map((_, i) => (
          <span
            key={i}
            ref={(el) => (scrollBarsRef.current[i] = el)}
            className="non-active-Scrollbar"
            onClick={() => handleScrollBarClick(i)}
            style={{ cursor: i === 0 || i === 2 ? "pointer" : "default" }}
          ></span>
        ))}
      </div>
      <div id="selectedBreads">
        <div id="selectedBreadsContainer">
          <div className="selectedBreadItem">
            <img src="" alt="" />
            <div className="selectedBreadInfo selectedBreadInfoEmpty">
              <ParagraphFooter>
                You didn't pick a bread / Cart is empty
              </ParagraphFooter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
