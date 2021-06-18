import Layout from "../src/layout";
import { getUsers } from "../src/modules/users";
import Users from "../src/components/users/list";

const Page = ({ usersData }) => {
  const users = JSON.parse(usersData);
  return (
    <Layout users={users}>
      <Users />
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
