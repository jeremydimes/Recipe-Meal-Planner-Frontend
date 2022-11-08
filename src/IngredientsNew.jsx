export function IngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredients(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Ingredients</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Url: <input name="url" type="text" />
        </div>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image_url: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create ingredient</button>
      </form>
    </div>
  );
}
