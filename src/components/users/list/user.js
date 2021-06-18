import { Box, Paper, Grid, Typography, Avatar } from "@material-ui/core";
import Link from "../../link";

const User = ({ id, username, name, email }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper variant="outlined">
        <Box p={2} display="flex" alignItems="center">
          <Avatar alt={name} src={`/static/avatars/${id}.jpg`} />
          <Box flexGrow={1} mx={2}>
            <Link href={`/users/${username}`}>{name}</Link>
            <br />
            <br />
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {email}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default User;
