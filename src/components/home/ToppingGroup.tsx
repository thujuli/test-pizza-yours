import { TPizza, TTopping, toppings } from "../../constants";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";

type Props = {
  pizza: TPizza | null;
  selectedToppings: string[];
  setSelectedToppings: (selectedToppings: string[]) => void;
  addedToppings: TTopping[];
  setAddedToppings: (addedToppings: TTopping[]) => void;
  setTotal: (total: number) => void;
};

export default function ToppingGroup({
  pizza,
  selectedToppings,
  setSelectedToppings,
  addedToppings,
  setAddedToppings,
  setTotal,
}: Props) {
  return toppings.map((topping) => {
    const isToppingSelected = selectedToppings.includes(topping.name);
    const isToppingFree = pizza?.freeToppings.some(
      (freeTopping) => freeTopping.name === topping.name
    );

    const handleChange = () => {
      const newSelectedToppings = isToppingSelected
        ? selectedToppings.filter((t) => t !== topping.name)
        : [...selectedToppings, topping.name];

      setSelectedToppings(newSelectedToppings);

      const newToppings = isToppingSelected
        ? addedToppings.filter((t) => t.name !== topping.name)
        : [...addedToppings, topping];

      setAddedToppings(newToppings);

      const totalAddedToppings = newToppings.reduce(
        (acc, curr) => acc + curr.price,
        0
      );

      if (pizza && Object.keys(pizza).length > 0) {
        setTotal(pizza.variant.price + totalAddedToppings);
      }
    };

    return (
      <Grid item key={topping.name} xs={4}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isToppingSelected}
              onChange={handleChange}
              disabled={isToppingFree}
            />
          }
          label={topping.name}
        />
      </Grid>
    );
  });
}
