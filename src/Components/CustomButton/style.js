import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    color: "rgba(111, 72, 236, 1)",
    background: "rgba(255, 215, 79, 1)",
    width: "100%",
    borderRadius: "4px",
    textTransform: "none",
    "&:hover": {
      background: "rgba(255, 215, 79, 1)",
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.1rem rgba(111, 72, 236,.4)",
    },
  },
}));

export default useStyles;
