import { Container } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return <Container>{children}</Container>;
}
