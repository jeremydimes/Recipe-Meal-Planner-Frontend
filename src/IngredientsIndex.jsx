export function IngredientsIndex(props) {
  return (
    <div id="ingredients-index">
      <h1>All Ingredients</h1>

      <div className="row">
        {props.ingredients.map((ingredient) => (
          <div className="col-md-3 mb-4" key={ingredient.id}>
            <div className="card">
              <img
                src={ingredient.image_url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{ingredient.name}</h5>
                <p className="card-text"></p>
                <button
                  className="btn btn-primary"
                  onClick={() => props.onCreatePantryItem(ingredient)}
                >
                  Add To Pantry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
