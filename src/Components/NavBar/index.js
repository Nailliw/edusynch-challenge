import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Hidden,
} from "@material-ui/core";

import Logo from "../../assets/logo.png";

import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import "./style.css";
import { useStyles } from "./buttonstyle";
import NavbarMobile from "../NavBarMobile";

import { AppBar, TextField, Toolbar, InputAdornment } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = React.useState(false);
  const { selectedValue, open } = props;

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClose = () => {};

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClickClose = () => {
    setOpenDialog(false);
    handleClose();
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={classes.container}>
      <Hidden only={["lg", "md", "xl"]}>
        <NavbarMobile />
      </Hidden>
      <Hidden only={["sm", "xs"]}>
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
            <Button onClick={handleClickOpen} className={classes.button}>
              Get Started
            </Button>
            <Dialog
              className={classes.contentDialog}
              open={openDialog}
              onClose={closeDialog}
            >
              <DialogTitle onClose={closeDialog} className={classes.rootAppBar}>
                {closeDialog ? (
                  <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={closeDialog}
                  >
                    <CloseIcon />
                  </IconButton>
                ) : null}
                <div className={classes.title}>
                  <span className={classes.text1}>Get Started</span>
                  <span className={classes.text2}>JUST LOGIN</span>
                </div>
              </DialogTitle>
              <DialogContent>
                <div className={classes.contentDialogModal}>
                  <form
                    noValidate
                    autoComplete="off"
                    className={classes.contentForm}
                  >
                    <TextField
                      id="outlined-helperText"
                      label="Username:"
                      variant="outlined"
                      style={{ marginBottom: "20px" }}
                    />
                    <TextField
                      id="outlined-helperText"
                      label="Password"
                      variant="outlined"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              style={{ color: "white" }}
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </form>
                  <Link to="/courses">
                    <CustomButton height="48px" width="132px">
                      LOGIN
                    </CustomButton>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
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
