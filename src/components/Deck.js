import React from "react";
import { useHistory } from "react-router-dom";

function Deck({ deck, setDeck }) {
  const history = useHistory();

  const handleStudy = () => {
    history.push(`decks/${deck.id}/study`)
  }

  return (
    <div className="deck list-group-item">
      <div className="deckHeading d-flex w-100 justify-content-between">
        <h5 className="mb-1">{deck.name}</h5>
        <small>{deck.cards.length} cards</small>
      </div>
      <p className="mb-1">{deck.description}</p>
      <div className="deck-buttons d-flex justify-content-between">
        <div className="view-study-buttons">
          <button type="button" className="btn btn-secondary mr-2">
            View
          </button>
          <button type="button" className="btn btn-primary" onClick={handleStudy}>
            Study
          </button>
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
