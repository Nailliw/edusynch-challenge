import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "150px",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "100px",

    "@media (width:1024)": {
      paddingRight: "200px",
    },
  },

  content: {
    width: "100%",
    paddingLeft: "50%",
  },
  titleContainer: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    marginBottom: "60px",
  },
  textContent: {
    marginRight: "10rem",
    width: "496px",
    color: "#fff",
    fontFamily: "Open Sans",
    fontSize: "16px",
    lineHeight: "191%",
    marginBottom: "60px",
  },
  formContent: {
    width: "600px",
    height: "200px",
  },
  textFieldInput: {
    marginBottom: "29px",
  },
}));

export default useStyles;
