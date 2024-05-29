import { Grid, Stack, Typography } from "@mui/material";
import { ToppingGroup } from "../../components/home";
import { TPizza, TTopping } from "../../constants";

type Props = {
  pizza: TPizza | null;
  selectedToppings: string[];
  setSelectedToppings: (selectedToppings: string[]) => void;
  addedToppings: TTopping[];
  setAddedToppings: (addedToppings: TTopping[]) => void;
  setTotal: (total: number) => void;
};

export default function Topping({
  pizza,
  selectedToppings,
  setAddedToppings,
  addedToppings,
  setSelectedToppings,
  setTotal,
}: Props) {
  return (
    <Stack>
      <Typography variant="h4" component="h1">
        Toppings
      </Typography>
      <Grid container>
        <ToppingGroup
          pizza={pizza}
          selectedToppings={selectedToppings}
          setSelectedToppings={setSelectedToppings}
          addedToppings={addedToppings}
          setAddedToppings={setAddedToppings}
          setTotal={setTotal}
        />
      </Grid>
    </Stack>
  );
}
