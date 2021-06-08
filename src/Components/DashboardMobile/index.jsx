import { Container } from "@material-ui/core";
import React from "react";
import CardCourse from "../CardCourse";
import DashboardNavigationMobile from "../DashboardNavigation";

import { useStyles } from "./style";

const DashBoardMobile = () => {
  const classes = useStyles();
  return (
    <>
      <DashboardNavigationMobile />
      <Container disableGutters className={classes.container}>
        <div className="tearDashBigger"></div>
        <div className="tearDashMinor"></div>
        <div className={classes.headerPage}>
          <div className={classes.textContent}>
            <div className={classes.headerTitle}>
              Hello <strong>Student</strong>{" "}
            </div>
            <div className={classes.headerText}>
              Whether you are a student trying to find your ideal private
              language teachers/tutors
            </div>
          </div>
          <div className={classes.imgContent}>
            <div className={classes.imgMeeting}></div>
          </div>
        </div>
        <div className={classes.content}>
          <CardCourse />
        </div>
        <div className={classes.footer}>
          Copyright © 2020 Eduick. Todos os direitos reservados.
        </div>
      </Container>
    </>
  );
};

export default DashBoardMobile;
