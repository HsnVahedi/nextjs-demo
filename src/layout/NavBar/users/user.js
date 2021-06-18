import clsx from "clsx";
import { Button, ListItem, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  buttonLeaf: {
    color: theme.palette.text.secondary,
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightRegular,
    "&.depth-0": {
      "& $title": {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },
  title: {
    marginRight: "auto",
  },
  active: {
    color: theme.palette.secondary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.secondary.main,
    },
  },
}));

const User = ({ user }) => {
  const classes = useStyles();
  const paddingLeft = 40;
  const style = { paddingLeft };
  const router = useRouter();

  return (
    <ListItem key={user.id} disableGutters className={classes.itemLeaf}>
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, "depth-1")}
        style={style}
        onClick={() => {
          router.push(`/users/${user.username}`);
        }}
      >
        <span className={classes.title}>{user.name}</span>
      </Button>
    </ListItem>
  );
};

export default User;
