import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "16px",
  },
  FormControlLabel1: {
    backgroundColor: "rgba(255, 255, 255, 0.24)",
    width: "130px",
    height: "48px",
  },
  FormControlLabel2: {
    width: "130px",
    height: "48px",
  },
  FormControlLabel2Button: {
    backgroundColor: "#fff",
    opacity: "0.2",
    width: "18px",
    height: "18px",
    marginRight: "5px",
  },
  FormControlLabel1Button: {
    backgroundColor: "yellow",
    opacity: "0.2",
    width: "18px",
    height: "18px",
    marginRight: "5px",
    borderRadius: "4px",
  },
  TextField: {
    width: "100%",
    marginBottom: "16px",
  },
}));

export default useStyles;
