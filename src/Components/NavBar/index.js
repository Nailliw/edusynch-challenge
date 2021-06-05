import React from "react";
import { Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import "./style.css";
import useSStyles from "./buttonstyle";
import NavbarMobile from "../NavBarMobile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1),
  },
}));

const Navbar = (props) => {
  const classes = useSStyles();
  const { width } = props;
  return (
    <div className={classes.container}>
      <Hidden only={["lg", "md"]}>
        <NavbarMobile />
      </Hidden>
      <Hidden only={["sm", "xl", "xs"]}>
        <div className="navbar">
          <div className="leftSideBar">
            <div>
              <img src={Logo} />
            </div>
            <div className="leftSideBarInner">
              <a style={{ textDecoration: "none", color: "white" }}>
                How it works
              </a>
              <a style={{ textDecoration: "none", color: "white" }}>About Us</a>
            </div>
          </div>
          <div className="rightSideBar">
            <Button className={classes.button}>Get Started</Button>
          </div>
        </div>
      </Hidden>
    </div>
  );
};

Navbar.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Navbar);
