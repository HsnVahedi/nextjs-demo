import { useState } from "react";
import { Button, Collapse, ListItem, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Users as UsersIcon } from "react-feather";

import User from "./user";
import { useUsers } from "../../../context/users";

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

const Users = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const users = useUsers();

  const paddingLeft = 8;
  const style = { paddingLeft };

  return (
    <ListItem disableGutters className={classes.item}>
      <Button
        className={classes.button}
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        style={style}
      >
        <UsersIcon className={classes.icon} size="20" />
        <span className={classes.title}>Users</span>
        {open ? (
          <ExpandLessIcon size="small" color="inherit" />
        ) : (
          <ExpandMoreIcon size="small" color="inherit" />
        )}
      </Button>
      <Collapse in={open}>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </Collapse>
    </ListItem>
  );
};

export default Users;
