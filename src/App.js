import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
//components
// import Header from "./components/header";
//Styles
import "./App.scss";
import Gallery from "./pages/Gallery";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Header2 from "./components/header2";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  const updateHeight = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  });

  const imageDetails = {
    width: 424,
    height: 500,
  };

  const imageDetailsSmall = {
    width: 324,
    height: 400,
  };
  const imageDetailsTiny = {
    width: 224,
    height: 300,
  };

  return (
    <div>
      {/* <CustomCursor /> */}
      <Router>
        <ScrollToTop />
        <Header2 />
        {window.innerWidth >= 768 && (
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Route
                  key={1}
                  exact
                  path="/"
                  render={() => (
                    <Home
                      imageDetails={
                        window.innerWidth >= 768 && window.innerHeight >= 768
                          ? imageDetails
                          : imageDetailsSmall
                      }
                    />
                  )}
                />
                <Route
                  key={2}
                  exact
                  path="/about/:id"
                  render={() => (
                    <About
                      imageDetails={
                        window.innerWidth >= 768 && window.innerHeight >= 768
                          ? imageDetails
                          : imageDetailsSmall
                      }
                    />
                  )}
                />
              </AnimatePresence>
            )}
          />
        )}
        {window.innerWidth < 767 && (
          <div>
            <Route
              render={({ location }) => (
                <Route
                  key={1}
                  exact
                  path="/"
                  render={() => (
                    <Home
                      imageDetails={
                        window.innerWidth <= 767 &&
                        window.innerHeight <= 1000 &&
                        window.innerWidth >= 350 &&
                        window.innerHeight >= 620
                          ? imageDetailsSmall
                          : imageDetailsTiny
                      }
                    />
                  )}
                />
              )}
            />
            <Route
              key={2}
              exact
              path="/about/:id"
              render={() => (
                <About
                // imageDetails={
                //   window.innerWidth >= 768 && window.innerHeight >= 768
                //     ? imageDetails
                //     : imageDetailsSmall
                // }
                />
              )}
            />
          </div>
        )}

        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/gallery" render={() => <Gallery />} />
      </Router>
    </div>
  );
}

export default App;
