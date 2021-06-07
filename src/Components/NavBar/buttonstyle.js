import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  button: {
    color: "rgba(111, 72, 236, 1)",
    background: "rgba(255, 215, 79, 1)",
    width: "165px",
    height: "48px",
    borderRadius: "4px",
    "&:hover": {
      background: "rgba(255, 215, 79, 1)",
    },
  },
  dialogLogin: {
    width: "525px",
    height: "479px",
  },
  title: {
    display: "flex",
    flexWrap: "wrap",
    height: "100px",
    marginTop: "40px",
  },
  contentDialog: {},
  closeButton: {
    position: "absolute",
    color: "white",
    right: "-20px",
    top: "-20px",
    background: "rgba(32, 14, 100, 1)",
  },
  text1: {
    width: "100%",
    fontFamily: "Poppins",
    fontSize: "38px",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  text2: {
    width: "100%",
    fontFamily: "Poppins",
    fontSize: "48px",
    fontWeight: "bold",
    color: "rgba(255, 215, 79, 1)",
  },
  contentDialogModal: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
}));
