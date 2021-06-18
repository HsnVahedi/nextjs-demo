import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
} from "@material-ui/core";
import { Menu as MenuIcon } from "react-feather";
import Logo from "../../components/logo";
import Link from "../../components/link";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 64,
  },
}));

function TopBar({ onMobileNavOpen }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={() => {
              onMobileNavOpen();
            }}
          >
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <Link href="/">
            <Logo />
          </Link>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        <Box ml={2}></Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
