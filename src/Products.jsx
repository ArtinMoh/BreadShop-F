import React, { useEffect, useRef, useState } from "react";
import BreadHeader from "./Bread_Header";
import BreadFooter from "./Bread_Footer";
import { Button } from "./UI_elements";
import Tooltip from "@mui/material/Tooltip";

import The1stBread from "./assets/images/The1stBread.png";
import BreadImg2 from "./assets/images/BreadImg2.png";
import BreadImg3 from "./assets/images/BreadImg3.png";

import ProductsB from "./ProductsB.js";

import EllipseBlurinmain from "./assets/images/Ellipse (Blur in main).svg";

import { useNavigate } from "react-router-dom";

//theTags
import {
  Heading1,
  Heading2,
  ParagraphHeading,
  ParagraphFooter,
} from "./Components/theTags.js";

const Products = ({ onAdd }) => {
  const handleAddClick = () => {
    onAdd(); // triggers global drop
  };
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

  // featured buttons
  function FeaturedBread({ bread }) {
    const [hovered, setHovered] = useState(false);
    const [showMore, setShowMore] = useState(false);

    return (
      <div className="featured-item">
        <img
          src={bread.image}
          alt={bread.name}
          className="featured-image"
          style={{
            transition: showMore
              ? "1s ease"
              : ".6s linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%)",
            filter: showMore == true ? "blur(100px)" : "",
          }}
        />
        <div className={`featured-overlay ${showMore ? "expanded" : ""}`}>
          <div className="overlay-content">
            <h3 className="featured-title">{bread.name}</h3>
            {showMore && (
              <p className="featured-description">{bread.description}</p>
            )}
          </div>
          <div id="featured-buttons">
            <button
              onClick={handleAddClick}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`featured-buttonPlus ${hovered ? "shrunkPlus" : ""}`}
            >
              {hovered ? "Add" : "+"}
            </button>
            <button
              onClick={() => setShowMore(!showMore)}
              style={{ backgroundColor: showMore ? "#d47a2f" : "#f69148" }}
              className={`featured-buttonMore-info more-info ${
                hovered ? "shrunk" : ""
              }`}
            >
              {hovered ? "..." : "More" && showMore ? "Less" : "More"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div id="mainsContainer" style={{ height: "0" }}>
        <main>
          <Heading1>All the Breads You'll Love</Heading1>
          <ParagraphHeading>
            Check out all the breads available <br /> and select your taste!
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

      <section id="featured-breads">
        <h2>All Breads</h2>
        <div className="featured-grid">
          {ProductsB.map((bread, index) => (
            <FeaturedBread key={index} bread={bread} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
