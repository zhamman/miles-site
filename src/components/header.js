import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import "./header.scss";

import Menu from "./Menu";

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "MENU",
    color: "#fff",
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "MENU" });
    });
  });

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "MENU",
        color: "#1e1e1e",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "MENU",
        color: "#fff",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "CLOSE",
        color: "#1e1e1e",
      });
    }
    console.log(state.clicked);
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div style={{ zIndex: 10 }} className="logo">
            <Link to="/">MILES MAZEL</Link>
          </div>
          <ul className="nav-links">
            <Link to="/about/miles-mazel" className="link">
              <div className="mask">
                <div className="link-container">
                  <span class="link-title1 title">1.About</span>
                  <span class="link-title2 title">1.About</span>
                </div>
              </div>
            </Link>
            <Link to="/gallery" className="link">
              <div className="mask">
                <div className="link-container">
                  <span class="link-title1 title">2.Work</span>
                  <span class="link-title2 title">2.Work</span>
                </div>
              </div>
            </Link>
            <Link to="/contact" className="link">
              <div className="mask">
                <div className="link-container">
                  <span class="link-title1 title">3.Contact</span>
                  <span class="link-title2 title">3.Contact</span>
                </div>
              </div>
            </Link>
          </ul>
          <div className="menu" onClick={handleMenu}>
            <div
              style={{ zIndex: 10 }}
              disabled={disabled}
              onClick={handleMenu}
            >
              {state.menuName}
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
};

export default withRouter(Header);
