import React from "react";
import "./style.css";
import useStyles from "./makestyle.js";
import { Container } from "@material-ui/core";
import CustomForm from "../../Components/CustomForm";

const HomeMobile = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.headerText}>
        <span className={classes.headerTextOne}>Find your</span>
        <span className={classes.headerTextTwo}>BEST TEACHER</span>
      </div>
      <div className={classes.formControl}>
        <CustomForm />
      </div>
      <div className={classes.secondContent}>
        <div className="segundoShape"></div>
        <div className="terceiroShapeContent">
          <div className="terceiroShape"></div>
        </div>

        <div className="primeiroShape"></div>
      </div>
    </Container>
  );
};

export default HomeMobile;
