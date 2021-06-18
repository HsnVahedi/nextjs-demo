import { Typography, Card, CardContent } from "@material-ui/core";

const Company = ({ name, catchPhrase, bs }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3">
          Name: <b>{name}</b>
        </Typography>
        <Typography variant="h3">
          Catch Phrase: <b>{catchPhrase}</b>
        </Typography>
        <Typography variant="h3">
          Bs: <b>{bs}</b>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Company;
