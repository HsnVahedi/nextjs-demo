import { Box, Container, makeStyles, Grid, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

import User from "./user";
import { searchUsers } from "../../../modules/users";
import { useUsers } from "../../../context/users";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const Users = () => {
  const classes = useStyles();

  const users = useUsers();
  const [userResults, setUserResults] = useState(users);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const updateUsers = async () => {
      const updatedUsers = await searchUsers(name, email);
      setUserResults(updatedUsers);
    };
    updateUsers();
  }, [name, email]);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box mt={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Name"
                label="Search By Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Email"
                label="Search By Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            {userResults.map((user) => (
              <User
                key={user.id}
                id={user.id}
                username={user.username}
                name={user.name}
                email={user.email}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Users;
