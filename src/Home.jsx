import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsNew } from "./IngredientsNew";
import { IngredientsShow } from "./IngredientsShow";
import { PantryItemsShow } from "./PantryItemsShow";

import { Modal } from "./Modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { PantryItemsNew } from "./PantryItemsNew";
import { PantryItemsIndex } from "./PantryItemsIndex";

export function Home() {
  const [ingredients, setIngredients] = useState([]);

  const [isPantryItemsShowVisible, setIsPantryItemsShowVisible] =
    useState(false);
  const [currentPantryItem, setCurrentPantryItem] = useState({});
  const [isIngredientsShowVisible, setIsIngredientsShowVisible] =
    useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [pantryItems, setPantryItems] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleIndexPantryItems = () => {
    console.log("handleIndexPantryItems");
    axios.get("http://localhost:3000/pantry_items.json").then((response) => {
      console.log("Pantry", response.data);
      setPantryItems(response.data);
    });
  };

  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredients", params);
    axios
      .post("http://localhost:3000/ingredients.json", params)
      .then((response) => {
        setIngredients([...ingredients, response.data]);
        successCallback();
      });
  };

  const handleCreatePantryItem = (ingredient) => {
    console.log("handleCreatePantyItemsNew", ingredient);
    axios
      .post("http://localhost:3000/pantry_items.json", {
        ingredient_id: ingredient.id,
      })
      .then((response) => {
        setPantryItems([...pantryItems, response.data]);
      });
  };

  const handleShowPantryItem = (PantryItem) => {
    console.log("handleShowPantryItem", PantryItem);
    setIsPantryItemsShowVisible(true);
    setCurrentPantryItem(PantryItem);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPantryItemsShowVisible(false);
  };

  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleCloseIngredients = () => {
    console.log("handleClose");
    setIsIngredientsShowVisible(false);
  };
  console.log("hello", ingredients);

  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantryItems, []);

  return (
    <div>
      <IngredientsIndex
        ingredients={ingredients}
        onShowIngredient={handleShowIngredient}
        onCreatePantryItem={handleCreatePantryItem}
      />
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />
      <PantryItemsIndex
        pantryItems={pantryItems}
        onShowPantryItem={handleShowPantryItem}
      />

      <Calendar />

      <Modal show={isIngredientsShowVisible} onClose={handleCloseIngredients}>
        <IngredientsShow ingredient={currentIngredient} />
      </Modal>

      <Modal show={isPantryItemsShowVisible} onClose={handleClose}>
        <PantryItemsShow pantryItem={currentPantryItem} />
      </Modal>
    </div>
  );
}
