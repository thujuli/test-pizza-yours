import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import "./App.css";
import { pizzas } from "./constants";
import type {
  TPizza,
  TPizzaName,
  TPizzaSize,
  TTopping,
  TVariant,
} from "./constants";
import { getSizePrice } from "./lib/getSizePrice";
import { Pizza, Price, Size, Topping } from "./views/home";

function App() {
  const [pizza, setPizza] = useState<TPizza | null>(null);
  const [variant, setVariant] = useState<TVariant>({
    price: 0,
    size: "Medium",
  });
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [addedToppings, setAddedToppings] = useState<TTopping[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (pizza?.variant) setVariant(pizza.variant);
    if (pizza?.freeToppings) {
      const newSelectedToppings = pizza.freeToppings.map(
        (topping) => topping.name
      );
      setSelectedToppings(newSelectedToppings);
    }
  }, [pizza]);

  const handleChangePizza = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPizza = pizzas.find(
      (p) => p.name === (e.target.value as TPizzaName)
    );
    if (newPizza) {
      setPizza(newPizza);
      setAddedToppings([]);
      setTotal(newPizza.variant.price);
      setVariant(newPizza.variant);
    }
  };

  const handleChangeVariant = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVariant = e.target.value as TPizzaSize;
    const priceDiff = getSizePrice(newVariant, variant.size);
    const newPrice = variant.price + priceDiff;

    setVariant({ ...variant, size: newVariant, price: newPrice });

    setAddedToppings([]);

    if (pizza && Object.keys(pizza).length > 0) {
      setPizza({
        ...pizza,
        variant: { ...variant, size: newVariant, price: newPrice },
      });

      setTotal(newPrice);
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "80vh",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <Pizza handleChangePizza={handleChangePizza} />

      <Size
        handleChangeVariant={handleChangeVariant}
        pizzaSize={variant.size}
      />

      <Topping
        addedToppings={addedToppings}
        pizza={pizza}
        selectedToppings={selectedToppings}
        setSelectedToppings={setSelectedToppings}
        setAddedToppings={setAddedToppings}
        setTotal={setTotal}
      />

      <Price total={total} />
    </Stack>
  );
}

export default App;
