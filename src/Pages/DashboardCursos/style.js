import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import MeetDashboard from "../../assets/meeting_dashboard.svg";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "30px",
    width: "1140px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.up("md")]: { width: "100%" },
  },
  headerPage: {
    width: "100%",
    height: "235px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginBottom: "50px",
    display: "flex",
    [theme.breakpoints.up("md")]: { width: "100%" },
  },
  textContent: {
    width: "50%",
    paddingLeft: "118px",
    paddingTop: "43px",
  },
  imgContent: {
    width: "50%",
    paddingTop: "43px",
    paddingLeft: "120px",
  },
  imgMeeting: {
    width: "209px",
    height: "173px",

    background: `url(${MeetDashboard})`,
  },
  content: {
    width: "1140px",
    marginBottom: "50px",

    [theme.breakpoints.up("md")]: { width: "100%" },
  },
  footer: {
    width: "100%",
    height: "60px",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: "60px",
      textAlign: "center",
    },
  },
  headerTitle: {
    fontFamily: "Poppins",
    fontSize: "21px",
    lineHeight: "160%",
    color: "#200E64",
    marginBottom: "30px",
  },
  headerText: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    lineHeight: "160%",
    color: "#343434",
  },
}));

export default useStyles;
