import { Typography, Card, CardContent } from "@material-ui/core";

const Profile = ({ name, username, email, phone, website }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3">
          Name: <b>{name}</b>
        </Typography>
        <Typography variant="h3">
          Username: <b>{username}</b>
        </Typography>
        <Typography variant="h3">
          Email: <b>{email}</b>
        </Typography>
        <Typography variant="h3">
          Phone: <b>{phone}</b>
        </Typography>
        <Typography variant="h3">
          Website: <b>{website}</b>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
