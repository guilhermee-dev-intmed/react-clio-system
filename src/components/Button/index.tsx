import React from "react";
import { CircularProgress } from "../CircularProgress";
import { Typography } from "../Typography";
import { ButtonContent, ElementButton, LoadingContainer } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  label = "enviar",
  size = "medium",
  variant = "contained",
  loading,
  loandingWithContainer,
  ...rest
}: ButtonProps) {
  const buttonProperties = {
    ...rest,
    ...{
      size,
      variant,
    },
  };

  function LoadingVisibility() {
    return loading ? <CircularProgress size={15} /> : <></>;
  }

  function LoadinWithContentVisibility() {
    return loandingWithContainer ? <CircularProgress size={15} /> : <></>;
  }

  return (
    <ElementButton {...buttonProperties}>
      <LoadingContainer>
        <LoadingVisibility />
      </LoadingContainer>
      <ButtonContent loading={loading}>
        <LoadinWithContentVisibility />
        <Typography weight="bold">{label}</Typography>
      </ButtonContent>
    </ElementButton>
  );
}
