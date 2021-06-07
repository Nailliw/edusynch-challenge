import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "60px",
  },
  headerText: {
    display: "flex",
    flexWrap: "wrap",
  },
  headerTextOne: {
    fontSize: "28px",
    fontFamily: "Poppins",
    width: "100%",
    textAlign: "left",
    color: "#fff",
  },
  headerTextTwo: {
    fontSize: "28px",
    fontWeight: "bold",
    fontFamily: "Poppins",
    width: "100%",
    textAlign: "left",
    color: "rgba(255, 215, 79, 1)",
  },
  formControl: {
    marginTop: "60px",
    width: "100%",
  },
  secondContent: {
    marginTop: "60px",
    display: "flex",

    height: "450px",
    justifyContent: "center",
  },
}));

export default useStyles;
