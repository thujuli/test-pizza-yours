import { RadioGroup, Stack, Typography } from "@mui/material";
import React from "react";
import { SizeGroup } from "../../components/home";
import { TPizzaSize } from "../../constants";

type Props = {
  handleChangeVariant: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pizzaSize: TPizzaSize;
};

export default function Size({ handleChangeVariant, pizzaSize }: Props) {
  return (
    <Stack>
      <Typography variant="h4" component="h1">
        Size
      </Typography>
      <Stack direction="row" gap="1rem">
        <RadioGroup onChange={handleChangeVariant} row>
          <SizeGroup pizzaSize={pizzaSize} />
        </RadioGroup>
      </Stack>
    </Stack>
  );
}
