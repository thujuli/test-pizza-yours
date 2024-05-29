import { TVariant } from "../constants";

export const getSizePrice = (
  newSize: TVariant["size"],
  oldSize: TVariant["size"]
) => {
  const prices = { Small: -1, Medium: 0, Large: 2 };
  return prices[newSize] - prices[oldSize];
};
