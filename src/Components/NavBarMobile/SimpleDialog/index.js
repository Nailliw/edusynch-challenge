import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { AppBar, DialogContent, TextField, Toolbar } from "@material-ui/core";

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
                    defaultValue="Enter your username"
                    variant="outlined"
                    style={{ marginBottom: "20px" }}
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Password"
                    type="password"
                    defaultValue="Default Value"
                    variant="outlined"
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
