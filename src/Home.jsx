import { useEffect, useRef, useState } from "react";

// import Tooltip from "@mui/material/Tooltip";
//HeroUI Components
// import { Card, CardFooter, Image, Button } from "@heroui/react";

import The1stBread from "./assets/images/The1stBread.png";
import BreadImg2 from "./assets/images/BreadImg2.png";
import BreadImg3 from "./assets/images/BreadImg3.png";
import EllipseBlurinmain from "./assets/images/Ellipse (Blur in main).svg";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import ProductsB from "./ProductsB.js";
// import { style } from "framer-motion/client";

import {
  Heading1,
  Heading2,
  ParagraphHeading,
  ParagraphFooter,
} from "./Components/theTags.js";

const Home = ({ onAdd }) => {
  const handleAddClick = () => {
    onAdd(); // triggers global drop
  };
  const scrollBarsRef = useRef([]);
  const breadImages = [The1stBread, BreadImg2, BreadImg3];
  const [breadIndex, setBreadIndex] = useState(0);
  const [slideClass, setSlideClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  // fetchBreads
  const [fetchedBreads, setFetchedBreads] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/breads")
      .then((response) => {
        setFetchedBreads(response.data); // limit to 6 (used in Home (featured Breads))
      })
      .catch((error) => {
        console.error("Error fetching breads:", error);
      });
  }, []);

  const navigate = useNavigate();

  const setActiveBar = (index) => {
    scrollBarsRef.current.forEach((bar, i) => {
      if (bar) {
        bar.classList.toggle("active-Scrollbar", i === index);
        bar.classList.toggle("non-active-Scrollbar", i !== index);
      }
    });
  };

  const handleScrollBarClick = (index) => {
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (index === 2) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setActiveBar(0);

    const featuredSection = document.getElementById("featured-breads");
    const footerSection = document.querySelector("footer");

    const featuredObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveBar(entry.isIntersecting ? 1 : 0);
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

    // fallingBreads
    // const [dropCount, setDropCount] = useState(0);
    // const handleAddClick = () => {
    //   if (dropCount >= 2) return; // limit to 2 drops

    //   const breadId = dropCount === 0 ? "breadDrop1" : "breadDrop2";
    //   const bread = document.getElementById(breadId);

    //   if (bread && !bread.classList.contains("drop")) {
    //     bread.classList.add("drop");
    //     setDropCount((prev) => prev + 1);
    //   }
    // };

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
      <div id="mainsContainer">
        <main>
          <Heading1>
            Delicious Homemade <br />
            Bread
          </Heading1>
          <ParagraphHeading>
            Using only the finest ingredients to create fresh, artisanal bread
            for you to enjoy.
          </ParagraphHeading>
          <button className="shop-button" onClick={() => navigate("/Products")}>
            See All Breads Now!
          </button>
        </main>

        <aside id="asideInmain">
          <div id="asideImgContainer">
            <img
              src={breadImages[breadIndex]}
              alt="Freshly baked bread"
              onClick={handleBreadClick}
              style={{
                cursor: isAnimating ? "not-allowed" : "pointer",
                opacity: isAnimating ? 0.7 : 1,
              }}
              className={slideClass}
            />
          </div>
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
        <h2>Featured Breads</h2>
        <div className="featured-grid">
          {fetchedBreads.slice(0, 6).map((bread, index) => (
            <FeaturedBread key={index} bread={bread} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
