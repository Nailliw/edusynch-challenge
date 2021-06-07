import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {
  AppBar,
  DialogContent,
  TextField,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./styles.css";
import useStyles from "./style";
import CustomButton from "../../CustomButton";
import Logo from "../../../assets/logo.png";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SimpleDialog = (props) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const { onClose, selectedValue, open } = props;

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClose = () => {
    onClose(selectedValue);
  };

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

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullScreen
    >
      <AppBar color="transparent" className={classes.rootAppBar}>
        <Toolbar className={classes.appBar}>
          <div>
            <img src={Logo} />
          </div>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClickClose}
            aria-label="close"
          >
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent style={{ backgroundColor: "#200E64" }}>
        <div className={classes.root}>
          <div className={classes.text}>How it works</div>
          <div className={classes.text}>About Us</div>
          <Button
            onClick={handleClickOpen}
            height="48px"
            marginTop="59px"
            variant="contained"
            className={classes.button}
          >
            Get Started
          </Button>
          <Dialog
            className={classes.contentDialog}
            fullScreen
            open={openDialog}
            onClose={handleClose}
          >
            <AppBar color="transparent" className={classes.rootAppBar}>
              <Toolbar className={classes.appBar}>
                <div className={classes.title}>
                  <span className={classes.text1}>Get Started</span>
                  <span className={classes.text2}>JUST LOGIN</span>
                </div>

                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClickClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
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

                <CustomButton className={classes.btnLogin}>LOGIN</CustomButton>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
