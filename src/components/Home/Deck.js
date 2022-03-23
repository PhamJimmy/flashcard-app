import React from "react";
import { Link } from "react-router-dom";

function Deck({ deck, setDeck }) {

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
            className="btn btn-secondary mr-2"
          >
            View
          </Link>
          <Link
            to={`decks/${deck.id}/study`}
            type="button"
            className="btn btn-primary"
          >
            Study
          </Link>
        </div>
        <div className="delete-button">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deck;
