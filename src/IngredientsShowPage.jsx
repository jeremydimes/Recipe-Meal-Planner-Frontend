import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function IngredientsShowPage() {
  const [ingredient, setIngredient] = useState({});
  const params = useParams();

  const handleShowIngredient = () => {
    axios
      .get(`http://localhost:3000/ingredients/${params.id}.json`)
      .then((response) => {
        console.log(response.data);
        setIngredient(response.data);
      });
  };

  useEffect(handleShowIngredient, []);

  return (
    <div>
      <h1>Ingredient info</h1>
      <p>Title: {ingredient.title}</p>
      <img src={ingredient.image_url} alt="" />
      <p>Chef: {ingredient.chef}</p>
      <p>Ingredients: {ingredient.ingredients}</p>
      <p>Directions: {ingredient.directions}</p>
      <a className="btn btn-primary" href="/ingredients">
        Back to all ingredients
      </a>
    </div>
  );
}
