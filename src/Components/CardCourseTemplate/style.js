import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
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
  cardContent: {
    width: "100%",
    height: "323px",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: "12px",
    color: "black",

    [theme.breakpoints.only("md")]: {
      width: "250px",
      padding: "0px",
      margin: "0px",
    },
  },
  card: {
    height: "300px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    paddingRightt: "10px",
  },
  cardContentText: {
    color: "rgba(32, 14, 100, 1)",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "160%",
    paddingRight: "13px",
    paddingLeft: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  cardActionsText: {
    backgroundColor: "rgba(207, 201, 233, 0.7)",
    width: "84px",
    height: "31px",
    fontFamily: "Open Sans",
    fontWeight: "600",
    fontSize: "10px",
    lineHeight: "160%",
    letterSpacing: "-0.01em",
    color: "rgba(0, 0, 0, 0.8)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
