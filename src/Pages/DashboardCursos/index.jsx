import { Hidden, Container, CssBaseline } from "@material-ui/core";
import React from "react";

import useStyles from "./style";
import "./styles.css";

import DashboardNavigation from "../../Components/DashboardNavigation";

import CardCourse from "../../Components/CardCourse";
import DashBoardMobile from "../../Components/DashboardMobile";

const DashboardCursos = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        width: "100%",
      }}
    >
      <Hidden only={["xs", "ms", "xl"]}>
        <DashboardNavigation />
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
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <DashBoardMobile />
      </Hidden>
    </div>
  );
};

export default DashboardCursos;
