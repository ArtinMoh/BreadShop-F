import React, { useEffect, useRef, useState } from "react";
// import BreadHeader from "./Bread_Header";
// import BreadFooter from "./Bread_Footer";
// import { Button } from "./UI_elements";
// import Tooltip from "@mui/material/Tooltip";

import The1stBread from "./assets/images/The1stBread.png";
import BreadImg2 from "./assets/images/BreadImg2.png";
import BreadImg3 from "./assets/images/BreadImg3.png";

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

const ItemRenderer = () => {
  const items = [
    {
      imgSrc: "#",
      altText: "Bakery Vector Image 1",
      message:
        "The Story began when we built our first shop in Manhattan, KewWays st.",
    },
    {
      imgSrc: "#",
      altText: "Bakery Vector Image 1",
      message:
        "The Story began when we built our first shop in Manhattan, KewWays st.",
    },
    {
      imgSrc: "#",
      altText: "Bakery Vector Image 1",
      message:
        "The Story began when we built our first shop in Manhattan, KewWays st.",
    },
  ];

  const itemUi = items.map((item, index) => (
    <div
      className={`step step--${index + 2}`}
      data-step={index + 2}
      data-aos="theFadeUp"
    >
      <img src={item.imgSrc} alt={item.altText} />
      <span>{item.message}</span>
    </div>
  ));

  // return React.Children.toArray(itemUi);
  return itemUi;
};

const AboutUs = () => {
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

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 6000,
      once: true,
    });
  }, []);

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

  const handleBreadClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideClass("slide-out");
    setTimeout(() => {
      setBreadIndex((prev) => (prev + 1) % breadImages.length);
      setSlideClass("slide-in");
    }, 300);
    setTimeout(() => {
      setSlideClass("");
      setIsAnimating(false);
    }, 600);
  };

  return (
    <>
      <div id="mainsContainer" style={{ height: "0" }}>
        <main>
          <Heading1>All about us</Heading1>
          <ParagraphHeading>
            How we started the{" "}
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
            and where we're going.
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
      <div id="breadMapBg">
        <div id="breadMapContainer">
          <div
            className="step step--large"
            data-step="Step 1"
            data-aos="theFadeUp"
          >
            <img src="#" alt="Bakery Vector Image 1" />
            <span>
              The Story began when we built our first shop in Manhattan, KewWays
              st.
            </span>
          </div>
          {/* {React.Children.toArray(<ItemRenderer />)} */}
          <ItemRenderer />
        </div>
      </div>
      <div id="contactUs">
        <div id="contactUsDetailsContainer">
          <div id="contactUsDetailsHeader">
            {/* <ParagraphHeading>Have any questions?</ParagraphHeading> */}
            <ParagraphHeading>The ways to contact us!</ParagraphHeading>
          </div>
          <div id="contactUsDetails">
            <span id="contactUsEmail">
              <img src="" alt="" />
              ContactUs@BreadShop.co
            </span>
            <span id="contactUsNumber">
              <img src="" alt="" />
              +1 555 134 1248
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
