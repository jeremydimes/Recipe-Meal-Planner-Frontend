import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsNew } from "./IngredientsNew";
import { IngredientsShow } from "./IngredientsShow";
import { Modal } from "./Modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { PantryItemsNew } from "./PantryItemsNew";
import { PantryItemsIndex } from "./PantryItemsIndex";

export function Home() {
  const [ingredients, setIngredients] = useState([]);
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
      console.log(response.data);
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

  const handleCreatePantryItemsNew = (params, successCallback) => {
    console.log("handleCreatePantyItemsNew", params);
    axios
      .post("http://localhost:3000/pantryitemsnew.json", params)
      .then((response) => {
        setPantryItems([...pantryItems, response.data]);
        successCallback();
      });
  };
  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsIngredientsShowVisible(false);
  };
  console.log("hello", ingredients);
  useEffect(handleIndexIngredients, []);
  useEffect(handleIndexPantryItems, []);

  return (
    <div>
      <PantryItemsIndex pantryItems={pantryItems} />
      <Calendar />
      <Signup />
      <Login />
      <LogoutLink />
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />
      <PantryItemsNew onCreatePantryItemsNew={handleCreatePantryItemsNew} />
      <IngredientsIndex
        ingredients={ingredients}
        onShowIngredient={handleShowIngredient}
      />
      <Modal show={isIngredientsShowVisible} onClose={handleClose}>
        <IngredientsShow ingredient={currentIngredient} />
      </Modal>
    </div>
  );
}
