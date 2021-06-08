import {
  makeStyles,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";

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

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(122, 87, 253, 1)",
  },
  Toolbar: {
    display: "flex",
    flexWrap: "nowrap",
    paddingRight: "155px",
    paddingLeft: "155px",
    height: "64px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingRight: "24px",
      paddingLeft: "24px",
    },
  },
  toolbarLeft: {
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  toolbarLeftText: {
    marginLeft: "48px",
    fontFamily: "Open Sans",
    fontSize: "14px",
    letterSpacing: "-0.02em",
    lineHeight: "19px",
  },
  toolbarLeftLogo: {
    height: "100%",
  },
  toolbarRight: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  toolbarRightButton: {
    background: "rgba(32, 14, 100, 0.3)",
    color: "white",
    marginRight: "28px",
  },
  customizedMenu: {
    textAlign: "center",
    width: "320px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
    color: "rgba(122, 87, 253, 1)",
  },
}));

export const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

export const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

export const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "100%",
    height: "58px",
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "11px",
    textTransform: "uppercase",
    alignItems: "center",

    justifyContent: "space-between",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
