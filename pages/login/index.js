import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";

import LoginForm from "../../src/components/login/form";
import Layout from "../../src/layout";
import { getUsers } from "../../src/modules/users";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    minHeight: "100%",
    flexDirection: "column",
    paddingBottom: 80,
    paddingTop: 80,
  },
}));

const Page = ({ usersData }) => {
  const users = JSON.parse(usersData);
  const classes = useStyles();
  const [authError, setAuthError] = useState(null);
  return (
    <Layout users={users}>
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h2" color="textPrimary">
                Login
              </Typography>
              {authError ? (
                <Typography gutterBottom variant="body1" color="error">
                  {authError}
                </Typography>
              ) : null}

              <Box mt={3}>
                <LoginForm setAuthError={setAuthError} />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const users = await getUsers();
  return {
    props: {
      usersData: JSON.stringify(users),
    },
  };
};

export default Page;
