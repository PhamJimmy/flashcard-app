function Card({ card }) {

  return (
    <div className="list-group-item">
      <div className="d-flex justify-content-between">
        <p className="col">{card.front}</p>
        <p className="col">{card.back}</p>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary mr-2">
          Edit
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;