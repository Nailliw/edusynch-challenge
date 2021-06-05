import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { List } from "@material-ui/core";

import "./styles.css";
import useStyles from "./style";

const SimpleDialog = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth="true"
    >
      <List className={classes.root}>
        <div className={classes.text}>How it works</div>
        <div className={classes.text}>About Us</div>
        <Button
          color="secondary"
          variant="contained"
          className={classes.buttonStyle}
        >
          Get Started
        </Button>
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
