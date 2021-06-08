import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  headerPage: {
    margin: "31px 24px 0px 24px",
    background: "#FFFFFF",
    height: "212px",
  },
  textContent: {
    paddingTop: "0",
  },
  footer: {
    background: "white",
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Poppins",
    fontSize: "21px",
    color: "#200E64",
    marginLeft: "21px ",
    paddingTop: "32px",
    lineHeight: "160%",
  },
  headerText: {
    padding: "26px 20px 0px 20px",
    fontFamily: "Open Sans",
    fontSize: "14px",
    lineHeight: "160%",
    color: "rgba(52, 52, 52, 1)",
  },
}));
