import { NavLink } from "react-router-dom";

function Breadcrumb({ deck, createDeck=false, editDeck=false, study=false, addCard=false, editCard=false, cardId }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink to="/" className="bi bi-house-door-fill">
            <span className="ml-1">Home</span>
          </NavLink>
        </li>
        {!createDeck ? (
          <li className="breadcrumb-item">
            <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink>
          </li>
        ) : (
          <li className="breadcrumb-item">Create Deck</li>
        )}
        {!study || <li className="breadcrumb-item">Study</li>}
        {!editDeck || <li className="breadcrumb-item">Edit Deck</li>}
        {!addCard || <li className="breadcrumb-item">Add Card</li>}
        {!editCard || <li className="breadcrumb-item">Edit Card {cardId}</li>}
      </ol>
    </nav>
  );
}

export default Breadcrumb;