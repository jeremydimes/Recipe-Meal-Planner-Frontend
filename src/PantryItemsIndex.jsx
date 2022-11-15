export function PantryItemsIndex(props) {
  return (
    <div>
      <h1>My Pantry</h1>
      {props.pantryItems.map((pantryitem) => (
        <div key={pantryitem.id}>
          <span>Ingredient name: {pantryitem.ingredient.name} </span>
        </div>
      ))}
    </div>
  );
}
