import React from "react";
import { Button } from "@material-ui/core";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import "./style.css";
import useStyles from "./buttonstyle";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className="navbar">
      <div className="leftSideBar">
        <div>
          <img src={Logo} />
        </div>
        <div className="leftSideBarInner">
          <a style={{ textDecoration: "none", color: "white" }}>How it works</a>
          <a style={{ textDecoration: "none", color: "white" }}>About Us</a>
        </div>
      </div>
      <div className="rightSideBar">
        <Button className={classes.button}>Get Started</Button>
      </div>
    </div>
  );
};

export default Navbar;
