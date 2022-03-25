import { Link, useRouteMatch } from "react-router-dom";

function Card({ card, handleDeleteCard }) {
  const { url } = useRouteMatch();

  return (
    <div className="list-group-item">
      <div className="d-flex justify-content-between">
        <p className="col">{card.front}</p>
        <p className="col">{card.back}</p>
      </div>
      <div className="d-flex justify-content-end">
        <Link
          to={`${url}/cards/${card.id}/edit`}
          type="button"
          className="btn btn-secondary mr-2 bi bi-pencil-square"
        >
          <span className="ml-1">Edit</span>
        </Link>
        <button
          type="button"
          className="btn btn-danger bi bi-trash"
          onClick={handleDeleteCard}
        >
          <span className="ml-1">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default Card;