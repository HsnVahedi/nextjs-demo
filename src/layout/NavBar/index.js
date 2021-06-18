import { useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Divider,
  Avatar,
  Drawer,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import { useRouter } from "next/router";

import Link from "../../components/link";
import Logo from "../../components/logo";
import Users from "./users";
import Login from "./login";
import Logout from "./logout";
import { useAuth } from "../../context/auth";

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    width: 64,
    height: 64,
  },
}));

function NavBar({ openMobile, onMobileClose, users }) {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [router.asPath]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <Link href="/">
              <Logo />
            </Link>
          </Box>
        </Hidden>
        {Boolean(user) && (
          <>
            <Box p={2}>
              <Box display="flex" justifyContent="center">
                <Avatar
                  alt={user.name}
                  className={classes.avatar}
                  src={`/static/avatars/${user.id}.jpg`}
                />
              </Box>
              <Box mt={2} textAlign="center">
                <Link href={`/users/${user.username}`}>{user.name}</Link>
              </Box>
            </Box>
            <Divider />
          </>
        )}
        <Box p={2}>
          <Users users={users} />
          <Login />
          <Logout />
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

export default NavBar;
