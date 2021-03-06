import React from "react";
import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const configButton = {
    ...otherProps,
    onClick: () => submitForm(),
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
