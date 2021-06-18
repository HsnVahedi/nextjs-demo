import { useState } from "react";

import { create } from "jss";
import {
  StylesProvider,
  ThemeProvider,
  makeStyles,
  jssPreset,
} from "@material-ui/core";

import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { createTheme } from "../theme";

import { UsersProvider } from "../context/users";
import { AuthProvider } from "../context/auth";

const jss = create({ plugins: [...jssPreset().plugins] });

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
    minHeight: "1000px",
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const Content = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className={classes.root}>
      <TopBar
        onMobileNavOpen={() => {
          setMobileNavOpen(true);
        }}
      />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const Layout = ({ users, children }) => {
  const theme = createTheme();

  return (
    <AuthProvider>
      <UsersProvider users={users}>
        <ThemeProvider theme={theme}>
          <StylesProvider jss={jss}>
            <Content>{children}</Content>
          </StylesProvider>
        </ThemeProvider>
      </UsersProvider>
    </AuthProvider>
  );
};

export default Layout;
