export function IngredientsShow(props) {
  return (
    <div>
      <h1>Ingredient information</h1>
      <p>Name: {props.ingredient.name}</p>
      <p>Image_url: {props.ingredient.image.url}</p>
    </div>
  );
}
