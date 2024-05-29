import { TPizzaSize, sizes } from "../../constants";
import { FormControlLabel, Radio } from "@mui/material";

type Props = {
  pizzaSize: TPizzaSize;
};

export default function SizeGroup({ pizzaSize }: Props) {
  return sizes.map((size) => (
    <FormControlLabel
      key={size}
      value={size}
      control={<Radio checked={size === pizzaSize} />}
      label={size}
      labelPlacement="bottom"
    />
  ));
}
