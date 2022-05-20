import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Menu.scss";
import { Link } from "react-router-dom";

const Menu = ({ state }) => {
  //variables for dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  //   let info = useRef(null);
  let social1 = useRef(null);
  let social2 = useRef(null);
  let social3 = useRef(null);
  let social4 = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReaveal(revealMenuBackground, revealMenu);
      //   fadeInUp(info);
      staggerText(line1, line2, line3);
      staggerSocials(social1, social2, social3, social4);
    }
  }, [state]);

  useEffect(() => {
    if (state.clicked === false && state.initial != null) {
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    }
  }, [state.clicked]);

  const staggerReaveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };
  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: -100,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const staggerSocials = node1 => {
    gsap.from([node1], {
      duration: 0.8,
      x: -500,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const handleHover = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };

  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={el => (menu = el)} className="hamburger-menu">
      <div
        ref={el => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={el => (revealMenu = el)} className="menu-layer">
        <div className="hamburger-container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to="/about/miles-mazel"

                      // onClick={() => (state = !state)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to="/gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      href="#contact"
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (social1 = el)} className="socials">
                <span>
                  <a href="facebook.com/milesmazel" target="blank">
                    FaceBook
                  </a>
                </span>
                <span>
                  <a href="/">Instagram</a>
                </span>
                <span>
                  <a href="/">Linkedin</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
