import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    color: "#fff",
    paddingTop: "27px",
    paddingLeft: "27px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: "blue",
    color: "blue",
  },
}));

export default useStyles;
