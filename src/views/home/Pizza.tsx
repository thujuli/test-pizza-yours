import { Grid, RadioGroup, Stack, Typography } from "@mui/material";
import { PizzaGroup } from "../../components/home";
import React from "react";

type Props = {
  handleChangePizza: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Pizza({ handleChangePizza }: Props) {
  return (
    <Stack>
      <Typography variant="h4" component="h1">
        Pizza
      </Typography>
      <Grid container marginTop="1rem">
        <RadioGroup onChange={handleChangePizza} row>
          <PizzaGroup />
        </RadioGroup>
      </Grid>
    </Stack>
  );
}
