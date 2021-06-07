import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    marginTop: "70px",
    width: "100%",
  },
  text: {
    width: "100%",
    textAlign: "center",
    marginTop: "15px",
    fontSize: "21px",
    fontFamily: "Open Sans",
    letterSpacing: "-2%",
    lineHeight: "28.6px",
  },
  contentDialog: {
    backgroundColor: "#6A40E4",
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
  },
  rootAppBar: { boxShadow: "none" },
  title: {
    marginTop: "24px",
    height: "80px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    display: "flex",
    flexWrap: "wrap",
  },
  text1: {
    fontSize: "22px",
    letterSpacing: "-0.06rem",
    lineHeight: "118%",
    color: "#fff",
    width: "100%",
  },
  text2: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#FFD74F",
    letterSpacing: "-0.06rem",
    lineHeight: "118%",
    width: "100%",
  },
  contentDialogModal: {
    width: "100%",
    marginTop: "130px",
  },
  btnLogin: {
    marginTop: "24px",
  },
  contentForm: {
    marginBottom: "24px",
  },
  button: {
    color: "rgba(111, 72, 236, 1)",
    background: "rgba(255, 215, 79, 1)",
    width: "100%",
    borderRadius: "4px",
    textTransform: "none",
    marginTop: "50px",
    "&:hover": {
      background: "rgba(255, 215, 79, 1)",
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.1rem rgba(111, 72, 236,.4)",
    },
  },
  root: {
    marginTop: "200px",
  },
}));

export default useStyles;
