import { AppBar, Avatar, Button, Toolbar } from "@material-ui/core";
import React from "react";

import Logo from "../../assets/logo.png";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

const DashboardNavigationMobile = () => {
  const classes = useStyles();
  return (
    <AppBar disableGutters position="static" className={classes.root}>
      <Toolbar
        disableGutters
        variant="dense"
        className={classes.Toolbar}
      ></Toolbar>
    </AppBar>
  );
};

export default DashboardNavigationMobile;
