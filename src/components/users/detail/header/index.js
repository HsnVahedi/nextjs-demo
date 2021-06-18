import {
  Box,
  Container,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import WallPaper from "./wallpaper";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "9%",
  },
  avatar: {
    border: `2px solid ${theme.palette.common.white}`,
    height: 120,
    width: 120,
    top: -60,
    left: theme.spacing(3),
    position: "absolute",
  },
}));

const Header = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WallPaper owner={user} />
      <Container maxWidth="lg">
        <Box position="relative" mt={1} display="flex" alignItems="center">
          <Avatar
            alt={user.name}
            src={`/static/avatars/${user.id}.jpg`}
            className={classes.avatar}
          />
          <Box marginLeft="160px">
            <Typography variant="overline" color="textSecondary">
              {user.email}
            </Typography>
            <Typography variant="h4" color="textPrimary">
              {user.name}
            </Typography>
          </Box>
          <Box flexGrow={1} />
        </Box>
      </Container>
    </div>
  );
};

export default Header;
