import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const CustomButton = ({ children, variant, height, marginTop }) => {
  const classes = useStyles();
  return (
    <Button
      variant={variant}
      className={classes.button}
      style={{ height: `${height}`, marginTop: `${marginTop}` }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
