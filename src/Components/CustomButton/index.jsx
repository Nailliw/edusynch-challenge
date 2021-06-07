import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const CustomButton = ({
  children,
  variant,
  height,
  marginTop,
  width,
  type,
}) => {
  const classes = useStyles();
  return (
    <Button
      variant={variant}
      type={type}
      className={classes.button}
      style={{
        height: `${height}`,
        marginTop: `${marginTop}`,
        width: `${width}`,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
