import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Logo from "../../assets/logo.png";
import useStyles from "./style";
import SimpleDialog from "./SimpleDialog";

const NavbarMobile = () => {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <AppBar color="transparent" className={classes.root} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon onClick={handleClickOpen} />
          <SimpleDialog open={open} onClose={handleClose} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <img src={Logo} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMobile;
