export function PantryItemsIndex(props) {
  return (
    <div>
      <h1>hello</h1>
      {props.pantryItems.map((pantryitem) => (
        <div key={pantryitem.id}>
          <h2>{pantryitem.name}</h2>
          <img src={pantryitem.url} />
          <p>Ingredient_id: {pantryitem.ingredient_id}</p>
          <p>User_id: {pantryitem.user_id}</p>
        </div>
      ))}
    </div>
  );
}
