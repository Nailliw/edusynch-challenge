import {
  AppBar,
  Avatar,
  Button,
  Hidden,
  IconButton,
  Menu,
  SwipeableDrawer,
  Toolbar,
} from "@material-ui/core";
import { React, useState } from "react";

import { useStyles, StyledBadge, StyledMenu } from "./style";
import Logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import {
  ArrowDownward,
  ArrowRight,
  ArrowRightAltSharp,
  ArrowUpward,
} from "@material-ui/icons";

const ITEM_HEIGHT = 48;
const DashboardNavigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar disableGutters position="static" className={classes.root}>
      <Toolbar disableGutters variant="dense" className={classes.Toolbar}>
        <div className={classes.toolbarLeft}>
          <div className={classes.toolbarLeftLogo}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <Hidden only={["xs", "ms", "xl"]}>
            <div className={classes.toolbarLeftText}>My Classes</div>
          </Hidden>
        </div>
        <div className={classes.toolbarRight}>
          <Hidden only={["xs", "ms", "xl"]}>
            <Button variant="contained" className={classes.toolbarRightButton}>
              Change to teacher mode
            </Button>
          </Hidden>
          <Hidden only={["xs", "ms", "xl"]}>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar src="https://image.freepik.com/fotos-gratis/escutando-voce-jovem-cao-bulldog-frances-esta-posando-fofo-cachorrinho-preto-e-branco-brincalhao-ou-animal-de-estimacao-esta-brincando-e-parecendo-feliz-isolado-no-fundo-branco-conceito-de-movimento-acao-movimento_155003-34898.jpg" />
            </StyledBadge>
          </Hidden>
          <Hidden only={["md", "lg", "xl"]}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {anchorEl ? <ArrowUpward /> : <ArrowDownward />}
            </IconButton>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div className={classes.customizedMenu}>
                <div>Change to teacher mode</div>
                <ArrowRightAltSharp />
              </div>
            </StyledMenu>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar src="https://image.freepik.com/fotos-gratis/escutando-voce-jovem-cao-bulldog-frances-esta-posando-fofo-cachorrinho-preto-e-branco-brincalhao-ou-animal-de-estimacao-esta-brincando-e-parecendo-feliz-isolado-no-fundo-branco-conceito-de-movimento-acao-movimento_155003-34898.jpg" />
            </StyledBadge>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavigation;
