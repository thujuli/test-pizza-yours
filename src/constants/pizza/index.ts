import {
  AVOCADO,
  BACON,
  DUCK,
  LOBSTER,
  OYSTER,
  SALMON,
  SAUSAGE,
  TUNA,
} from "../topping/index";
import { TPizza, TPizzaSize } from "./type";

export const pizza1: TPizza = {
  name: "Pizza 1",
  image: "pizza1.jpeg",
  variant: { price: 8, size: "Medium" },
  freeToppings: [LOBSTER, OYSTER, SALMON, BACON, DUCK, SAUSAGE],
};

export const pizza2: TPizza = {
  name: "Pizza 2",
  image: "pizza2.jpg",
  variant: { price: 10, size: "Medium" },
  freeToppings: [AVOCADO, TUNA, DUCK, SAUSAGE],
};

export const pizza3: TPizza = {
  name: "Pizza 3",
  image: "pizza3.jpg",
  variant: { price: 12, size: "Medium" },
  freeToppings: [AVOCADO, LOBSTER, OYSTER, SALMON],
};

export const pizzas = [pizza1, pizza2, pizza3];

export const sizes: TPizzaSize[] = ["Small", "Medium", "Large"];
