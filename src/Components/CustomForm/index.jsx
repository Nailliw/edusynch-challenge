import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";

import React from "react";
import CustomButton from "../CustomButton";
import useStyles from "./style";
import "./style.css";

const CustomForm = () => {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Type here what are you looking for"
        variant="outlined"
        color="secondary"
        className={classes.TextField}
      />
      <FormControl>
        <RadioGroup className={classes.formContainer}>
          <FormControlLabel
            value="teacher"
            control={
              <Radio
                color="primary"
                className={classes.FormControlLabel1Button}
              />
            }
            label="I'M A TEACHER"
            className={classes.FormControlLabel1}
          />
          <FormControlLabel
            value="student"
            control={<Radio className={classes.FormControlLabel2Button} />}
            label="I'M A STUDENT"
            className={classes.FormControlLabel2}
          />
        </RadioGroup>
        <CustomButton>SEARCH</CustomButton>
      </FormControl>
    </form>
  );
};

export default CustomForm;
