export function PantryitemsNew() {
  return (
    <div>
      <h1>New Pantry_item</h1>
      <form>
        <div>
          Ingredient_id: <input name="ingredient_id" type="text" />
        </div>
        <div>
          User_id: <input name="user_id" type="text" />
        </div>
        <div></div>
        <div></div>
        <button type="submit">Create pantry_item</button>
      </form>
    </div>
  );
}
