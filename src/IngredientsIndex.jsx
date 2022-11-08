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
                <h5 className="card-title">{ingredient.title}</h5>
                <p className="card-text">Chef: {ingredient.chef}</p>
                <button onClick={() => props.onShowIngredient(ingredient)}>
                  More info
                </button>
                <a
                  className="btn btn-primary"
                  onClick={() => props.onSelectIngredient(ingredient)}
                >
                  More info More info modal
                </a>
                <a
                  className="btn btn-primary"
                  href={`/ingredients/${ingredient.id}`}
                >
                  Go to show page
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
