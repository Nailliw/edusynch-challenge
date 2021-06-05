import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  rightSideMinorInput: {},
  rightSideMinorFirstButton: {
    color: "white",
    background: "rgba(121, 85, 232, 1)",
    width: "162px",
    height: "56px",
    border: "1px solid #a68eef",
    borderRadius: "4px",
  },
  rightSideMinorMiddleButton: {
    color: "white",
    background: "rgba(121, 85, 232, 0.3)",
    width: "162px",
    height: "56px",
    border: "1px solid #a68eef",
    borderRadius: "4px",
  },
  rightSideMinorLastButton: {
    color: "rgba(116, 79, 244, 1)",
    background: "#FFD74F",
    width: "162px",
    height: "56px",
    border: "1px solid #a68eef",
    borderRadius: "4px",
  },
}));

export default useStyles;
