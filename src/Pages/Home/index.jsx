import "./style.css";
import useStyles from "./makestyles";
import {
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Hidden,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";

import HomeMobile from "../../Components/HomeMobile";
import CustomButton from "../../Components/CustomButton";
import NavBar from "../../Components/NavBar";

const Home = () => {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <>
      <Hidden only={["lg", "md", "xl"]}>
        <HomeMobile />
      </Hidden>
      <Hidden only={["xs", "ms"]}>
        <NavBar />
        <Container disableGutters className={classes.container}>
          <div className="shapeContent">
            <div className="thirdShape"></div>
            <div className="secondShape"></div>
            <div className="firstShape"></div>
            <div className="tearShape"></div>
            <div className="squareShape"></div>
          </div>
          <div className="shapeContentRight">
            <div className="firstShapeRight"></div>
            <div className="secondShapeRight"></div>
          </div>
          <div className={classes.content}>
            <div>
              <div className={classes.titleContainer}>
                <span className="textTitle">Find your</span>
                <span className="textSubtitle">BEST TEACHER</span>
              </div>
              <div className={classes.textContent}>
                <span>
                  Whether you are a student trying to find your ideal private
                  language teachers/tutors or a teacher trying to find great
                  students for your customised private lessons!
                </span>
              </div>
              <form
                onSubmit={handleSubmit}
                noValidate
                className={classes.formContent}
              >
                <TextField
                  variant="filled"
                  name="search"
                  required
                  type="text"
                  placeholder="Type here what are you looking for"
                />

                <Grid wrap="nowrap" container item>
                  <FormControl component="fieldset">
                    <RadioGroup
                      style={{
                        display: "flex",
                      }}
                      aria-label="quiz"
                      name="quiz"
                      row
                    >
                      <FormControlLabel
                        label="I'M A TEACHER"
                        value="teacher"
                        control={<Radio />}
                        className="btn-teacher-search"
                      />{" "}
                      <FormControlLabel
                        label="I'M A STUDENT"
                        control={<Radio />}
                        type="radio"
                        value="student"
                        className="btn-student-search"
                      />
                    </RadioGroup>
                  </FormControl>
                  <CustomButton
                    variant="contained"
                    type="submit"
                    width="209px"
                    height="56px"
                  >
                    SEARCH
                  </CustomButton>
                </Grid>
              </form>
            </div>
          </div>
        </Container>
      </Hidden>
    </>
  );
};

export default Home;
