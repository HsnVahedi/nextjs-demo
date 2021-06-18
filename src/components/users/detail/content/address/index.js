import { Typography, Card, CardContent } from "@material-ui/core";

const Address = ({ street, suite, city, zipcode }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3">
          Street: <b>{street}</b>
        </Typography>
        <Typography variant="h3">
          Suite: <b>{suite}</b>
        </Typography>
        <Typography variant="h3">
          City: <b>{city}</b>
        </Typography>
        <Typography variant="h3">
          Zipcode: <b>{zipcode}</b>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Address;
