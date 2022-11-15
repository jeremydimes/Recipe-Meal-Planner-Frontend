export function IngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Ingredients</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input className="form-control" name="name" type="text" />
        </div>
        <div>
          Url: <input className="form-control" name="image_url" type="text" />
        </div>

        <button className="btn btn-primary" type="submit">
          Create ingredient
        </button>
      </form>
    </div>
  );
}
