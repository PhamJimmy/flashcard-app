import React from "react";
import { Link } from "react-router-dom";

function Deck({ deck, setDeck, handleDelete }) {

  return (
    <div className="deck list-group-item">
      <div className="deckHeading d-flex w-100 justify-content-between">
        <h5 className="mb-1">{deck.name}</h5>
        <small>{deck.cards.length} cards</small>
      </div>
      <p className="mb-1">{deck.description}</p>
      <div className="deck-buttons d-flex justify-content-between">
        <div className="view-study-buttons">
          <Link
            to={`decks/${deck.id}`}
            type="button"
            className="btn btn-secondary bi bi-eye mr-2"
          >
            <span className="ml-1">View</span>
          </Link>
          <Link
            to={`decks/${deck.id}/study`}
            type="button"
            className="btn btn-primary bi bi-book"
          >
            <span className="ml-1">Study</span>
          </Link>
        </div>
        <div className="delete-button">
          <button
            type="button"
            className="btn btn-danger bi bi-trash"
            onClick={handleDelete}
          >
            <span className="ml-1">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deck;
