import { Button, ListItem, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import { Lock as LockIcon } from "react-feather";

import { useAuth } from "../../../context/auth";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: "auto",
  },
}));

const Login = () => {
  const classes = useStyles();

  const { user } = useAuth();
  const router = useRouter();

  const paddingLeft = 8;
  const style = { paddingLeft };

  return user ? null : (
    <ListItem disableGutters className={classes.item}>
      <Button
        className={classes.button}
        onClick={() => router.push("/login")}
        style={style}
      >
        <LockIcon className={classes.icon} size="20" />
        <span className={classes.title}>Login</span>
      </Button>
    </ListItem>
  );
};

export default Login;
