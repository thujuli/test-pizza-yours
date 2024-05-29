import { TTopping } from "../topping/type";

export type TPizzaSize = "Small" | "Medium" | "Large";

export type TVariant = {
  price: number;
  size: TPizzaSize;
};

export type TPizza = {
  name: string;
  image: string;
  variant: TVariant;
  freeToppings: TTopping[];
};

export type TPizzaName = "Pizza 1" | "Pizza 2" | "Pizza 3";
