export function PantryItemsShow(props) {
  return (
    <div>
      <h1>PantryItem information</h1>
      <p>Ingredient_id: {props.PantryItem.ingredient_id}</p>
      <p>User_id: {props.PantryItem.user_id}</p>
    </div>
  );
}
