import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
//components
import Header from "./components/header";
//Styles
import "./App.scss";
import Gallery from "./pages/Gallery";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  const updateHeight = () => {
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  React.useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  });

  const imageDetails = {
    width: 524,
    height: 600,
  };

  const imageDetailsSmall = {
    width: 324,
    height: 400,
  };

  return (
    <div>
      <CustomCursor />
      <Router>
        <Header />
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
                      window.innerWidth >= 768 && window.innerHeight >= 750
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
                      window.innerWidth >= 768 && window.innerHeight >= 750
                        ? imageDetails
                        : imageDetailsSmall
                    }
                  />
                )}
              />
            </AnimatePresence>
          )}
        />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/gallery" render={() => <Gallery />} />
      </Router>
    </div>
  );
}

export default App;
