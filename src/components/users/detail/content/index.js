import { Box, Container, Divider, Tab, Tabs, Grid } from "@material-ui/core";
import { useState } from "react";
import Profile from "./profile";
import Company from "./company";
import Address from "./address";

const Content = ({ user }) => {
  const { address, company } = user;
  const tabs = [
    { value: "profile", label: "Profile" },
    { value: "address", label: "Address" },
    { value: "company", label: "Company" },
  ];
  const [currentTab, setCurrentTab] = useState("profile");
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };
  return (
    <Container maxWidth="lg">
      <Box mt={3}>
        <Tabs
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={currentTab}
          textColor="secondary"
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Box>
      <Divider />
      <Box py={3} pb={6}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            {currentTab === "profile" && (
              <Profile
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
              />
            )}
            {currentTab === "address" && (
              <Address
                street={address.street}
                suite={address.suite}
                city={address.city}
                zipcode={address.zipcode}
              />
            )}
            {currentTab === "company" && (
              <Company
                name={company.name}
                catchPhrase={company.catchPhrase}
                bs={company.bs}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Content;
