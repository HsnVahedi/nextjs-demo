import Layout from "../../src/layout";
import Header from "../../src/components/users/detail/header";
import Content from "../../src/components/users/detail/content";
import { getUser, getUsers } from "../../src/modules/users";

export const User = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <Content user={user} />
    </>
  );
};

const Page = ({ userData, usersData }) => {
  const user = JSON.parse(userData);
  const users = JSON.parse(usersData);
  return (
    <Layout users={users}>
      <User user={user} />
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const users = await getUsers();
  const user = await getUser(query.username);
  return {
    props: {
      usersData: JSON.stringify(users),
      userData: JSON.stringify(user),
    },
  };
};

export default Page;
