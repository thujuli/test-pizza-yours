import { pizzas } from "../../constants";
import { FormControlLabel, Grid, Radio } from "@mui/material";
import Poster from "./Poster";

export default function PizzaGroup() {
  return pizzas.map((pizza) => (
    <Grid item key={pizza.name} xs={4} sx={{ border: "1px solid black" }}>
      <FormControlLabel
        key={pizza.name}
        value={pizza.name}
        control={<Radio />}
        label={
          <Poster
            image={pizza.image}
            name={pizza.name}
            price={pizza.variant.price}
          />
        }
        labelPlacement="top"
      />
    </Grid>
  ));
}
