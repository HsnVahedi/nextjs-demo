import { Box } from "@material-ui/core";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TextField from "./textfield";
import Button from "./button";
import { useAuth } from "../../../context/auth";
import { getUserByCredentials } from "../../../modules/auth";

const INITIAL_FORM_STATE = {
  name: "",
  username: "",
};

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().trim().required("Required"),
  username: Yup.string().trim().required("Required"),
});

const LoginForm = ({ setAuthError }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, loginUser } = useAuth();

  useEffect(() => {
    if (user) {
      router.push(`/users/${user.username}`);
    }
  }, [user, router]);

  return (
    <Formik
      initialValues={{
        ...INITIAL_FORM_STATE,
      }}
      validationSchema={FORM_VALIDATION}
      onSubmit={async (values) => {
        setIsSubmitting(true);
        const newUser = await getUserByCredentials(
          values.name,
          values.username
        );
        if (newUser) {
          loginUser(newUser);
          router.push(`/users/${newUser.username}`);
        } else {
          setAuthError("Invalid Credentials");
          setIsSubmitting(false);
        }
      }}
    >
      <Form>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          name="name"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          name="username"
          variant="outlined"
        />
        <Box mt={2}>
          <Button
            color="secondary"
            disabled={isSubmitting}
            fullWidth
            size="large"
            variant="contained"
          >
            {isSubmitting ? "Please Wait ..." : "Login"}
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default LoginForm;
